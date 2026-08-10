import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  featureGroups, standOutFeatures, addOnFeatures, revenueBenefits, screenshots, pricingPlans, faqs,
} from '../../data/tiktok/tiktokData.js'

import TiktokHero from '../../components/tiktok/TiktokHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import WhatIsTiktok from '../../components/tiktok/WhatIsTiktok.jsx'
import FounderExpertCta from '../../components/tiktok/FounderExpertCta.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function TiktokClonePage() {
  usePageStylesheets(pageStylesheets.tiktokClone)

  useEffect(() => {
    document.title = 'TikTok Clone Script | Launch Video Sharing App in 7 Days | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <TiktokHero />
        </section>

        <TrustedByBadges heading="by 600+ Buyers" />

        <section className="vc_section">
          <WhatIsTiktok />
        </section>

        <section className="vc_section">
          <FounderExpertCta />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading ld-fh-has-fill text-center">
                          <p className="circle lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> <span style={{ color: 'white' }}>Main Features</span></span></p>
                        </div>
                        <header className="fancy-title text-center">
                          <p>Explore the Powerful Features of Our Short-Video Platform</p>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AmazonFeatureTabs groups={featureGroups} />
        </section>

        <StandOutFeaturesGrid
          heading="Standard Features of TikTok Clone App"
          subheading="In TikTok Clone there are Multiple Features Available that Helps to Stand Out in the Video Sharing Industry."
          items={standOutFeatures}
          color="rgb(6, 199, 201)"
        />

        <SimpleIconGrid
          title="Addon Features of TikTok Clone"
          desc="Our TikTok Clone is Designed with Unique Addon Features to Earn Huge Revenue within a Short Time."
          items={addOnFeatures}
          columns={5}
          iconColor="#06c7c9"
        />

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-6">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_left">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/video-sharing-app.png" width="1031" height="1060" className="vc_single_image-img attachment-full" alt="video-sharing-app" title="video-sharing-app" loading="lazy" />
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
                          <h2>No.1 Video Sharing App Like TikTok</h2>
                          <div className="st-desc">
                            <p>Our TikTok Clone Script is developed with high-standard features and advanced functionalities, and offers a 100% customizable iOS app and admin panel at a budget-friendly cost. Launch your own video-sharing app like TikTok to earn significant profits in a short time and achieve your business goals.</p>
                          </div>
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Our TikTok Clone script is designed with multiple revenue-generating features that help you monetize your platform effectively and grow your business."
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#06c7c9"
        />

        <section className="vc_section vc_section-has-fill">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title text-center">
                          <h2>Technology We Used</h2>
                        </header>
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/Technology.webp" width="2183" height="1164" className="vc_single_image-img attachment-full" alt="Technology" title="Technology" loading="lazy" />
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

        <LaunchCta heading="Right Time to Start Your Video Sharing Business!" />

        <PricingPlans plans={pricingPlans} heading="Pick a Plan" />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>TikTok Clone Mobile App Screens</h2>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`TikTok Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <FaqAccordion
          heading="Have Queries? Get Solutions Right Here"
          subheading="Get answers for all your queries about our TikTok Clone Script with our comprehensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
