import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standardFeatures, addOnFeatures, multimediaFeatures, revenueBenefits,
  featureGroups, pricingPlans, faqs, screenshots,
} from '../../data/youtube/youtubeData.js'

import YoutubeHero from '../../components/youtube/YoutubeHero.jsx'
import WhatIsYoutube from '../../components/youtube/WhatIsYoutube.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function YoutubeClonePage() {
  usePageStylesheets(pageStylesheets.youtubeClone)

  useEffect(() => {
    document.title = 'YouTube Clone Script | Video Streaming App | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <YoutubeHero />
        </section>

        <TrustedByBadges heading="by 600+ Buyers" />

        <section className="vc_section">
          <WhatIsYoutube />
        </section>

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/01/Group-48096911.webp" width="1213" height="923" alt="Why choose us" loading="lazy" />
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
                        <h2>Why Choose Us?</h2>
                        <div className="st-desc">
                          <p><span style={{ fontWeight: 400 }}>Kickstart your online video streaming business with our customizable and flawless YouTube clone app. We have experienced and skilled developers to design an app like YouTube to meet our clients&rsquo; business needs and achieve their business goals.</span></p>
                        </div>
                      </header>
                      <a href="#schedule_form" data-localscroll="true" className="btn btn-solid btn-sm circle btn-bordered border-thin">
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

        <LaunchCta heading="Launch Your Profitable Business with Our No. 1 YouTube Clone App" />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Explore the Complete Features of Our Youtube Clone App</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AmazonFeatureTabs groups={featureGroups} />

        <PdfDownloadCta
          heading="Explore the Complete Features of Our Youtube Clone App"
          desc=""
        />

        <SimpleIconGrid title="Standard Features of YouTube Clone App" items={standardFeatures} columns={3} iconColor="#ff0022" />

        <StandOutFeaturesGrid
          heading="Add on Features"
          subheading=""
          items={addOnFeatures}
          color="rgb(255, 71, 0)"
        />

        <SimpleIconGrid title="All-In-One Multimedia Super App" items={multimediaFeatures} columns={3} iconColor="#002692" />

        <RevenueBenefits
          heading="Revenue Benefits"
          items={revenueBenefits}
          image="/wp-content/uploads/2025/01/Frame-48096599-1.webp"
          color="#FF0022"
        />

        <section className="vc_row wpb_row vc_row-fluid">
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
                            <img src="/wp-content/uploads/2025/04/utube-clone-tech.png" alt="technologies-used" loading="lazy" />
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

        <LaunchCta heading="Start Your Dream Business Today to Earn More Revenue." />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>YouTube Clone Mobile App Screens</h2>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`YouTube Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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
          subheading="Get answers for all your queries about our YouTube Clone Script with our comprehensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
