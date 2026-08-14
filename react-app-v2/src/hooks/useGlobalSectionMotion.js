import { useEffect } from 'react'

const SECTION_SELECTOR = '.content > .wpb-content-wrapper > section'

export function useGlobalSectionMotion(routeKey) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let observer
    let mutationObserver
    const observed = new WeakSet()
    const frame = window.requestAnimationFrame(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('fenizo-section-visible')
          observer.unobserve(entry.target)
        })
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.04,
      })

      const scan = () => {
        document.querySelectorAll(SECTION_SELECTOR).forEach((section) => {
          if (observed.has(section)) return
          observed.add(section)
          section.classList.add('fenizo-section-observed')
          if (section.getBoundingClientRect().top < window.innerHeight * 0.92) {
            section.classList.add('fenizo-section-visible')
            return
          }
          observer.observe(section)
        })
      }

      scan()
      mutationObserver = new MutationObserver(scan)
      mutationObserver.observe(document.getElementById('wrap'), { childList: true, subtree: true })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer?.disconnect()
      mutationObserver?.disconnect()
    }
  }, [routeKey])
}
