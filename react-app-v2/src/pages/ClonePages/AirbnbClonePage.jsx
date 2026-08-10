import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  whyChooseUsPoints, aiFeatures, comparisonLabels, comparisonOurs, comparisonOthers,
  exclusiveBenefits, revenueBenefits, pricingPlans, faqs, screenshots,
} from '../../data/airbnb/airbnbData.js'

import AirbnbHero from '../../components/airbnb/AirbnbHero.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import AppDownloadBanner from '../../components/airbnb/AppDownloadBanner.jsx'
import BookDemoCta from '../../components/airbnb/BookDemoCta.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import AirbnbLiveDemo from '../../components/airbnb/AirbnbLiveDemo.jsx'
import AirbnbTestimonials from '../../components/airbnb/AirbnbTestimonials.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function AirbnbClonePage() {
  usePageStylesheets(pageStylesheets.airbnbClone)

  useSeo('Airbnb Clone - Launch a Vacation Rental Marketplace Like Airbnb | Fenizo')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <AirbnbHero />
        </section>

        <section className="vc_section">
          <WhyChooseChecklist
            heading="Why"
            accentWord="Choose Us?"
            desc=""
            points={whyChooseUsPoints}
            image="/wp-content/uploads/2026/03/web-developer.webp"
            imageAlt="web-developer"
            color="#fe5337"
          />

          <AiFeaturesGrid items={aiFeatures} heading="Advanced AI Features in Airbnb Clone" columns={4} />

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-7 vc_col-xs-offset-1 vc_col-xs-10 text-left">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <h2>
                          <strong><span style={{ color: '#fe5337' }}>The Smarter Choice</span> for Airbnb Clone App</strong>
                        </h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left' }}>The Airbnb clone is built with advanced AI features and functionalities to help startups maximize revenue and grow faster.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Airbnb Clone" />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-7 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <h2>
                          <span style={{ color: '#fe5337' }}>Multiple Secure Payment Options</span>
                          <br />
                          <strong>for Your Airbnb Clone</strong>
                        </h2>
                        <p><span style={{ fontWeight: 400 }}>Enable credit cards, wallets, and regional payments to deliver a seamless booking experience for guests worldwide.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/payment.webp" width="300" height="263" className="vc_single_image-img attachment-medium" alt="payment" title="payment" loading="lazy" />
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
          <AppDownloadBanner />
          <BookDemoCta />
        </section>

        <section className="vc_section">
          <AiFeaturesGrid items={exclusiveBenefits} heading="Our Airbnb Clones Exclusive Benefits" columns={3} />

          <RevenueBenefits
            heading="Revenue Benefits of an App Like Airbnb"
            subheading="Enhance Your Vacation Rental Business and Earnings with Our Airbnb Clone App&rsquo;s Next-Gen Revenue Strategies!"
            items={revenueBenefits}
            image="/wp-content/uploads/2026/01/revenue.webp"
            color="rgb(250, 16, 35)"
          />
        </section>

        <section className="vc_section">
          <AirbnbLiveDemo />
        </section>

        <section className="vc_section">
          <AirbnbTestimonials />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2023/03/Group-726.png" className="vc_single_image-img attachment-large" alt="google review" title="google review" loading="lazy" />
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

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Airbnb Clone App Screens</span>
                          </h2>
                        </div>
                        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
                          {screenshots.map((src, i) => (
                            <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img src={src} alt={`Airbnb Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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
        </section>

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our Airbnb Clone Script with our extensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
