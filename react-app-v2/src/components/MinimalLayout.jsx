import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import FlashSalePopup from './FlashSalePopup.jsx'
import RouteFallback from './RouteFallback.jsx'

// For pages that ship with no header/footer in source (e.g. schedule-free-demo.html) —
// confirmed by absence of <header id="header"> / <footer> tags in that page's raw HTML.
export default function MinimalLayout() {
  return (
    <div id="wrap">
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
      <FlashSalePopup />
    </div>
  )
}
