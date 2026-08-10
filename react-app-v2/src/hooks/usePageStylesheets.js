import { useEffect } from 'react'

// Each original page has its own compiled WPBakery CSS bundle (the "-8-", "-11-", "-12-"
// suffixed files) containing that page's vc_custom_* rules. Loading only the shared
// bundles is not enough — those page-specific files must be injected per route and
// removed on navigation away, so per-page classes actually have matching CSS.
export function usePageStylesheets(hrefs) {
  useEffect(() => {
    const links = hrefs.map((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.dataset.pageStylesheet = 'true'
      document.head.appendChild(link)
      return link
    })
    return () => {
      links.forEach((link) => document.head.removeChild(link))
    }
  }, [hrefs])
}
