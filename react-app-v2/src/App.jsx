import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MinimalLayout from './components/MinimalLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import ScheduleFreeDemoPage from './pages/ScheduleFreeDemoPage.jsx'
import ErpSoftwarePage from './pages/ErpSoftwarePage.jsx'
import SchoolCrmPage from './pages/SchoolCrmPage.jsx'
import AlibabaClonePage from './pages/ClonePages/AlibabaClonePage.jsx'
import VintedClonePage from './pages/ClonePages/VintedClonePage.jsx'
import ZillowClonePage from './pages/ClonePages/ZillowClonePage.jsx'
import AmazonClonePage from './pages/ClonePages/AmazonClonePage.jsx'
import YoutubeClonePage from './pages/ClonePages/YoutubeClonePage.jsx'
import TuroClonePage from './pages/ClonePages/TuroClonePage.jsx'
import AirbnbClonePage from './pages/ClonePages/AirbnbClonePage.jsx'
import RentalBookingClonePage from './pages/ClonePages/RentalBookingClonePage.jsx'
import UberClonePage from './pages/ClonePages/UberClonePage.jsx'
import GojekClonePage from './pages/ClonePages/GojekClonePage.jsx'
import SwiggyClonePage from './pages/ClonePages/SwiggyClonePage.jsx'
import FiverrClonePage from './pages/ClonePages/FiverrClonePage.jsx'
import UdemyClonePage from './pages/ClonePages/UdemyClonePage.jsx'
import TinderClonePage from './pages/ClonePages/TinderClonePage.jsx'
import WhatsappClonePage from './pages/ClonePages/WhatsappClonePage.jsx'
import TiktokClonePage from './pages/ClonePages/TiktokClonePage.jsx'
import OlxClonePage from './pages/ClonePages/OlxClonePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/erp-software" element={<ErpSoftwarePage />} />
          <Route path="/school-crm" element={<SchoolCrmPage />} />
          <Route path="/alibaba-clone" element={<AlibabaClonePage />} />
          <Route path="/vinted-clone" element={<VintedClonePage />} />
          <Route path="/zillow-clone" element={<ZillowClonePage />} />
          <Route path="/amazon-clone" element={<AmazonClonePage />} />
          <Route path="/youtube-clone" element={<YoutubeClonePage />} />
          <Route path="/turo-clone" element={<TuroClonePage />} />
          <Route path="/airbnb-clone" element={<AirbnbClonePage />} />
          <Route path="/rental-booking-script" element={<RentalBookingClonePage />} />
          <Route path="/uber-clone" element={<UberClonePage />} />
          <Route path="/gojek-clone" element={<GojekClonePage />} />
          <Route path="/swiggy-clone" element={<SwiggyClonePage />} />
          <Route path="/fiverr-clone" element={<FiverrClonePage />} />
          <Route path="/udemy-clone" element={<UdemyClonePage />} />
          <Route path="/tinder-clone" element={<TinderClonePage />} />
          <Route path="/whatsapp-clone" element={<WhatsappClonePage />} />
          <Route path="/tiktok-clone" element={<TiktokClonePage />} />
          <Route path="/olx-clone" element={<OlxClonePage />} />
        </Route>
        <Route element={<MinimalLayout />}>
          <Route path="/schedule-free-demo" element={<ScheduleFreeDemoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
