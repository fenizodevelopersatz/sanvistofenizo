import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './footer/Footer.jsx'
import FloatingWhatsAppButton from './FloatingWhatsAppButton.jsx'
import LeadPopup from './LeadPopup.jsx'

export default function Layout() {
  return (
    <div id="wrap">
      <Header />
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
      <LeadPopup />
    </div>
  )
}
