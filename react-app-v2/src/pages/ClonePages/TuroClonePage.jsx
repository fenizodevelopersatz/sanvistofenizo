import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import {
  upcomingAiFeature, roleShowcase, standOutFeatures, addOnFeatures, revenueBenefits,
  techStack, pricingPlans, screenshots, customerReviews,
} from '../../data/turo/turoData.js'

import TuroHero from '../../components/turo/TuroHero.jsx'
import WhatIsTuro from '../../components/turo/WhatIsTuro.jsx'
import WhyChooseTuro from '../../components/turo/WhyChooseTuro.jsx'
import UpcomingAiFeature from '../../components/turo/UpcomingAiFeature.jsx'
import RoleShowcase from '../../components/turo/RoleShowcase.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqServerTabs from '../../components/turo/FaqServerTabs.jsx'
import ReviewCards from '../../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../../components/footer/TestimonialRotatorSection.jsx'

const dashboards = [
  { label: 'User Dashboard', email: 'user@yopmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Host Dashboard', email: 'hostuser123@yopmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

export default function TuroClonePage() {
  usePageStylesheets(pageStylesheets.turoClone)

  useSeo('Turo Clone - Build An App Like Turo | CloneScript')

  return (
    <main className="content turo-clone-page" id="content">
      <div className="wpb-content-wrapper turo-clone-page__content">
        <section className="vc_section">
          <TuroHero />
        </section>

        <section className="vc_section">
          <WhatIsTuro />
        </section>

        <section className="vc_section">
          <WhyChooseTuro />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 50 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 20 }}><span className="liquid_empty_space_inner"></span></div>
                        <div className="ld-fancy-heading text-center">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Ready-to-Launch <span style={{ color: '#0077ff' }}> Turo Clone</span> Platform</span>
                          </h2>
                        </div>
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: 'center' }}>
                              <span style={{ fontWeight: 400 }}>Start your car-sharing business with a ready-to-use platform designed to connect hosts and renters through a smooth and reliable experience.</span>
                            </p>
                          </div>
                        </div>
                        <div className="ld-empty-space" style={{ height: 40 }}><span className="liquid_empty_space_inner"></span></div>
                        <a href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=${encodeURIComponent('Hello, I am interested with this product Turo Clone')}`} target="_blank" rel="noreferrer" className="footer-whatsapp page-whatsapp-light">
                          <i className="fab fa-whatsapp"></i>
                          <span>Get Professional Support</span>
                        </a>
                        <div className="ld-empty-space" style={{ height: 20 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-empty-space" style={{ height: 50 }}><span className="liquid_empty_space_inner"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <UpcomingAiFeature feature={upcomingAiFeature} />
        </section>

        <section className="vc_section">
          <RoleShowcase roles={roleShowcase} />
        </section>

        <PdfDownloadCta
          heading="Check out all the Core Features of our Turo Clone Script"
          desc="Find out everything about the platform and learn about the features which help you to create and maintain a successful car-rental marketplace."
        />

        <StandOutFeaturesGrid
          heading="Standard Features of Turo Clone Script"
          subheading="Turo&rsquo;s vehicle management and interaction features are included in our Turo clone script, which contains all the essential features required to run a seamless car-sharing system."
          items={standOutFeatures}
          color="#0077ff"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h2>Complete Vehicle Sharing Platform Solution</h2>
                          <h3 className="">Manage Your Car Rental Business with Confidence</h3>
                          <div className="st-desc">
                            <p>Our Turo Clone Script brings all the essential marketplace tools together in one place, making it easier to manage vehicles, bookings, users, and payments without unnecessary complexity. The platform is designed to keep daily operations organized and running smoothly.</p>
                            <p>The solution can help streamline management tasks and boost overall efficiency for either a new car-sharing marketplace or an existing one. It is flexible and reliable to ensure that your business can continue to grow, even with its flexible structure.</p>
                          </div>
                        </header>
                        <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient">
                          <span>
                            <span className="btn-txt">Schedule Demo</span>
                            <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/05/rental-car-script.webp" width="1024" height="871" className="vc_single_image-img attachment-full" alt="rental-car-script" title="rental-car-script" loading="lazy" />
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

        <SimpleIconGrid
          title="Add-On Features of Turo Clone Script"
          desc="Our Turo Clone Script comes with flexible add-on features that help extend platform capabilities and support the growth of your car-sharing marketplace."
          items={addOnFeatures}
          columns={5}
          iconColor="#0077ff"
        />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Grow your car-sharing business with a scalable and easy-to-manage Turo clone solution."
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.png"
          color="#0077ff"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_single_image wpb_content_element vc_align_left">
                                    <figure className="wpb_wrapper vc_figure">
                                      <div className="vc_single_image-wrapper vc_box_border_grey">
                                        <img src="/wp-content/uploads/2026/05/car-rental-solution.webp" width="1001" height="1024" className="vc_single_image-img attachment-full" alt="car-rental-solution" title="car-rental-solution" loading="lazy" />
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
                                    <h3>Launch Your Car-Sharing Marketplace Faster with Expert Support</h3>
                                  </header>
                                  <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <TechStackRow items={techStack} heading="Technology We Use" />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container-fluid">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading">
                          <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt"> Turo Clone App Screens</span>
                          </h2>
                        </div>
                        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                          {screenshots.map((src, i) => (
                            <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                  <img src={src} alt={`Turo Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <FaqServerTabs />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
