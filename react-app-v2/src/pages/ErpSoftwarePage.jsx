import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { useSectionMotion } from '../hooks/useSectionMotion.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { advancedFeatures, powerfulFeatures } from '../data/erp/coreModules.js'
import ErpHero from '../components/erp/ErpHero.jsx'
import ErpCtaAndImage from '../components/erp/ErpCtaAndImage.jsx'
import TrustedByClients from '../components/erp/TrustedByClients.jsx'
import BlockquoteTestimonials from '../components/erp/BlockquoteTestimonials.jsx'
import CoreModules from '../components/erp/CoreModules.jsx'
import SimpleIconGrid from '../components/erp/SimpleIconGrid.jsx'
import WhyChooseErp from '../components/erp/WhyChooseErp.jsx'
import PdfDownloadCta from '../components/erp/PdfDownloadCta.jsx'
import DetailedFeatures from '../components/erp/DetailedFeatures.jsx'
import IndustriesCarousel from '../components/erp/IndustriesCarousel.jsx'
import StandOutFeatures from '../components/erp/StandOutFeatures.jsx'
import TechStackSection from '../components/erp/TechStackSection.jsx'
import LiveDemoTabs from '../components/erp/LiveDemoTabs.jsx'
import { LaunchCta, MoneyBackGuarantee } from '../components/erp/MoneyBackAndLaunchCta.jsx'
import DashboardScreenshots from '../components/erp/DashboardScreenshots.jsx'
import PricingPlans from '../components/erp/PricingPlans.jsx'
import FaqSection from '../components/erp/FaqSection.jsx'
import ErpBlogTeaser from '../components/erp/ErpBlogTeaser.jsx'
import './ErpSoftwarePage.css'

export default function ErpSoftwarePage() {
  const stylesReady = usePageStylesheets(pageStylesheets.erpSoftware)
  const motionRef = useSectionMotion(stylesReady)

  useSeo('ERP Software | CloneScript')

  return (
    <main className="content" id="content">
      <div ref={motionRef} className="wpb-content-wrapper erp-software-page erp-motion-page">
        <section className="vc_section erp-hero-section">
          <ErpHero />
          <ErpCtaAndImage />
        </section>

        <TrustedByClients />
        <BlockquoteTestimonials />

        <CoreModules />

        <section className="vc_section erp-capabilities-section">
          <SimpleIconGrid items={advancedFeatures} title="Advanced ERP SaaS Features for Business Growth" columns={3} variant="advanced" />
          <SimpleIconGrid items={powerfulFeatures} title="Powerful ERP Features for Modern Businesses" columns={5} variant="powerful" />
        </section>

        <WhyChooseErp />
        <PdfDownloadCta />
        <DetailedFeatures />

        <IndustriesCarousel />
        <StandOutFeatures />
        <TechStackSection />

        <LiveDemoTabs />
        <LaunchCta />
        <DashboardScreenshots />

        <PricingPlans />
        <MoneyBackGuarantee />
        <FaqSection />
        <ErpBlogTeaser />
      </div>
    </main>
  )
}
