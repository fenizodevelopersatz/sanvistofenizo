import { useSeo } from '../../hooks/useSeo.js'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  whyChooseUs, standardFeatureGroups, generalIconFeatures, platformRows,
  addOnFeatures, generalFeatureColumns, dashboards, pricingPlans, screenshots,
} from '../../data/amazon/amazonData.js'

import AmazonHero from '../../components/amazon/AmazonHero.jsx'
import WhatIsAmazon from '../../components/amazon/WhatIsAmazon.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import AmazonFeatureTabs from '../../components/amazon/AmazonFeatureTabs.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import PlatformFeatureRows from '../../components/amazon/PlatformFeatureRows.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import FaqServerTabs from '../../components/amazon/FaqServerTabs.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function AmazonClonePage() {
  usePageStylesheets(pageStylesheets.amazonClone)

  useSeo('Amazon Clone Script | eCommerce Marketplace App | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <AmazonHero />
        </section>

        <section className="vc_section">
          <WhatIsAmazon />
        </section>

        <StandOutFeaturesGrid
          heading="Why CloneScript is the Best choice for Your Business?"
          subheading="Features"
          items={whyChooseUs}
        />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Whitelabel Amazon Clone Features For Your Business</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Our Amazon clone script is built with state-of-the-art features, tools, functions, and technologies similar to Amazon.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AmazonFeatureTabs groups={standardFeatureGroups} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Highlighted Features</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-5 vc_hidden-sm vc_hidden-xs">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_left">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/09/ecommerce-features.webp" alt="ecommerce-features" loading="lazy" />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-5 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <SimpleIconGrid items={generalIconFeatures} columns={1} iconColor="#002692" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlatformFeatureRows rows={platformRows} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <h3 style={{ textAlign: 'center' }}>Launch Your Custom App to Expand Your E-commerce Business Now!</h3>
                      <a href="/schedule-free-demo" className="btn btn-solid btn-xsm circle btn-bordered border-thin">
                        <span>
                          <span className="btn-txt">Book Your Slot</span>
                          <span className="btn-icon"><i className="far fa-calendar-check"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AiFeaturesGrid heading="Add on Features" items={addOnFeatures} columns={4} />

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading text-center">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                          <span className="ld-fh-txt"> General Features</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ld-row">
              {generalFeatureColumns.map((column, i) => (
                <div className="wpb_column vc_column_container vc_col-sm-4" key={i}>
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <ul className="custom_list_icon">
                          {column.map((item) => (
                            <li key={item}><span style={{ fontWeight: 400 }}>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PdfDownloadCta
          heading="Grab Our Best Amazon Clone App&rsquo;s Features Document Now!"
          desc="One Click to Get Our Amazon Clone Product&rsquo;s Complete Knowledge."
        />

        <section className="vc_row wpb_row vc_row-fluid vc_row-o-content-middle vc_row-flex">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title">
                        <h2>Boost Your eCommerce Business With Our Amazon Clone</h2>
                        <div className="st-desc">
                          <p><span style={{ color: '#8181ac' }}>Enter the eCommerce market with the best Amazon Clone script and the latest features and functionalities without breaking the bank. Our team of skilled developers crafted the Amazon Clone App with a complete feature set to stand out, be unique in the industry and succeed.</span></p>
                        </div>
                      </header>
                      <a href="/schedule-free-demo" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-bordered-gradient">
                        <span>
                          <span className="btn-txt">Schedule Demo</span>
                          <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                        </span>
                      </a>{' '}
                      <a href="#prices" data-localscroll="true" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-bordered-gradient btn-gradient">
                        <span>
                          <span className="btn-txt">View Prices</span>
                          <span className="btn-icon"><i className="fas fa-dollar-sign"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-5">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2025/09/ecommerce-business.webp" alt="ecommerce-business" loading="lazy" />
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

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <LiveDemoTabs dashboards={dashboards} />

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Mobile App Screens</h2>
                      </header>
                      <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                        {screenshots.map((src, i) => (
                          <div className="wpb_single_image wpb_content_element vc_align_center" key={i}>
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={src} alt={`Amazon Clone screen ${i + 1}`} loading="lazy" style={{ maxWidth: '100%' }} />
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

        <section className="vc_row wpb_row vc_row-fluid">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Technology We Used</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>Advanced Technologies To Developed Our Whitelabel Amazon Clone Software Solution.</p>
                        </div>
                      </header>
                      <div className="wpb_single_image wpb_content_element vc_align_center">
                        <figure className="wpb_wrapper vc_figure">
                          <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img src="/wp-content/uploads/2024/11/group-2866-6749b682190bb.webp" alt="technology stack" loading="lazy" />
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

        <FaqServerTabs />

        <BlogTeaser />
      </div>
    </main>
  )
}
