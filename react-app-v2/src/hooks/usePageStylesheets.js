import { useLayoutEffect, useState } from 'react'

// Each original page has its own compiled WPBakery CSS bundle (the "-8-", "-11-", "-12-"
// suffixed files) containing that page's vc_custom_* rules. Loading only the shared
// bundles is not enough — those page-specific files must be injected per route and
// removed on navigation away, so per-page classes actually have matching CSS.
export function usePageStylesheets(hrefs) {
  const [isReady, setIsReady] = useState(false)

  useLayoutEffect(() => {
    let cancelled = false
    let remaining = hrefs.length
    let readyFrame
    document.body.classList.add('fenizo-page-styles-loading')
    setIsReady(remaining === 0)

    if (remaining === 0) {
      document.body.classList.remove('fenizo-page-styles-loading')
    }

    const markLoaded = () => {
      remaining -= 1
      if (remaining !== 0) return
      const fontsReady = document.fonts?.ready ?? Promise.resolve()
      fontsReady.then(() => {
        if (cancelled) return
        readyFrame = window.requestAnimationFrame(() => {
          document.body.classList.remove('fenizo-page-styles-loading')
          setIsReady(true)
        })
      })
    }

    const links = hrefs.map((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.dataset.pageStylesheet = 'true'
      link.addEventListener('load', markLoaded, { once: true })
      link.addEventListener('error', markLoaded, { once: true })
      document.head.appendChild(link)
      return link
    })
    return () => {
      cancelled = true
      document.body.classList.remove('fenizo-page-styles-loading')
      if (readyFrame) window.cancelAnimationFrame(readyFrame)
      links.forEach((link) => document.head.removeChild(link))
    }
  }, [hrefs])

  return isReady
}
