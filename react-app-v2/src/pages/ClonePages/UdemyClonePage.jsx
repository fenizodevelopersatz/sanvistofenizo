import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standardFeatures, revenueBenefits, dashboards, pricingPlans, screenshots,
} from '../../data/udemy/udemyData.js'

import UdemyHero from '../../components/udemy/UdemyHero.jsx'
import TrustedByLogosCarousel from '../../components/udemy/TrustedByLogosCarousel.jsx'
import WhatIsUdemy from '../../components/udemy/WhatIsUdemy.jsx'
import WhyChooseUsUdemy from '../../components/udemy/WhyChooseUsUdemy.jsx'
import LaunchWhatsappCta from '../../components/udemy/LaunchWhatsappCta.jsx'
import UdemyRoleFeatures from '../../components/udemy/UdemyRoleFeatures.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AiContentGenerator from '../../components/udemy/AiContentGenerator.jsx'
import FreeAddOnFeatures from '../../components/udemy/FreeAddOnFeatures.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import UdemyFaqTabs from '../../components/udemy/UdemyFaqTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function UdemyClonePage() {
  usePageStylesheets(pageStylesheets.udemyClone)

  useEffect(() => {
    document.title = '#1 Udemy Clone to Start Your Own eLearning Platform | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_custom_1738736124508 vc_section-has-fill">
          <UdemyHero />
          <TrustedByLogosCarousel />
        </section>

        <section className="vc_section">
          <WhatIsUdemy />
        </section>

        <section className="vc_section">
          <WhyChooseUsUdemy />
          <LaunchWhatsappCta />
        </section>

        <UdemyRoleFeatures />

        <PdfDownloadCta
          heading="Explore the Complete Features of Our Udemy Clone"
          desc=""
        />

        <StandOutFeaturesGrid
          heading="Standard Features"
          subheading="Must-Have Features of a Udemy Clone Script for a Seamless Experience"
          items={standardFeatures}
        />

        <AiContentGenerator />

        <FreeAddOnFeatures />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Tap into New Revenue Streams with Advanced Earning Models of Our Udemy Clone"
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
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
                            <img src="/wp-content/uploads/2025/02/Group-48097143.png" alt="technologies-used" loading="lazy" />
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
                            <img src="/wp-content/uploads/2025/09/udemy-11.webp" width="729" height="596" className="vc_single_image-img attachment-full" alt="elearning-script" title="elearning-script" loading="lazy" />
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
                        <h3>Take the First Step Confidently - Your Sucess is a Tap Away</h3>
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
                          <h2>Udemy Clone Live Demo</h2>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <LiveDemoTabs dashboards={dashboards} />
        </section>

        <PricingPlans heading="Pick a Plan" plans={pricingPlans} />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Udemy Clone App Screens</h2>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`Udemy Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <UdemyFaqTabs />

        <BlogTeaser />
      </div>
    </main>
  )
}
