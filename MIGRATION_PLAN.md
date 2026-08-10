# React Migration Plan — clnsc (SANGVISH → Fenizo site)

Analysis only. No React code has been written or modified as part of this plan.

## 0. Critical context before anything else

**This is not a fresh migration.** Two partial React ports already exist in this folder, and the source HTML itself is a snapshot of a live WordPress site under someone else's brand. Both facts change the plan materially.

### 0.1 Two existing React attempts already in D:\clnsc

| | `react-app` | `react-app-v2` |
|---|---|---|
| Pages routed | **21/21 (100%)** | 6/21 (~29%) — 15 clone pages missing, incl. links the mega-menu already points to |
| Component style | Type-organized (`components/{common,layout,sections}`), generic & prop-driven — one `Hero`, `PricingSection`, `TabbedFaqSection`, etc. reused by all pages | Page/feature-organized (`components/{alibaba,erp,home,vinted,...}` + a `shared/` folder that looks like an unfinished extraction — several components exist in both a page-specific and shared form) |
| Branding | 100% original **"Sangvish"** (unchanged) | Rebranded to **"Fenizo Technologies Pvt Ltd"**, with Sangvish's real CIN/GSTIN/phone/address deliberately scrubbed and replaced with clearly-marked placeholders (`data/siteContact.js`, `data/socialLinks.js`) |
| CSS strategy | Bundled through Vite (`import` into JS, code-split per page) | Copied into `public/`, injected at runtime via `<link>` tags through a custom `usePageStylesheets` hook — not part of the Vite build |
| Images | Moved into `src/assets`, resolved via `import.meta.glob`, Vite-optimized | Left in `public/wp-content/uploads/...`, referenced by hardcoded string paths |
| Build | Clean, ~9.8s, code-split output | Clean, ~2.1s, single 492 kB JS bundle |
| Extras | `useSessionPopup`, `useWordRotator` hooks; contact form has validation but no backend (`TODO: POST to a real endpoint`) | `useInView` (scroll-reveal), `usePageStylesheets`; contact form has no validation |

Neither has its own git repo or history — no way to see *why* work stopped on either.

**Recommendation:** `react-app` is the stronger base for coverage and architecture (all 21 pages, proper Vite asset pipeline, cleaner reusable-component split). `react-app-v2` did real, necessary work that shouldn't be redone — the Fenizo rebrand data and asset staging for all 21 pages already sitting in its `public/`. The pragmatic path is very likely: **continue from `react-app`'s scaffolding, and port over `react-app-v2`'s rebrand data files and Fenizo copy**, rather than finishing v2's remaining 15 pages from its current base or starting a v3. This needs your confirmation before any code gets touched (see §11 Decisions Needed).

### 0.2 The site is still branded for a different company

Every page's `<title>`, JSON-LD `Organization`, OG tags, canonical domain, and social links point to **`sangvish.com`** / "SANGVISH" / `sangvish-technologies`. `react-app-v2`'s partial rebrand to "Fenizo Technologies" (matching your `fenizotechnologies.com` address) confirms this is an intentional in-progress rebrand, not an oversight — but it means the migration is a **content/brand migration**, not just a template port. Real Fenizo business details (address, GSTIN/CIN, phone, social handles, logo, analytics/pixel IDs, Tawk.to property, reCAPTCHA site key) will be needed before launch; the current placeholders (`[Add CIN]`, `+91XXXXXXXXXX`) can't ship as-is.

---

## 1. Total HTML pages: **21**

`index`, `contact-us`, `erp-software`, `schedule-free-demo`, and 17 clone pages: `airbnb`, `alibaba`, `amazon`, `fiverr`, `gojek`, `olx`, `rental-booking-script`, `swiggy`, `tiktok`, `tinder`, `turo`, `uber`, `udemy`, `vinted`, `whatsapp`, `youtube`, `zillow`.

## 2. CSS files: **71**

- `assets/css/`: 67 files — per-page LiteSpeed-combined bundles (`<page>-8-*.css`, `<page>-11-*.css`, `<page>-12-*.css` = theme/plugin/WPBakery layers split by LiteSpeed's optimizer) + 9 `shared-*.css` files reused across pages.
- `wp-content/litespeed/css/`: 4 more combined bundles.
- Plus `assets/vendor/font-awesome/6.4.2/css/` and `assets/fonts/google-fonts.css` (self-hosted `@font-face` declarations).
- No source/authored CSS exists anywhere — everything on disk is a **build output** of WordPress + WPBakery + LiteSpeed Cache's minify/combine step. There is no clean per-component stylesheet to "port"; styles must be extracted from these bundles or rebuilt from the rendered HTML/CSS.

## 3. JavaScript files: **66**

- `assets/js/`: 58 files, same per-page + `shared-*` split as CSS.
- `wp-content/litespeed/js/`: 7 combined bundles, **~9.5 MB total** (0.9–1.5 MB each), heavily duplicated across page-variants, opaque/minified with no per-library attribution.
- `wp-includes/js/jquery/jquery.min.js`: 1 file (jQuery Migrate v3.4.1 banner confirms jQuery 3.x).
- Real libraries only identifiable by grepping bundle contents for signature strings (see §7) — filenames give no indication of contents.

## 4. Image assets: **562**

- `wp-content/uploads/`: 549 files (452 `.webp`, 85 `.png`, 5 `.svg`, 4 `.jpg`), organized by year (2021–2026).
- `wp-content/themes/ave/assets/`: remaining theme-default images.
- No images live under `assets/` itself — everything is served from the WordPress uploads path, meaning the React app's image pipeline must either import from a copied `src/assets` (as `react-app` does) or keep string paths into a mirrored `public/wp-content/uploads` (as `react-app-v2` does).

## 5. Fonts: **87 files**

- Self-hosted `@font-face` woff2 sets for **Montserrat** (10), **Poppins** (~60, many weights/subsets), **Roboto** (~17), declared in `assets/fonts/google-fonts.css`.
- `wp-content/uploads/smile_fonts/Defaults/` — a custom icon font (`.eot/.svg/.ttf/.woff`), likely a WPBakery icon-picker set.

## 6. Icons

- **Font Awesome 6.4.2** (`assets/vendor/font-awesome/6.4.2/`, 9 files: CSS + webfonts) — the sitewide icon system (nav, feature icon-boxes, socials).
- The custom `smile_fonts` icon set above (secondary icon font).
- **Favicon is a bug**: every page points to `wp-content/uploads/2026/03/whatsapp.png` — literally a WhatsApp promo icon left in place as the site favicon (see §30).

## 7. Third-party libraries actually in use

Confirmed by grepping bundle contents (filenames are not descriptive):

- **jQuery 3.x + jQuery Migrate 3.4.1**
- **Flickity** (Metafizzy — powers all carousels: testimonials, feature highlights, mobile-screenshot galleries) — **commercially licensed**, factor into migration cost/license decision (§11).
- **Isotope + imagesLoaded** (Metafizzy — grid/masonry filtering, likely for a Portfolio page not in this crawl)
- **Lity** (lightweight lightbox, used for the PDF-download-gate modal)
- **Font Awesome 6.4.2**
- Google Fonts, self-hosted (not a live CDN call)
- **WooCommerce** front-end assets enqueued (cart icon/offcanvas present) but **no working checkout form** found — "purchase" appears to route through CF7 lead forms instead.
- **Contact Form 7** v6.1.5 + **reCAPTCHA v3** (site key `6Lf4aYMrAAAAAK35O5Ksezl2RkewwUH2Bc_yiTTN`) + a country-flag phone-field plugin (`nbcpf-countryFlag`)
- **Popup Maker** plugin (the auto-opening sale popup)
- **kk-star-ratings** plugin
- **Tawk.to** live chat (property `59c609d7c28eca75e4621be4`)
- **Brevo/Sendinblue** (`sib-front-js`) — appears to be a server-side CF7 integration only, no visible client widget

**Confirmed absent** despite Bootstrap-shaped class names: Bootstrap (any version — no actual file/string found; tabs use `data-toggle` not `data-bs-toggle`, driven by custom theme JS), Owl Carousel, Swiper, Slick, GSAP, AOS, WOW.js, Animate.css, Magnific Popup, MixItUp, CounterUp, Google Analytics/GTM, Hotjar, Clarity. Don't reach for these by habit — the real dependency list is the one above.

---

## 8/14. Duplicate code & duplicate CSS

- **Header** and **Footer** are byte-identical across all pages once you normalize WPBakery's per-render random shortcode IDs and CF7 instance counters — genuinely one shared component each, not just "similar." Only real per-page difference: which nav item gets `current-menu-item`, and a page-specific CSS include for the promo bar.
- **Exception:** `schedule-free-demo.html` has **no header, no footer, no mega-menu at all** — a deliberately bare, chrome-free landing page. Model this as a separate "bare" layout, not a variant of the standard layout.
- CSS duplication is structural, not just repeated snippets: LiteSpeed splits each page's styles into 3 layers (`-8-`, `-11-`, `-12-` suffixes) that overlap heavily with every other page's layers, plus 9 `shared-*.css` files already factored out by the optimizer. None of this maps cleanly to component-scoped CSS as-is — expect to rebuild stylesheets from rendered output rather than literally porting these files.

## 9/10. Reusable sections → recommended React components

| Section | Coverage | Verdict |
|---|---|---|
| **Header** (promo bar, mega menu, cart offcanvas) | 20/21 (all but schedule-free-demo) | 1 shared component, ~static |
| **Footer** (schedule-callback block, sitemap, currency switcher, trust badges, countdown) | 20/21 | 1 shared component, ~static |
| **Hero** | Product hero on ~18 pages, distinct Home/Contact/None variants | **4 variants**: `ProductHero` (data-driven, the main one), `HomeHero`, `TitleOnlyHero`, no-hero |
| **Mid-page CTA banner** | 19/21 | 1 shared component (single promo image) |
| **Pricing table** | 18/21 | 1 shared, fully data-driven component |
| **Testimonials** (video carousel, same 9 customers everywhere) | Present via footer on 20 pages + duplicated on index/schedule | 1 shared component, content is near-hardcodeable |
| **FAQ** | 18/21 accordion-style via custom `ld_tabs` widget; **3 pages** (`zillow`, `vinted`, `alibaba`) use a *different* WPBakery `vc_tta` accordion | 2 components needed, or normalize to one during migration — flag this inconsistency explicitly |
| **Contact form** | All 21, but **4 distinct field-set variants** (PDF lead-gen, demo-scheduling, general inquiry, post-sale support ticket) | 1 `ContactForm` driven by a field-schema config, not 4 hardcoded forms |
| **IconBox / feature card** | Ubiquitous — the single most-reused primitive site-wide (nav items, feature cards, tech-stack items, footer contact info, process steps) | Build first as a base atom; most higher-level sections compose from it |
| **Trusted-by logo strip** | Most product pages | 2 variants: auto-scroll Flickity carousel vs. static logo image in footer |
| **Tech stack banner** | ~12-13/21 | 1 data-driven component |
| **Screenshot/dashboard tabs** | Custom icon-tab widget on ~15 pages; WPBakery `tabs` shortcode reused differently on `contact-us`/`erp-software` | 1 generic `Tabs` primitive underlying both use cases |
| **WhatsApp float button + Tawk chat** | 20/21 + all 21 respectively | Two sitewide singletons, mounted once at layout/app-root level, not per-page |
| **Lead-capture popup** (Popup Maker) | All 21 | 1 singleton, mounted at layout level |
| Newsletter block, blog cards, breadcrumb (UI), sidebar, comparison table | **None found as real sections** | Don't build these — newsletter is just a checkbox in forms, no blog content in this page set, breadcrumb only exists as invisible JSON-LD, no sidebar layout anywhere, no `<table>` elements exist on the site at all |
| "How it works" process steps, star-rating banner | `index.html` only | Page-specific, one-off compositions (built from the shared IconBox primitive, so not wasted effort) |

## 11. Recommended React folder structure

Based on what already works in `react-app`, adjusted for the gaps found above (field-schema-driven forms, singleton widgets, bare layout support):

```
src/
  main.jsx
  App.jsx                      # routes, wraps pages in Layout / BareLayout
  routes/
    routes.jsx                 # route table (clean slugs; add legacy *.html redirects)
  layouts/
    SiteLayout.jsx             # Header + Footer + singletons (WhatsApp, Tawk, PromoPopup)
    BareLayout.jsx             # no header/footer — for schedule-free-demo-style pages
  components/
    layout/
      Header.jsx  MegaMenu.jsx  CartOffcanvas.jsx  CurrencySwitcher.jsx
      Footer.jsx  FooterSitemap.jsx
    common/
      IconBox.jsx               # base atom — feature cards, nav items, tech icons all compose from this
      Tabs.jsx                  # generic tab primitive (screenshot tabs, FAQ-as-tabs, contact tabs)
      FaqAccordion.jsx          # normalize the 18-page ld_tabs pattern + 3-page vc_tta pattern to one
      TestimonialCarousel.jsx
      PricingTable.jsx
      ContactForm.jsx           # field-schema driven — handles all 4 variants via config, not 4 components
      WhatsAppFloatButton.jsx
      TawkChatWidget.jsx
      PromoPopup.jsx            # Popup Maker replacement, sessionStorage/cookie-gated
      PdfDownloadModal.jsx
      LogoMarquee.jsx
    sections/
      ProductHero.jsx  HomeHero.jsx  MidPageCta.jsx  TechStackBanner.jsx
      TrustedByLogos.jsx  ScreenshotGallery.jsx  ComparisonTable.jsx (if reintroduced)
      HowItWorksSection.jsx  StarRatingBanner.jsx   # index.html-only, still worth componentizing
  pages/
    HomePage.jsx  ContactUsPage.jsx  ErpSoftwarePage.jsx  ScheduleFreeDemoPage.jsx
    ClonePages/
      AirbnbClonePage.jsx  AlibabaClonePage.jsx  ...  ZillowClonePage.jsx   # 17 files
  data/
    clonePagesConfig.js         # per-product hero copy, pricing, FAQ, tech stack — keeps pages thin
    megaMenu.js  footerSitemap.js  testimonials.js  trustBadges.js  clientLogos.js
    siteContact.js  socialLinks.js   # port from react-app-v2, fill in real Fenizo values
  hooks/
    useContactForm.js           # needs a real submit endpoint — currently a TODO in both existing apps
    useStickyHeader.js  useSessionPopup.js  useWordRotator.js  useInView.js  useMobileNav.js
  assets/
    uploads/...                 # Vite-processed images (react-app's approach — preferred over v2's public/ string-path approach)
    fonts/  styles/
  utils/
    assets.js                   # import.meta.glob lookup helper (already exists in react-app)
```

## 12. JavaScript that must become React Hooks / effects

- **Scroll-reveal animation**: the theme's `data-custom-animations`/`data-ca-options` JSON config (trigger, duration, delay, easing, from/to opacity+translateY) → reimplement as an `IntersectionObserver`-based hook or adopt Framer Motion; the existing JSON config values can be reused directly as animation params.
- **Lazy-loaded images**: `data-lazyloaded` + `data-src`/`data-srcset` swap-on-scroll shim → replace with native `loading="lazy"` (no placeholder needed) or a small custom hook if finer control is wanted.
- **Sticky header on scroll** → `useStickyHeader` (already exists in both prior apps).
- **Session/cookie-gated promo popup** (Popup Maker, 500ms auto-open, dismiss cookie `pum-63814`) → `useSessionPopup` (exists in `react-app`) using `sessionStorage`/cookie instead of PHP session state.
- **Hero headline word rotation** (if used) → `useWordRotator` (exists in `react-app`).
- **Mobile nav toggle** (`useMobileNav`, exists in `react-app-v2`) → toggling classes on `<html>`, straightforward to port to state-driven conditional classes.
- **Custom FAQ/dashboard tabs** (`data-toggle="tab"`, driven by theme JS, **not** real Bootstrap) → plain `useState`-driven active-tab index; do not "add Bootstrap 5" expecting it to work, since no real Bootstrap JS exists in the current site at all.
- **Flickity carousels** (`data-lqd-flickity` JSON config: `cellAlign`, `prevNextButtons`, `pageDots`, `groupCells`, `wrapAround`, `autoPlay`) → the config object is directly portable to `react-flickity-component`, Embla, or keen-slider depending on the licensing decision in §11.2 below.
- **Contact form submit/validation/reCAPTCHA v3** → `useContactForm` (exists in both apps, but **no real backend endpoint exists yet** — this is a hard blocker for a working migration, not just a hook rewrite).
- **PDF-download gated modal flow** (submit email → reveal "check your email" confirmation) → small local component state, no hook needed beyond the form hook.
- **Currency switcher** (WooCommerce `woocs` widget) → needs a decision: keep as a cosmetic display-only dropdown, or wire to real currency-conversion logic.

## 13. Pages requiring React Router

**All 21** — this is being rebuilt as a client-side-routed SPA, not a multi-page site, so every page needs a route. `react-app` already registers all 21 twice (clean slug + legacy `.html` path) for backward-compatible links, which is the right pattern to keep given the current CF7 forms' `action="/uber-clone/#wpcf7-..."` targets use WordPress-style permalinks that don't match the flat `.html` files (see §18) — Router needs to handle both shapes cleanly.

## 15. Inline JavaScript

Almost no *meaningful* inline JS remains in the raw HTML — LiteSpeed Cache's optimizer rewrites essentially every `<script>` into a deferred `type="litespeed/javascript" data-src="..."` placeholder, sweeping real code into the external bundles counted in §3. What's directly inline:
- A **non-functional Facebook Pixel** — only the `<noscript><img src="facebook.com/tr?...">` fallback remains on all 21 pages; the actual `fbq()` init script is missing/was stripped. **Needs a fresh Meta Pixel implementation**, not a port.
- **No Google Analytics/GTM anywhere** (0 matches) — analytics isn't currently wired at all; decide whether to add GA4/GTM during the rebuild.
- Trailing HTML comments from LiteSpeed/QUIC.cloud (cosmetic, strip on migration).

## 16. Inline CSS

**Very pervasive** — classic WPBakery per-shortcode output. Verified 188 `style=""` occurrences in `uber-clone.html` alone; file-level touch counts range from 12 lines (schedule-free-demo, the simplest page) to 61 lines (gojek-clone) across the corpus. Typical: `style="text-align:center"`, `style="margin:0px;color:#ffffff"`. This is a real refactor cost — none of it maps to component props or CSS classes without deliberate cleanup during each page's conversion; budget time for this per clone page, not just once.

Also two trivial `<style>` blocks per `<head>` (an empty LiteSpeed critical-CSS placeholder and a no-JS animation-fallback rule) — safe to drop entirely.

## 17. Missing assets

**None of consequence.** A scripted check of all 644 unique local asset references (`href`/`src`/`data-src`) across all 21 pages found **643/644 resolve** to real files on disk. The one "miss" (`wp-json/oembed/1.0/embed`) is an expected dynamic WordPress REST endpoint with no static equivalent — not a real bug. The static export is asset-complete; this is a lift-and-shift asset situation, not a recovery situation.

## 18. Hardcoded URLs

- Production domain baked into canonicals, OG tags, and JSON-LD everywhere: **`sangvish.com`** — needs global find/replace to the real Fenizo domain once decided.
- Body content links are relative and safe (`uber-clone.html`, etc.).
- **Form `action` attributes use WordPress permalink paths** (`/uber-clone/#wpcf7-...`) that don't match this flat-file export's actual filenames — these will 404 unless rewritten during migration to match the new React Router paths.
- External absolute links throughout (WhatsApp `api.whatsapp.com`, a `bit.ly/sangvish-reviews` short link needing rebrand, YouTube testimonial embeds, review-platform badges to Glassdoor/Trustpilot/AmbitionBox/SiteJabber, trust seals DMCA/TrustedSite/Norton, social icons) — all portable as-is except the Sangvish-branded ones.
- One confirmed **bug**, not just a hardcoded URL: `airbnb-clone.html`'s canonical is `href="#"` (broken) and its `og:url` is a concatenation bug (`index.htmlairbnb-clone-script/`) — worth fixing during migration rather than porting the bug forward.

## 19. Forms

All **Contact Form 7**, reCAPTCHA v3-protected, no working WooCommerce checkout anywhere in this export (cart UI exists but no functional checkout form). Four distinct field-set variants across the site:
1. **Lead-gen mid-page form** (name, email, phone, message, consent) — on all 17 clone pages + erp-software, plus a duplicate shared-footer instance.
2. **Demo-scheduling form** (name, email, WhatsApp, product dropdown, consent) — `schedule-free-demo.html` (full page) + shared footer block.
3. **General-inquiry form** (name, email, phone, country, message, consent) — `contact-us.html` tab 1.
4. **Post-sale support-ticket form** (fullname, purchase email, invoice #, product, query-type dropdown, cPanel login details, requirement) — `contact-us.html` tab 2, structurally different purpose (support, not sales) from the other three.
5. A **PDF-download gated-content form** (name + email only, inside a Lity modal) confirmed on `uber-clone.html`; likely repeats on other clone pages via shared theme markup, worth re-checking per page during actual migration.

**No backend exists yet for any of this** in either prior React attempt — `useContactForm`'s submit is a TODO. This is the single largest functional gap, not a cosmetic one.

## 20. Sliders

No Owl Carousel/Swiper/Slick anywhere. All carousels run on **Flickity** (commercially licensed), wrapped in theme markup with a `data-lqd-flickity` JSON config (directly reusable as slider-library options). Used for: testimonial video carousel, feature-highlight carousels (e.g. Rider/Driver/Admin lists), mobile-screenshot galleries, trusted-by logo strip.

## 21. Tabs

Two different mechanisms coexist:
- **Custom `ld_tabs` FAQ/Server-Requirements/Change-Log widget** (`data-toggle="tab"`, Bootstrap-4-*shaped* markup but driven by the theme's own JS — no real Bootstrap exists on the site) — on 20 pages.
- **Custom icon-tab screenshot/dashboard widget** (`id="fixed-menu"`, Rider/Driver/Admin-style) on ~15 clone pages.
- WPBakery's core `tabs` shortcode, reused differently again on `contact-us.html` (Contact/Support switcher) and `erp-software.html` (Website/Admin demo screenshots).
- A separate scroll-spy pseudo-tab (`data-localscroll`) on some pages — not a real tab panel, a smooth-scroll nav.

Recommend one generic `Tabs` primitive (§11) underlying all of these rather than treating them as identical.

## 22. Accordions

Genuine WPBakery `vc_tta` accordion markup exists on only **3 pages** (`zillow`, `vinted`, `alibaba`) — everywhere else, FAQ uses the `ld_tabs` widget from §21 instead, not a true accordion. This inconsistency should be normalized to one FAQ component during migration rather than ported as two separate patterns.

## 23. Modals

Two unrelated systems:
- **Lity lightbox** + custom theme modal — PDF-download gate and its "check your email" confirmation.
- **Popup Maker plugin** — the auto-opening promotional popup (500ms delay, dismiss cookie, bottom-left position), present on all 21 pages including `schedule-free-demo.html`.

No Bootstrap `.modal` markup exists anywhere.

## 24. Counters

**None.** No counter/CountUp/odometer widgets or "X+ clients" stat blocks found anywhere on the site — nothing to port.

## 25. Animations

No AOS, WOW.js, Animate.css, or GSAP anywhere. All scroll-reveal is the theme's proprietary `data-custom-animations`/`data-ca-options` system (JSON config: trigger=`inview`, duration, delay, easing, opacity/translateY from-to values) — maps cleanly to Framer Motion or a custom `IntersectionObserver` hook using the same parameters.

## 26. Lazy loading

Heavily used (910 combined matches across all pages): native `loading="lazy"` plus a custom shim (`data-lazyloaded`, base64 SVG placeholder in `src`, real URL in `data-src`/`data-srcset`, swapped by a LiteSpeed script on scroll). In React, either read `data-src` directly with native `loading="lazy"` (simplest, no placeholder needed) or bring an equivalent IntersectionObserver-based loader if finer control over the swap is wanted.

## 27. SEO tags

Unique, hand-written `<title>` + meta description on 19/21 pages (the 19 "product" pages). **`contact-us.html` and `schedule-free-demo.html` have thin/duplicate SEO** — generic titles, descriptions that just repeat the title. No `meta keywords` anywhere (0 matches, expected/fine — deprecated tag). `robots` meta identical and reasonable on all 21. Generated by Yoast SEO, frozen at export time. One confirmed bug: `airbnb-clone.html`'s canonical is `href="#"` (all other 20 pages self-reference correctly).

## 28. Structured data

One Yoast `@graph` JSON-LD block per page, all 21 pages: `WebPage`, `BreadcrumbList`, `WebSite`+`SearchAction`, `Organization` (with `sameAs` links to Sangvish's social profiles — needs rebrand), `ImageObject`. **Gap worth fixing, not just porting**: no `Product`, `SoftwareApplication`, `Offer`, or `FAQPage` schema exists anywhere, despite every clone page effectively selling a software product with a visible FAQ section — real SEO upside in adding these during the rebuild. The Organization logo schema URL also points to a since-removed `sangvish.com/wp-content/uploads/2023/02/logo.png`.

## 29. Open Graph tags

Present on all 21 pages but **inconsistently complete**: `og:locale/type/title/description/url/site_name` and `twitter:card/site` always present; `og:image` missing on at least `uber-clone.html` and `youtube-clone.html`; `twitter:title/description/image` populated on only about half the pages (falls back to OG tags elsewhere, which works but is inconsistent). `og:type` is `website` only on `index.html`, `article` everywhere else (semantically off for product pages, low-priority fix). Worth standardizing to one consistent OG template with page-specific title/description/image during migration rather than porting the inconsistency.

## 30. Favicon

Identical across all 21 pages, PNG-only (`shortcut icon` + 3 `apple-touch-icon` sizes, no SVG/ICO, no modern 192/512 PWA sizes) — and it's a **bug**: the file is `wp-content/uploads/2026/03/whatsapp.png`, a WhatsApp promo icon that appears to have been left in place as the sitewide favicon by mistake. Needs a real favicon (and likely a full favicon/PWA icon set) as part of the rebrand, not a straight port.

---

## Decisions needed before any code is written

1. **Which existing app do we build on?** Recommendation is continuing `react-app` (all 21 pages, better architecture) and merging in `react-app-v2`'s Fenizo rebrand data — confirm or redirect.
2. **Rebrand data**: real Fenizo company name/address/CIN/GSTIN/phone, social links, logo, domain, and which of Sangvish's third-party account IDs (Tawk.to property, reCAPTCHA site key, Brevo) transfer vs. need new accounts.
3. **Flickity license**: keep (it's commercial) or replace with an open alternative (Embla/keen-slider/Swiper) for the carousels.
4. **Contact form backend**: none exists in either prior attempt — needs an actual endpoint (custom API, form service, or a Brevo-integrated serverless function) before forms are functional, not just a hook rewrite.
5. **Bug-compatible or bug-fixed port?** Several real defects were found in the source (broken `airbnb-clone.html` canonical/OG URL, non-functional Facebook Pixel, missing GA/GTM entirely, whatsapp.png-as-favicon, thin SEO on 2 pages, inconsistent OG images, missing Product/FAQPage schema, the 3-page FAQ accordion inconsistency). Fix opportunistically during migration, or track separately and port as-is first?

Waiting for your go-ahead (and answers above) before generating any React code.
