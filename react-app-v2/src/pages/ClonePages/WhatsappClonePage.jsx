import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { features, pricingPlans } from '../../data/whatsapp/whatsappData.js'

import WhatsappHero from '../../components/whatsapp/WhatsappHero.jsx'
import WhatIsWhatsapp from '../../components/whatsapp/WhatIsWhatsapp.jsx'
import WhatWeOffer from '../../components/whatsapp/WhatWeOffer.jsx'
import WhatsappFeatures from '../../components/whatsapp/WhatsappFeatures.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'

export default function WhatsappClonePage() {
  usePageStylesheets(pageStylesheets.whatsappClone)

  useEffect(() => {
    document.title = 'WhatsApp Clone - Best Messaging App Like WhatsApp | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section section1 vc_custom_1710218341756 vc_section-has-fill">
          <WhatsappHero />
        </section>

        <WhatIsWhatsapp />

        <WhatWeOffer />

        <WhatsappFeatures items={features} />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h3 className="ld-gradient-heading lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Prices</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PricingPlans plans={pricingPlans} heading="Choose Your Price Plans" />
        </section>
      </div>
    </main>
  )
}
