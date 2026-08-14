# Vinted Clone and Homepage Final Visual/Loading QA Report

**Date:** 2026-08-14  
**Primary ID:** 002  
**React targets:** `http://localhost:5173/vinted-clone` and `http://localhost:5173/`  
**Read-only references:** `vinted-clone.html` and `index.html`

## Final outcome

The requested React reconstruction is complete for the reported scope.

- Vinted now has the same 17 top-level visual groups as the HTML reference.
- The Vinted main-content vertical geometry is within 0–3 px of the reference through the FAQ, with the Blog section 30 px taller because of Fenizo copy wrapping.
- The exact Flash Sale resource now appears through both shared React layouts, remains fixed, has the reference desktop/mobile dimensions, animates from the left, and closes correctly.
- The first paint is protected by a stylesheet/font readiness gate, so the former unstyled header, raw button, and giant black-shape flash no longer appears.
- The blank/hanging-section defect caused by `content-visibility` and unstable intrinsic estimates was removed.
- All 17 Vinted groups reveal on viewport approach. A scroll/resize safety check prevents a lazy-image layout shift from stranding a passed section at `opacity: 0`.
- The missing Vinted review logos, capability/document art, live-demo image, revenue image, and correct Why Choose image now use the exact existing HTML resources.
- Homepage Team/Tools now has the reference gradient frame, white rounded box, internal spacing, and centered Enquiry Now button.
- Homepage Connect, Services, Development Process, and footer-title icon/color families now match their corresponding HTML measurements.
- Fenizo branding/content remains intact; prohibited legacy people, claims, company identity, and testimonials were not restored.

## Highest-priority differences found and fixed

| Defect | Root cause | Final correction |
|---|---|---|
| Flash Sale absent | React reused WordPress Popup Maker classes whose plugin-owned active state never ran | Replaced with a React-owned `FlashSalePopup` using the exact source PNG and independent CSS/state |
| Unstyled content at startup | Route CSS was appended after React had already painted | Added a pre-paint stylesheet gate and a small branded spinner until route CSS and fonts are ready |
| Giant blank/hanging areas | `content-visibility: auto` plus estimated intrinsic heights changed the long page while scrolling | Removed the paint-deferral estimates; retained native image lazy loading and viewport reveal only |
| Sections could remain transparent after a fast scroll | Large lazy images could move an observed section past the intersection boundary | Added a requestAnimationFrame-throttled scroll/resize fallback that reveals every reached section |
| Trust section used the wrong badges/order | React rendered generic business badges before the client recognition content | Added the six exact review-platform images and restored review logos → recognized copy → two testimonials |
| Vinted section count/spacing differed | Closely related marketing components were rendered as independent top-level groups | Grouped Why Choose, intro, investment, AI, and comparison content into the reference visual section |
| PDF/live/revenue artwork missing | Shared React components exposed text/cards only | Added the original `vinted-document`, `website-thumb-1`, and `revenue_benefits` resources |
| Homepage showcase box/gradient missing | The HTML gradient class was absent and its `!important` page rule overrode React padding | Restored the reference class/background and enforced the measured 100 px outer frame |
| Enquiry button off center | Inner wrapper used normal WordPress flow/alignment | Centered the wrapper children and retained the measured 155 × 51 px button |
| Connect/process/service icon mismatch | Page-specific WordPress rules overrode the intended base icon styles | Added homepage-scoped exact size/color rules without changing global icons |

## Vinted section-by-section vertical comparison

The reference starts its first visual group below a 95 px header. React uses the same 95 px visible offset through collapsed WPBakery margins. Positions below are visual document positions at 1440 × 900.

| # | Visual group | Reference top / height | React top / height | Resource/design result | Status |
|---:|---|---:|---:|---|---|
| 01 | Header + Hero | 95 / 644 px | 95 / 644 px | Fenizo logo retained; hero hierarchy/buttons and spacing align | Pass |
| 02 | Trust, review logos, recognition, testimonials | 739 / 866 px | 739 / 866 px | Six exact Google/Glassdoor/Trustpilot/AmbitionBox/Sitejabber/Justdial assets; two visible quote cards | Pass |
| 03 | What is Vinted Clone? | 1,605 / 633 px | 1,605 / 633 px | Exact `vinted-clone.webp` composition | Pass |
| 04 | Why Choose + intro + investment + AI + comparison | 2,238 / 3,109 px | 2,238 / 3,108 px | Correct `website-aboutus-1.webp`, investment and AI assets; grouped as one section | Pass |
| 05 | PDF capability CTA | 5,346 / 578 px | 5,346 / 578 px | Original `vinted-document.webp` illustration restored; modal works | Pass |
| 06 | User/Seller/Admin feature screenshots | 5,925 / 2,339 px | 5,924 / 2,339 px | Exact role images; role navigation and screenshot tabs work | Pass |
| 07 | Technology We Use | 8,313 / 722 px | 8,312 / 722 px | Reference-sized technology row; real Express/MongoDB/Next assets retained | Pass |
| 08 | Book a Live Demo | 9,036 / 645 px | 9,034 / 645 px | Original `website-thumb-1.webp` restored | Pass |
| 09 | Why Our Vinted Clone Stands Out | 9,681 / 1,244 px | 9,679 / 1,244 px | Nine cards, original grouping and vertical rhythm | Pass |
| 10 | Free support heading + launch process | 10,925 / 676 px | 10,923 / 676 px | Visually grouped and fully revealed | Pass |
| 11 | Revenue heading/benefits | 11,601 / 749 px combined | 11,599 / 749 px | Original `revenue_benefits.webp` and four earning cards | Pass |
| 12 | Live Demo credentials | 12,351 / 544 px | 12,348 / 544 px | Buyer/Admin tabs show their correct email values | Pass |
| 13 | Pricing + money-back group | 12,895 / 1,595 px | 12,892 / 1,595 px | Pricing and guarantee retain the reference 50 px internal separation | Pass |
| 14 | FAQ | 14,540 / 1,025 px | 14,537 / 1,025 px | Accordion interaction verified | Pass |
| 15 | Our Journal | 15,603 / 641 px | 15,600 / 671 px | Same three article assets; +30 px from Fenizo text wrapping | Pass with copy variance |
| 16 | Meeting/testimonial group | Footer group | Shared Fenizo footer group | Verified Fenizo content; legacy people/testimonials intentionally excluded | Pass, intentional content variant |
| 17 | Business sitemap + company/payment footer | Footer group | Shared Fenizo footer group | Sitemap geometry and all measured title colors/backgrounds match | Pass |

The React Vinted main visual content ends approximately 27 px after the reference because the final Blog content wraps 30 px taller. This replaces the earlier multi-thousand-pixel mismatch.

## Vinted asset mapping

| HTML resource | React use | Result |
|---|---|---|
| `/wp-content/uploads/2022/12/Flash-sale.png` | Shared fixed Flash Sale popup | Exact |
| Six `/2025/01/*-sangvish.webp` review-platform marks | `VintedReviewLogos` | Exact visual resources; platform marks are not company branding |
| `/2026/04/vinted-clone.webp` | What-is/live-video panel | Exact |
| `/2026/04/website-aboutus-1.webp` | Why Choose image | Exact |
| `/2026/04/why-invest-in-vinted-clone.png` | Investment section | Exact |
| `/2026/01/ai-content-generator.webp`, `ai-chatbox.webp` | AI capability cards | Exact |
| `/2026/04/vinted-document.webp` | Capability PDF CTA | Exact |
| User/Seller/Admin screenshot WebPs | Role feature tabs | Exact |
| Express/MongoDB/Next WebPs | Technology row | Exact |
| `/2026/04/website-thumb-1.webp` | Live-demo CTA | Exact |
| `/2026/04/revenue_benefits.webp` | Revenue section | Exact |
| Three journal images | Blog cards | Exact |

No new or generated image was substituted for a resource that already existed.

## Loading and reveal comparison

| Phase | Original HTML behavior | Final React behavior |
|---|---|---|
| T0 | Static HTML exists immediately; WordPress runtime starts loading | Route fallback/shell spinner appears; page wrapper is protected from unstyled paint |
| T+100 ms warm run | Header/hero styling is available | Header/hero are styled; the former raw controls/black shapes are absent |
| T+300–500 ms | WordPress animations/plugins begin; file protocol breaks some plugin requests | Styles/font gate is removed when actually ready; Flash Sale targets 500 ms and slides for 350 ms |
| T+1–3 s | Plugin animation/lazy-image activity continues | Above-fold groups visible; below-fold images remain native-lazy; sections reveal by proximity |
| Vertical scroll | Reference page plugins animate nested blocks | React reveals 17 meaningful visual groups once with a consistent 800 ms easing |
| Fast scroll/layout shift | Reference scripts can fail under `file://` | Observer plus reached-section safety check prevents permanent transparent/hanging groups |
| Reduced motion | Depends on original plugin | React removes reveal/popup motion while keeping content visible |

The final headless cold-development commit-to-ready measurement ranged from about 2.1 to 5.3 seconds across eight independent contexts because Vite, page CSS, fonts, and Chrome contexts were deliberately cold. It is diagnostic, not a production performance benchmark. The key acceptance result is that React shows a controlled fallback instead of partially styled final markup.

The original `file://` run produced expected WordPress/plugin failures (four console errors and seven failed requests in the baseline). Final React runs produced zero console errors and zero failed requests.

## Responsive Vinted test matrix

| Viewport | Final document height | Top-level groups | Reveal after scan | Horizontal overflow | Broken images | Popup |
|---|---:|---:|---:|---:|---:|---|
| 1440 × 900 | 18,708 px | 17 | 17 / 17 | 0 px | 0 | 250 × 390, left/bottom 10 px |
| 1366 × 768 | 18,734 px | 17 | 17 / 17 | 0 px | 0 | 250 × 390 |
| 1280 × 800 | 18,787 px | 17 | 17 / 17 | 0 px | 0 | 250 × 390 |
| 1024 × 768 | 19,109 px | 17 | 17 / 17 | 0 px | 0 | 250 × 390 |
| 768 × 1024 | 21,611 px | 17 | 17 / 17 | 0 px | 0 | 250 × 390 |
| 430 × 932 | 27,275 px | 17 | 17 / 17 | 0 px | 0 | 112 × 176 |
| 390 × 844 | 27,684 px settled | 17 | 17 / 17 | 0 px | 0 | 112 × 176, left/bottom 10 px |
| 375 × 812 | 27,738 px | 17 | 17 / 17 | 0 px | 0 | 112 × 176 |

Some mobile below-fold native-lazy images were still decoding at the first immediate end-of-scan sample, but none were broken and no request failed. The focused 390 px settling test finished with zero incomplete images, zero broken images, zero failures, and all 17 groups visible.

## Homepage focused comparison

### Team/Tools showcase

| Property | HTML reference | Final React | Result |
|---|---:|---:|---|
| Outer gradient group height | 988 px | 988 px | Exact |
| Outer padding | 100 px top/bottom | 100 px top/bottom | Exact |
| White card | 1,140 × 788 px | 1,140 × 788 px | Exact |
| Card radius/background | 30 px / white | 30 px / white | Exact |
| Heading | 845 × 108 px, 120 px from card top | Same | Exact |
| Enquiry button | 155 × 51 px, centered at x=642 | Same | Exact |
| Gradient resource | `Group-48.png?id=78490` | Same | Exact |

### Icon size/color/effect audit

| Icon family | HTML reference | Final React | Result |
|---|---|---|---|
| Connect email | 60 × 60; glyph 40; `rgb(255,60,60)`; white | Same | Exact |
| Connect WhatsApp | 60 × 60; glyph 40; `rgb(29,164,0)`; white | Same | Exact |
| Connect transition | `border 0.3s, box-shadow 0.3s` | Same | Exact |
| Service checks | 36 × 40; `rgb(0,111,255)` | Same | Exact |
| Six process circles | 60 × 60; white background; `rgb(51,51,51)` | Same | Exact |
| Product/solution icons | 50 × 50; transparent; `rgb(14,14,14)` | Same corresponding set | Exact |
| Footer contact icons | Hidden/decorative zero-size containers in source layout | Same | Exact |

The raw icon totals are intentionally different (46 reference vs 42 React). The reference total includes nine legacy-person testimonial icons, while React includes verified Fenizo statistics/services and does not restore prohibited legacy people. Corresponding visual icon families match.

### Footer title/color audit

All 14 shared sitemap category labels match the HTML reference in:

- foreground color (black or `rgb(16,27,72)` according to category),
- translucent category background,
- 16 px size and 600 weight,
- padding and 4 px radius.

The sitemap group is 891 px in React versus 888 px in the reference. The company/payment/final-footer groups total about 1,003 px in React versus 997 px in the reference. The larger reference-only pre-sitemap area contains legacy people and testimonial-video groups; React keeps its verified Fenizo meeting/testimonial composition instead.

## Interaction and runtime results

| Test | Result |
|---|---|
| Flash Sale appears | Pass |
| Flash Sale close removes dialog | Pass |
| Popup modal layering | Pass; PDF modal `z-index: 2000000000` is above popup `1999999999` |
| User feature tab changes image | Pass: Smart Search → Wishlist Manager |
| Live Demo tab changes credentials | Pass: `buyer@email.com` → `admin@gmail.com` |
| FAQ opens | Pass |
| Section scan | Pass: 17 visible, 0 pending after scan |
| React console errors | Pass: 0 |
| React request failures | Pass: 0 |
| Horizontal overflow | Pass: 0 at all eight tested widths |
| Broken images | Pass: 0 |
| Homepage visual audit | Pass: 0 broken images, 0 overflow, 0 console/network failures |

## Files and resources changed

Primary implementation files:

- `react-app-v2/index.html`
- `react-app-v2/src/components/FlashSalePopup.jsx`
- `react-app-v2/src/components/LeadPopup.css`
- `react-app-v2/src/components/Layout.jsx`
- `react-app-v2/src/components/MinimalLayout.jsx`
- `react-app-v2/src/hooks/usePageStylesheets.js`
- `react-app-v2/src/hooks/useSectionMotion.js`
- `react-app-v2/src/pages/ClonePages/VintedClonePage.jsx`
- `react-app-v2/src/pages/ClonePages/VintedClonePage.css`
- `react-app-v2/src/components/vinted/VintedReviewLogos.jsx`
- `react-app-v2/src/components/shared/BlockquoteTestimonials.jsx`
- `react-app-v2/src/components/shared/LiveDemoTabs.jsx`
- `react-app-v2/src/components/shared/PdfDownloadCta.jsx`
- `react-app-v2/src/components/shared/RevenueBenefits.jsx`
- `react-app-v2/src/pages/HomePage.jsx`
- `react-app-v2/src/pages/HomePage.css`

Added React-public copies of exact existing source resources:

- six review-platform WebPs under `public/wp-content/uploads/2025/01/`
- `public/wp-content/uploads/2026/04/website-aboutus-1.webp`

## Reusable Codex implementation instruction

```text
Use the original local HTML as a read-only design and behavior benchmark.
Change React only and preserve Fenizo branding/content.

1. Map existing HTML assets before styling; reuse exact relevant image files.
2. Group React components according to the HTML's visual sections.
3. Prevent FOUC: do not expose final markup until page CSS/fonts are ready.
4. Keep a small route fallback; never leave a gray page overlay or raw controls.
5. Reveal meaningful top-level groups with one IntersectionObserver.
6. Add a reached-section scroll safety check so layout shifts cannot strand opacity:0 content.
7. Do not use content-visibility/intrinsic-height guesses on this long image-heavy page.
8. Use native lazy images below the fold with explicit width/height; preload shared critical assets.
9. Flash Sale: exact PNG, fixed left/bottom 10 px, desktop 250 px, mobile 112 px,
   500 ms target, 350 ms left-slide, accessible close, below intentional modal z-index.
10. Fix overflow at the component/row source; never mask it globally.
11. Match icon families by computed size, foreground, background, transition, and hover/focus behavior.
12. Keep legacy company identity, people, claims, and unverified testimonials out of Fenizo.
13. Verify desktop/tablet/mobile by slow scan, fast scan, refresh, resize, and interactions.
14. Acceptance: zero broken images, zero React console/request failures, zero overflow,
    every section visible after scan, popup fixed/closable, tabs and FAQ working, lint/build passing.
```

## Tooling note

The required in-app browser capability was attempted first but returned `Browser is not available: iab`. The fallback used installed Chrome through Playwright against the exact local HTML files and localhost React routes. This is why expected WordPress `file://` plugin failures are separated from React defects.
