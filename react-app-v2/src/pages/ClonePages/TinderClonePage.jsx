import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  featureGroups, standardFeatures, addOnFeatures, revenueBenefits, pricingPlans, screenshots, customerReviews,
} from '../../data/tinder/tinderData.js'

import TinderHero from '../../components/tinder/TinderHero.jsx'
import WhatIsTinder from '../../components/tinder/WhatIsTinder.jsx'
import WhyChooseUsTinder from '../../components/tinder/WhyChooseUsTinder.jsx'
import ExpertCtaBanner from '../../components/tinder/ExpertCtaBanner.jsx'
import TinderFeatureTabs from '../../components/tinder/TinderFeatureTabs.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import FaqServerTabs from '../../components/tinder/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

export default function TinderClonePage() {
  usePageStylesheets(pageStylesheets.tinderClone)

  useSeo('Tinder Clone Script | Online Dating App Solution | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <TinderHero />

        <section className="vc_section">
          <WhatIsTinder />
        </section>

        <section className="vc_section">
          <WhyChooseUsTinder />
        </section>

        <section className="vc_section">
          <ExpertCtaBanner />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading ld-fh-has-fill text-center">
                          <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Main Features</span>
                          </p>
                        </div>
                        <header className="fancy-title text-center">
                          <p>Discover the robust features of the Online Dating Platform</p>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TinderFeatureTabs groups={featureGroups} />
        </section>

        <PdfDownloadCta heading="Explore the Complete Features of Our Online Dating App Like Tinder!" />

        <StandOutFeaturesGrid
          heading="Standard Features of Tinder Clone Script"
          subheading="Essential Features of a Tinder Clone App Solution for Seamless Process"
          items={standardFeatures}
          color="#ff9b99"
        />

        <StandOutFeaturesGrid
          heading="Add on Features"
          subheading="Some Free Add-On Features That Can Further Enhance Your Online Tinder Clone Software Solution"
          items={addOnFeatures}
          color="#ff9b99"
        />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Boost Your Revenue with Our Successful Online Dating App Like Tinder!"
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#ff9b99"
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
                            <img src="/wp-content/uploads/2025/08/technologies.webp" width="1120" height="677" alt="technologies" title="technologies" loading="lazy" />
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

        <LaunchCta
          heading="Take the First Step Toward Success – Let&rsquo;s Begin!"
          image="/wp-content/uploads/2025/09/best-dating-script.webp"
          imageAlt="Dating clone app preview showing post creation and profile screens"
        />

        <PricingPlans plans={pricingPlans} heading="Pick a Plan" />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container-fluid">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                          <span className="ld-fh-txt"> Tinder Clone App Mobile App Screens</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
              {screenshots.map((s, i) => (
                <div className="wpb_single_image wpb_content_element vc_align_left" key={i}>
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img src={s.image} alt={s.alt} title={s.alt} loading="lazy" style={{ maxWidth: '100%' }} />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
