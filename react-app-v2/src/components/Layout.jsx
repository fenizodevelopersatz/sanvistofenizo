import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './footer/Footer.jsx'
import FloatingWhatsAppButton from './FloatingWhatsAppButton.jsx'
import FlashSalePopup from './FlashSalePopup.jsx'
import RouteFallback from './RouteFallback.jsx'

export default function Layout() {
  return (
    <div id="wrap">
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
