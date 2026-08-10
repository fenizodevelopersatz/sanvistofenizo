import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'
import {
  aiFeatures, comparisonOurs, comparisonOthers, roleTabs, techStack,
  standOutFeatures, revenueBenefits, launchSteps, pricingPlans, faqs,
} from '../../data/vinted/vintedData.js'

import VintedHero from '../../components/vinted/VintedHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhatIsVintedAndVideo from '../../components/vinted/WhatIsVintedAndVideo.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import VintedIntroBanner from '../../components/vinted/VintedIntroBanner.jsx'
import WhyInvestVinted from '../../components/vinted/WhyInvestVinted.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import RoleFeatureTabs from '../../components/shared/RoleFeatureTabs.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

const dashboards = [
  { label: 'User/Seller Dashboard', email: 'buyer@email.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

const whyChoosePoints = [
  ['Launch a fully customized ', 'Vinted-like app', ''],
  ['Free installation and ', 'Setup Support.', ''],
  ['Proven model for ', 'faster earnings.', ''],
  ['Reliable Ongoing ', ' Customer Support.', ''],
]

export default function VintedClonePage() {
  usePageStylesheets(pageStylesheets.vintedClone)

  useEffect(() => {
    document.title = 'Vinted Clone Script | Fashion Resale Marketplace App | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <VintedHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <TrustedByBadges heading="by Our Clients" />
          <BlockquoteTestimonials count={3} offset={0} />
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="ld-fancy-heading text-center">
                          <h4 className="lqd-highlight-underline lqd-highlight-grow-left">
                            <span className="ld-fh-txt">Recognized by <span style={{ color: '#002692' }}>clients</span></span>
                          </h4>
                        </div>
                        <div className="wpb_text_column wpb_content_element">
                          <div className="wpb_wrapper">
                            <p style={{ textAlign: 'center' }}>Fenizo Technologies has years of experience in delivering high-quality product development solutions.</p>
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

        <WhatIsVintedAndVideo />

        <WhyChooseChecklist
          heading="Why"
          accentWord="Choose Us?"
          desc="Take your online classified marketplace to success with our ready-to-launch and feature-packed Vinted Clone App."
          points={whyChoosePoints}
          image="/assets/images/fenizo/achievement-stats.svg"
          imageAlt="Fenizo Technologies: serving 20+ countries with 24+ happy clients worldwide"
        />

        <VintedIntroBanner />
        <WhyInvestVinted />
        <AiFeaturesGrid items={aiFeatures} columns={2} />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Vinted Clone" />
        <PdfDownloadCta
          heading="Explore the Full Capabilities of Our Vinted Clone"
          desc="Take a closer look at the features designed to support smooth operations, strong user engagement, and steady business growth. Get the complete product feature details to understand how the platform works."
        />

        <RoleFeatureTabs heading="Essential Features of Our Vinted Marketplace Software" roles={roleTabs} />

        <TechStackRow items={techStack} />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="ld-fancy-heading">
                        <h2 className="lqd-highlight-underline lqd-highlight-grow-left"><span className="ld-fh-txt"> Book a Live Demo</span></h2>
                      </div>
                      <header className="fancy-title">
                        <h2>Take a Real-Time Walkthrough of Our Vinted Clone</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'left' }}>
                            <span style={{ fontWeight: 400 }}>Book a one-on-one session to go through the platform features, see how everything works step by step, and understand how it can fit your business needs.</span>
                          </p>
                        </div>
                      </header>
                      <a href="#schedule_form" className="btn btn-solid btn-sm round btn-bordered border-thin btn-gradient">
                        <span>
                          <span className="btn-gradient-bg"></span>
                          <span className="btn-txt">Book Demo</span>
                          <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="Why Our Vinted Clone Stands Out?"
          subheading="Our platform helps businesses stay organized by keeping key operations connected and easy to manage."
          items={standOutFeatures}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Get All These Supports — Absolutely Free</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <RevenueBenefits items={revenueBenefits} subheading="Boost your revenue with earning features designed to support business growth." />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Do you have any doubts? Get Instant Solutions Here"
          subheading="Our FAQ Section provides complete clarification for all your queries about the vinted clone script"
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
