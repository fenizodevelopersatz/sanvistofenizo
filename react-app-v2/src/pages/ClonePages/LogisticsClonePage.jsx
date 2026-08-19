import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import {
  coreModules, standardFeatures, addOnFeatures, techStack, launchSteps,
  pricingPlans, comparisonOurs, comparisonOthers, faqs,
} from '../../data/logistics/logisticsData.js'

import LogisticsHero from '../../components/logistics/LogisticsHero.jsx'
import WhatIsLogistics from '../../components/logistics/WhatIsLogistics.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

const revenueBenefits = [
  { icon: 'fa fa-solid fa-truck-fast', title: 'Delivery Fees', desc: 'Earn per-delivery fees from every completed order.' },
  { icon: 'fa fa-solid fa-percent', title: 'Commission Model', desc: 'Charge partner businesses a commission on fulfilled orders.' },
  { icon: 'fa fa-solid fa-crown', title: 'Subscription Plans', desc: 'Offer priority dispatch or reduced fees through paid plans.' },
  { icon: 'fa fa-solid fa-bolt', title: 'Surge Pricing', desc: 'Adjust pricing automatically during peak demand windows.' },
]

export default function LogisticsClonePage() {
  usePageStylesheets(pageStylesheets.logisticsClone)

  useSeo('Logistics Service App | Delivery & Courier Script | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <LogisticsHero />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TrustedByBadges heading="by Logistics & Courier Founders" />
          <BlockquoteTestimonials count={3} offset={0} visibleCount={2} />
        </section>

        <section className="vc_section">
          <WhatIsLogistics />
        </section>

        <WhyChooseChecklist
          heading="Why"
          accentWord="Choose Us?"
          desc="CloneScript provides a robust, real-time delivery platform built for couriers, fleet operators, and last-mile logistics startups."
          points={[
            ['Launch a Logistics App with ', '100% Customization.', ''],
            ['Get Complete ', 'Free Installation Support.', ''],
            ['Built on a Proven ', 'Business Model to Start Earning Faster.', ''],
            ['Seamless Operations with ', 'Reliable Customer Support.', ''],
          ]}
          image="/wp-content/uploads/2026/08/logistics-why-choose-us.webp"
          imageAlt="Courier handing a wrapped delivery package to a customer at their doorstep"
        />

        <StandOutFeaturesGrid
          heading="Core Modules of the Logistics Service App"
          subheading="Everything a delivery or courier business needs to run day-to-day operations, in one connected platform."
          items={coreModules}
        />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Logistics App" />

        <PdfDownloadCta
          heading="Grab Our Best Logistics Service App Features Document Now!"
          desc="One Click to Get Our Logistics Service App Product's Complete Knowledge."
        />

        <SimpleIconGrid items={standardFeatures} title="Standard Features of the Logistics Service App" columns={3} iconColor="#002692" />
        <SimpleIconGrid items={addOnFeatures} title="Add-On Features" columns={5} iconColor="#002692" />

        <TechStackRow items={techStack} />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Hassle-Free Launch Support</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Unlock revenue potential with our Logistics Service App's flexible earning models!"
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
        />

        <LaunchCta
          heading="Launch Your Logistics &amp; Delivery Business Faster with Expert Support and Guidance."
          image="/wp-content/uploads/2026/08/logistics-launch-boxes.webp"
          imageAlt="Packed and labeled shipment boxes staged with a hand truck, ready to ship"
        />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our Logistics Service App with our extensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
