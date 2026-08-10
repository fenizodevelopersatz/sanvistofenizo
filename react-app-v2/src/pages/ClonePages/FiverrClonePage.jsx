import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { standardFeatures, revenueBenefits, pricingPlans } from '../../data/fiverr/fiverrData.js'

import FiverrHero from '../../components/fiverr/FiverrHero.jsx'
import TrustedByBuyers from '../../components/fiverr/TrustedByBuyers.jsx'
import WhatIsFiverr from '../../components/fiverr/WhatIsFiverr.jsx'
import HowItWorks from '../../components/fiverr/HowItWorks.jsx'
import WhyChooseUs from '../../components/fiverr/WhyChooseUs.jsx'
import FounderCta from '../../components/fiverr/FounderCta.jsx'
import MainFeaturesRoles from '../../components/fiverr/MainFeaturesRoles.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AddOnFeaturesFlip from '../../components/fiverr/AddOnFeaturesFlip.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import TechWeUsed from '../../components/fiverr/TechWeUsed.jsx'
import ScheduleServiceCta from '../../components/fiverr/ScheduleServiceCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MobileScreens from '../../components/fiverr/MobileScreens.jsx'
import FaqServerTabs from '../../components/fiverr/FaqServerTabs.jsx'

export default function FiverrClonePage() {
  usePageStylesheets(pageStylesheets.fiverrClone)

  useSeo('Fiverr Clone Script | Freelance Marketplace App | Fenizo')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill">
          <FiverrHero />
        </section>

        <section className="vc_section">
          <TrustedByBuyers />
        </section>

        <section className="vc_section">
          <WhatIsFiverr />
        </section>

        <section className="vc_section">
          <HowItWorks />
        </section>

        <section className="vc_section">
          <WhyChooseUs />
        </section>

        <section className="vc_section">
          <FounderCta />
        </section>

        <section className="vc_section">
          <MainFeaturesRoles />
        </section>

        <section className="vc_section vc_section-has-fill">
          <PdfDownloadCta heading="Explore the Complete Features of Our Fiverr Clone App" />
        </section>

        <section className="vc_section vc_section-has-fill">
          <StandOutFeaturesGrid
            heading="Standard Features of Fiverr Clone Script"
            subheading="Essential Features of a Fiverr Clone App Solution for Seamless Process"
            items={standardFeatures}
            color="#aa67ee"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <AddOnFeaturesFlip />
        </section>

        <section className="vc_section vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Benefits"
            subheading="Unlock Revenue Potential With Our Fiverr Clone Script, Enriched With Smart Earning Models!"
            items={revenueBenefits}
            image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
            color="#aa67ee"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TechWeUsed />
        </section>

        <section className="vc_section">
          <ScheduleServiceCta />
        </section>

        <section className="vc_section">
          <PricingPlans plans={pricingPlans} heading="Pick a Plan" />
        </section>

        <section className="vc_section z-index-plus vc_section-has-fill">
          <MobileScreens />
        </section>

        <section className="vc_section">
          <FaqServerTabs />
        </section>
      </div>
    </main>
  )
}
