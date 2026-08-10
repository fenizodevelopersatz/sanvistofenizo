import { useEffect, useState } from 'react'

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setIsOpen(true), 500)
    return () => clearTimeout(id)
  }, [])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      className="pum pum-overlay pum-theme-content-only popmake-overlay"
      style={{ position: 'fixed', left: 10, bottom: 10, zIndex: 1999999999 }}
    >
      <div className="pum-container popmake size-custom pum-position-fixed">
        <div className="pum-content popmake-content" tabIndex={0}>
          <figure className="wp-block-image size-full is-style-default">
            <img src="/wp-content/uploads/2022/12/Flash-sale.png" width="1024" height="1536" alt="" className="wp-image-84780" />
          </figure>
        </div>
        <button type="button" className="pum-close popmake-close" aria-label="Close" onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
    </div>
  )
}
