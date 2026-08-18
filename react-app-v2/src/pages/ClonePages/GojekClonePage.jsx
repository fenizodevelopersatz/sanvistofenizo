import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standardFeatures, addOnFeatures, revenueBenefits, pricingPlans, appScreens,
} from '../../data/gojek/gojekData.js'

import GojekHero from '../../components/gojek/GojekHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsGojek from '../../components/gojek/WhatIsGojek.jsx'
import ServiceOfferTabs from '../../components/gojek/ServiceOfferTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AllInOneSuperApp from '../../components/gojek/AllInOneSuperApp.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import BusinessOpportunities from '../../components/gojek/BusinessOpportunities.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/gojek/FaqServerTabs.jsx'

export default function GojekClonePage() {
  usePageStylesheets(pageStylesheets.gojekClone)

  useSeo('Gojek Clone - #1 On-Demand Multi Service App Solution | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <GojekHero />
        </section>

        <TrustedByBadges heading="by Super App Entrepreneurs" />

        <section className="vc_section">
          <WhatIsGojek />
        </section>

        <ServiceOfferTabs />

        <PdfDownloadCta heading="Explore the Extended Features of Our Gojek Clone App" />

        <StandOutFeaturesGrid
          heading="Standard Features of Gojek Clone App"
          subheading="Our Gojek App Clone comes with all the essential features of a multi-service super app"
          items={standardFeatures}
        />

        <section className="vc_section">
          <AllInOneSuperApp />
        </section>

        <StandOutFeaturesGrid
          heading="Add on Features of Gojek Clone Script"
          subheading="Enhance your App like Gojek with our robust add-on features, designed to give you a competitive edge and provide a better, more personalized user experience."
          items={addOnFeatures}
        />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Monetize Smarter with the Built-in Earning Strategies of Our Robust Gojek Clone"
          items={revenueBenefits}
          image="/wp-content/uploads/2025/04/Group-48098091.png"
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology We Used</h2>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/04/gojek-clone-technology.png" width="1292" height="600" className="vc_single_image-img attachment-full" alt="gojek-clone-technology" title="gojek-clone-technology" loading="lazy" />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_section">
          <BusinessOpportunities />
          <LaunchCta
            heading="Stop Waiting. Start Building App like Gojek Today!"
            image="/wp-content/uploads/2025/08/gojek-today.webp"
            imageAlt="Gojek clone app preview"
          />
        </section>

        <PricingPlans plans={pricingPlans} heading="Pick a Plan" />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Gojek Clone App Screens</h2>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                        {appScreens.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`Gojek Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
                              </div>
                            </figure>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqServerTabs />
      </div>
    </main>
  )
}
