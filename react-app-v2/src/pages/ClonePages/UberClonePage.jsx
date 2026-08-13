import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standOutFeatures, addOnFeatures, revenueBenefits, pricingPlans, faqs, screenshots,
} from '../../data/uber/uberData.js'

import UberHero from '../../components/uber/UberHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsUber from '../../components/uber/WhatIsUber.jsx'
import HowItWorks from '../../components/uber/HowItWorks.jsx'
import WhyChooseUber from '../../components/uber/WhyChooseUber.jsx'
import LaunchWhatsappCta from '../../components/uber/LaunchWhatsappCta.jsx'
import UberRoleFeatures from '../../components/uber/UberRoleFeatures.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import BookByBid from '../../components/uber/BookByBid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'

export default function UberClonePage() {
  usePageStylesheets(pageStylesheets.uberClone)

  useSeo('Uber Clone Script | #1 Taxi Booking App | Fenizo')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_custom_1738736124508 vc_section-has-fill">
          <UberHero />
          <TrustedByBadges heading="by Mobility Entrepreneurs" />
        </section>

        <section className="vc_section">
          <WhatIsUber />
        </section>

        <section className="vc_section">
          <HowItWorks />
        </section>

        <section className="vc_section">
          <WhyChooseUber />
          <LaunchWhatsappCta />
        </section>

        <section className="vc_section">
          <UberRoleFeatures />
        </section>

        <section className="vc_section vc_custom_1740035291295 vc_section-has-fill">
          <PdfDownloadCta
            heading="Explore the Complete Features of Our Uber Clone"
            desc=""
          />
        </section>

        <section className="vc_section">
          <StandOutFeaturesGrid
            heading="Standard Features on the Uber Clone App"
            subheading="Our Uber Clone Script With Robust Features For A Seamless Experience,"
            items={standOutFeatures}
          />
        </section>

        <section className="vc_section">
          <BookByBid />
          <SimpleIconGrid
            items={addOnFeatures}
            title="Add on Features of the Uber Clone App"
            desc="Our App Like Uber Has Multiple Add-on Features, Which Are Different From Competitors."
            columns={3}
            iconColor="#d79800"
          />
        </section>

        <section className="vc_section vc_custom_1738821922373 vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Benefits"
            subheading="Explore Our Uber Clone&rsquo;s Revenue Benefits To Start Your Taxi Services"
            items={revenueBenefits}
            image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
            color="rgb(215, 152, 0)"
          />
        </section>

        <section className="vc_section">
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
                              <img src="/wp-content/uploads/2025/02/Group-48097145-scaled.webp" className="vc_single_image-img attachment-full" alt="technologies-used" title="technologies-used" loading="lazy" style={{ maxWidth: '100%' }} />
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
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2025/08/taxi-booking-app-solution.webp" width="938" height="903" className="vc_single_image-img attachment-full" alt="taxi-booking-app-solution" title="taxi-booking-app-solution" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h3>Feel Free To Discuss Your Dream Taxi Service Business With Us!</h3>
                        </header>
                        <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                          <span>
                            <span className="btn-txt">Schedule now</span>
                            <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section section10">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2023/03/Group-726-1024x92.png" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" loading="lazy" />
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

          <PricingPlans plans={pricingPlans} heading="Pick a Plan" />
          <MoneyBackGuarantee />
        </section>

        <section className="vc_section z-index-plus vc_custom_1738232840684 vc_section-has-fill">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Uber Clone App Mobile Screens</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container-fluid">
              <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
                {screenshots.map((src, i) => (
                  <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src={src} width="458" height="953" className="vc_single_image-img attachment-full" alt={`Uber Clone App screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
                      </div>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <FaqAccordion
            heading="Have Doubts? Get Answers Right Here"
            subheading="Get answers for all your queries about our exclusive Uber Clone Script with our comprehensive FAQ section."
            faqs={faqs}
          />
        </section>
      </div>
    </main>
  )
}
