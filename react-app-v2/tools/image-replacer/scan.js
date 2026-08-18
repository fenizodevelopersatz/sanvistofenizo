// Phase 1 (Discovery) of the image-replacer pipeline.
// Walks src/, finds every static image reference, resolves it to the page(s)
// that render it, reads real dimensions/size off disk, and classifies each
// as protected vs a candidate for review. Writes reports/image-inventory.json
// and reports/image-inventory.html. Makes zero network calls and touches no
// application files -- this is inventory only, nothing gets replaced here.

import { readFileSync, writeFileSync, existsSync, statSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP_ROOT = path.resolve(__dirname, '..', '..')
const SRC_DIR = path.join(APP_ROOT, 'src')
const PUBLIC_DIR = path.join(APP_ROOT, 'public')
const APP_JSX = path.join(SRC_DIR, 'App.jsx')
const REPORTS_DIR = path.join(__dirname, 'reports')

const PROTECTED_KEYWORDS = ['logo', 'favicon', 'icon', 'payment', 'whatsapp', 'qr', 'barcode', 'avatar', 'badge', 'gpay', 'phonepe', 'paypal', 'visa', 'mastercard']
const IMAGE_EXT = /\.(png|jpe?g|webp|svg|gif)$/i

function walk(dir, exts, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, exts, out)
    else if (exts.some((e) => entry.name.endsWith(e))) out.push(full)
  }
  return out
}

// ---------- Route table: path -> page component file ----------
function readRoutes() {
  const src = readFileSync(APP_JSX, 'utf8')
  const importMap = new Map() // componentName -> relative import path
  for (const m of src.matchAll(/const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(['"](\.[^'"]+)['"]\)\s*\)/g)) {
    importMap.set(m[1], m[2])
  }
  for (const m of src.matchAll(/^import\s+(\w+)\s+from\s+['"](\.[^'"]+)['"]/gm)) {
    importMap.set(m[1], m[2])
  }
  const routes = []
  for (const m of src.matchAll(/<Route\s+path=["']([^"']+)["']\s+element=\{<(\w+)/g)) {
    const [, routePath, componentName] = m
    const rel = importMap.get(componentName)
    if (!rel) continue
    const file = resolveModule(path.resolve(path.dirname(APP_JSX), rel))
    if (file) routes.push({ routePath, componentName, file })
  }
  return routes
}

function resolveModule(base) {
  const candidates = [base, `${base}.jsx`, `${base}.js`, path.join(base, 'index.jsx'), path.join(base, 'index.js')]
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) || null
}

// ---------- Import graph (local relative imports only) ----------
function buildImportGraph(jsxFiles) {
  const graph = new Map()
  for (const file of jsxFiles) {
    const src = readFileSync(file, 'utf8')
    const deps = new Set()
    for (const m of src.matchAll(/from\s+['"](\.[^'"]+)['"]/g)) {
      const resolved = resolveModule(path.resolve(path.dirname(file), m[1]))
      if (resolved) deps.add(resolved)
    }
    graph.set(file, deps)
  }
  return graph
}

function reachableFrom(entryFile, graph) {
  const seen = new Set([entryFile])
  const queue = [entryFile]
  while (queue.length) {
    const cur = queue.pop()
    for (const dep of graph.get(cur) || []) {
      if (!seen.has(dep)) {
        seen.add(dep)
        queue.push(dep)
      }
    }
  }
  return seen
}

// ---------- Image reference extraction ----------
function extractImgRefsFromJsx(file) {
  const src = readFileSync(file, 'utf8')
  const refs = []
  for (const tag of src.matchAll(/<img\b[^>]*>/gi)) {
    const t = tag[0]
    const staticSrc = t.match(/\bsrc=["']([^"']+)["']/)
    const dynamicSrc = t.match(/\bsrc=\{([^}]+)\}/)
    const alt = t.match(/\balt=["']([^"']*)["']/)
    if (staticSrc) {
      refs.push({ kind: 'static', value: staticSrc[1], alt: alt ? alt[1] : null, file })
    } else if (dynamicSrc) {
      refs.push({ kind: 'dynamic', expr: dynamicSrc[1].trim(), alt: alt ? alt[1] : null, file })
    }
  }
  return refs
}

function extractImagePathsFromDataFile(file) {
  const src = readFileSync(file, 'utf8')
  const refs = []
  for (const m of src.matchAll(/export\s+const\s+(\w+)\s*=/g)) {
    refs.push({ marker: m[1], index: m.index })
  }
  const paths = []
  for (const m of src.matchAll(/['"](\/[^'"]*\.(?:png|jpe?g|webp|svg|gif))['"]/gi)) {
    let owner = null
    for (const r of refs) if (r.index <= m.index) owner = r.marker
    paths.push({ value: m[1], exportName: owner, file })
  }
  return paths
}

// ---------- Minimal dimension readers (no deps) ----------
function readDimensions(absPath) {
  try {
    const buf = readFileSync(absPath)
    if (buf.length > 24 && buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG') {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
    }
    if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2
      while (i < buf.length - 9) {
        if (buf[i] !== 0xff) { i++; continue }
        const marker = buf[i + 1]
        if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
          return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) }
        }
        const segLen = buf.readUInt16BE(i + 2)
        i += 2 + segLen
      }
    }
    if (buf.length > 30 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = buf.toString('ascii', 12, 16)
      if (chunk === 'VP8X') {
        const w = 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16))
        const h = 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16))
        return { width: w, height: h }
      }
      if (chunk === 'VP8 ') {
        const w = buf.readUInt16LE(26) & 0x3fff
        const h = buf.readUInt16LE(28) & 0x3fff
        return { width: w, height: h }
      }
      if (chunk === 'VP8L') {
        const b = buf.readUInt32LE(21)
        return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 }
      }
    }
    if (absPath.endsWith('.svg')) {
      const text = buf.toString('utf8')
      const vb = text.match(/viewBox=["']\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)/)
      const w = text.match(/\bwidth=["']([\d.]+)/)
      const h = text.match(/\bheight=["']([\d.]+)/)
      if (w && h) return { width: Math.round(+w[1]), height: Math.round(+h[1]) }
      if (vb) return { width: Math.round(+vb[1]), height: Math.round(+vb[2]) }
    }
  } catch {
    // unreadable/unsupported -- leave dimensions null
  }
  return null
}

function isProtected(urlPath) {
  const lower = urlPath.toLowerCase()
  return PROTECTED_KEYWORDS.some((kw) => lower.includes(kw))
}

// ---------- Main ----------
function main() {
  const jsxFiles = walk(SRC_DIR, ['.jsx'])
  const dataFiles = walk(path.join(SRC_DIR, 'data'), ['.js'])
  const routes = readRoutes()
  const graph = buildImportGraph(jsxFiles)

  // page reachability: routePath -> Set(files)
  const pageReach = routes.map((r) => ({ ...r, reachable: reachableFrom(r.file, graph) }))

  // gather image refs per file
  const staticRefs = []
  const dynamicRefs = []
  for (const file of jsxFiles) {
    for (const ref of extractImgRefsFromJsx(file)) {
      if (ref.kind === 'static') staticRefs.push(ref)
      else dynamicRefs.push(ref)
    }
  }
  const dataRefs = dataFiles.flatMap(extractImagePathsFromDataFile)

  // which pages can reach a given source file
  function pagesForFile(file) {
    return pageReach.filter((p) => p.reachable.has(file)).map((p) => p.routePath)
  }
  // which pages import a given data file (search import graph for any file that imports it, then map those files to pages)
  function pagesForDataFile(dataFile) {
    const importers = jsxFiles.filter((f) => (graph.get(f) || new Set()).has(dataFile))
    const pages = new Set()
    for (const imp of importers) for (const p of pagesForFile(imp)) pages.add(p)
    return [...pages]
  }

  let idCounter = 1
  const inventory = []

  function addRecord({ value, alt, sourceFile, pages, note }) {
    if (/^https?:\/\//i.test(value)) {
      inventory.push({ id: `img_${String(idCounter++).padStart(4, '0')}`, urlPath: value, external: true, pages, sourceFile: path.relative(APP_ROOT, sourceFile), alt, note })
      return
    }
    const diskPath = path.join(PUBLIC_DIR, value.replace(/^\//, ''))
    const exists = existsSync(diskPath)
    const dims = exists ? readDimensions(diskPath) : null
    const size = exists ? statSync(diskPath).size : null
    inventory.push({
      id: `img_${String(idCounter++).padStart(4, '0')}`,
      urlPath: value,
      pages,
      sourceFile: path.relative(APP_ROOT, sourceFile),
      alt,
      exists,
      width: dims?.width ?? null,
      height: dims?.height ?? null,
      aspectRatio: dims ? +(dims.width / dims.height).toFixed(3) : null,
      fileSize: size,
      ext: path.extname(value).replace('.', '').toLowerCase(),
      protected: isProtected(value),
      note,
    })
  }

  for (const ref of staticRefs) {
    addRecord({ value: ref.value, alt: ref.alt, sourceFile: ref.file, pages: pagesForFile(ref.file), note: null })
  }
  for (const ref of dataRefs) {
    addRecord({ value: ref.value, alt: null, sourceFile: ref.file, pages: pagesForDataFile(ref.file), note: `via export "${ref.exportName}"` })
  }

  const dynamicUnresolved = dynamicRefs.map((r) => ({
    expr: r.expr,
    alt: r.alt,
    sourceFile: path.relative(APP_ROOT, r.file),
    pages: pagesForFile(r.file),
    note: 'dynamic JS expression -- not statically resolvable; check the matching src/data/*.js export above',
  }))

  const summary = {
    generatedAt: new Date().toISOString(),
    routesDiscovered: routes.length,
    jsxFilesScanned: jsxFiles.length,
    dataFilesScanned: dataFiles.length,
    staticImageRefs: staticRefs.length,
    dataDrivenImageRefs: dataRefs.length,
    dynamicUnresolvedRefs: dynamicRefs.length,
    protectedCount: inventory.filter((i) => i.protected).length,
    candidateCount: inventory.filter((i) => !i.protected && !i.external).length,
    missingFileCount: inventory.filter((i) => i.exists === false).length,
  }

  writeFileSync(path.join(REPORTS_DIR, 'image-inventory.json'), JSON.stringify({ summary, routes: routes.map((r) => ({ routePath: r.routePath, file: path.relative(APP_ROOT, r.file) })), inventory, dynamicUnresolved }, null, 2))
  writeFileSync(path.join(REPORTS_DIR, 'image-inventory.html'), renderHtml(summary, inventory, dynamicUnresolved))

  console.log(`Scanned ${summary.jsxFilesScanned} components across ${summary.routesDiscovered} routes.`)
  console.log(`Found ${inventory.length} statically-resolvable image refs (${summary.protectedCount} protected, ${summary.candidateCount} candidates), ${summary.dynamicUnresolvedRefs} dynamic refs needing manual trace, ${summary.missingFileCount} missing files.`)
  console.log(`Report: tools/image-replacer/reports/image-inventory.html`)
}

function renderHtml(summary, inventory, dynamicUnresolved) {
  const byPage = new Map()
  for (const item of inventory) {
    const pages = item.pages.length ? item.pages : ['(unattached / not reachable from any route)']
    for (const p of pages) {
      if (!byPage.has(p)) byPage.set(p, [])
      byPage.get(p).push(item)
    }
  }
  const rows = (items) => items.map((i) => `
    <tr class="${i.protected ? 'protected' : ''}${i.exists === false ? ' missing' : ''}">
      <td>${i.exists !== false && !i.external ? `<img class="thumb" src="http://localhost:5173${i.urlPath}" loading="lazy">` : ''}</td>
      <td><code>${i.urlPath}</code>${i.note ? `<div class="note">${i.note}</div>` : ''}</td>
      <td>${i.protected ? '<span class="tag protected">PROTECTED</span>' : i.external ? '<span class="tag external">EXTERNAL</span>' : i.exists === false ? '<span class="tag missing">MISSING FILE</span>' : '<span class="tag candidate">candidate</span>'}</td>
      <td>${i.width && i.height ? `${i.width}&times;${i.height}` : '&mdash;'}</td>
      <td>${i.aspectRatio ?? '&mdash;'}</td>
      <td>${i.fileSize ? (i.fileSize / 1024).toFixed(1) + ' KB' : '&mdash;'}</td>
      <td><code>${i.sourceFile}</code></td>
    </tr>`).join('')

  const pageSections = [...byPage.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([page, items]) => `
    <section>
      <h2>${page} <span class="count">${items.length} image ref${items.length === 1 ? '' : 's'}</span></h2>
      <table>
        <thead><tr><th></th><th>Path</th><th>Status</th><th>Dimensions</th><th>Ratio</th><th>Size</th><th>Referenced in</th></tr></thead>
        <tbody>${rows(items)}</tbody>
      </table>
    </section>`).join('')

  const dynRows = dynamicUnresolved.map((d) => `
    <tr><td><code>${d.expr}</code></td><td>${d.pages.join(', ') || '&mdash;'}</td><td><code>${d.sourceFile}</code></td><td>${d.note}</td></tr>`).join('')

  return `<!doctype html><html><head><meta charset="utf-8"><title>Image Inventory</title><style>
  body{font:14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;margin:0;padding:24px 32px;background:#fafafa;color:#1a1a1a}
  h1{margin:0 0 4px}
  .summary{display:flex;gap:16px;flex-wrap:wrap;margin:16px 0 32px}
  .stat{background:#fff;border:1px solid #e2e2e2;border-radius:8px;padding:10px 16px;min-width:120px}
  .stat b{display:block;font-size:20px}
  section{background:#fff;border:1px solid #e2e2e2;border-radius:10px;padding:16px 20px;margin-bottom:20px}
  h2{margin:0 0 12px;font-size:15px}
  .count{color:#888;font-weight:400;font-size:12px}
  table{width:100%;border-collapse:collapse;font-size:12.5px}
  th{text-align:left;padding:6px 8px;border-bottom:2px solid #eee;color:#666;font-weight:600}
  td{padding:6px 8px;border-bottom:1px solid #f0f0f0;vertical-align:top}
  tr.protected{background:#fff8e6}
  tr.missing{background:#ffefef}
  .thumb{width:56px;height:40px;object-fit:cover;border-radius:4px;border:1px solid #ddd;background:#f5f5f5}
  .tag{display:inline-block;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600}
  .tag.protected{background:#fde68a;color:#78350f}
  .tag.candidate{background:#dbeafe;color:#1e3a8a}
  .tag.external{background:#e9d5ff;color:#581c87}
  .tag.missing{background:#fecaca;color:#7f1d1d}
  .note{color:#888;font-size:11px;margin-top:2px}
  code{font-family:ui-monospace,Consolas,monospace;font-size:11.5px}
  </style></head><body>
  <h1>Image Inventory Report</h1>
  <div>Generated ${summary.generatedAt} &middot; Phase 1 (discovery only) &middot; nothing was modified or fetched from the internet</div>
  <div class="summary">
    <div class="stat"><b>${summary.routesDiscovered}</b>routes</div>
    <div class="stat"><b>${summary.jsxFilesScanned}</b>components scanned</div>
    <div class="stat"><b>${summary.staticImageRefs + summary.dataDrivenImageRefs}</b>image refs resolved</div>
    <div class="stat"><b>${summary.protectedCount}</b>protected</div>
    <div class="stat"><b>${summary.candidateCount}</b>candidates for review</div>
    <div class="stat"><b>${summary.dynamicUnresolvedRefs}</b>dynamic (manual trace)</div>
    <div class="stat"><b>${summary.missingFileCount}</b>missing files</div>
  </div>
  ${pageSections}
  <section><h2>Dynamic references (JS expressions, not statically resolvable)</h2>
  <table><thead><tr><th>Expression</th><th>Page(s)</th><th>Source</th><th>Note</th></tr></thead><tbody>${dynRows}</tbody></table>
  </section>
  </body></html>`
}

main()
