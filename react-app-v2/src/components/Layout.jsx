import { Suspense, useInsertionEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './footer/Footer.jsx'
import FloatingWhatsAppButton from './FloatingWhatsAppButton.jsx'
import FlashSalePopup from './FlashSalePopup.jsx'
import RouteFallback from './RouteFallback.jsx'
import { useGlobalSectionMotion } from '../hooks/useGlobalSectionMotion.js'
import { expectPageStyles } from '../hooks/usePageStylesheets.js'

export default function Layout() {
  const { pathname } = useLocation()
  const routeClass = pathname === '/'
    ? 'home'
    : pathname.slice(1).replace(/[^a-z0-9]+/gi, '-')

  useInsertionEffect(() => {
    expectPageStyles()
  }, [pathname])

  useGlobalSectionMotion(pathname)

  return (
    <div id="wrap" className={`fenizo-site fenizo-route-${routeClass}`}>
      <Header />
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
      <Footer />
      <FloatingWhatsAppButton />
      <FlashSalePopup />
    </div>
  )
}
