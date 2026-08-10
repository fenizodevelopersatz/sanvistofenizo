import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  aiFeatures, roleTabs, techStack, standOutFeatures, revenueBenefits,
  launchSteps, dashboards, pricingPlans, comparisonOurs, comparisonOthers, faqs,
} from '../../data/zillow/zillowData.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'

import ZillowHero from '../../components/zillow/ZillowHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhatIsZillow from '../../components/zillow/WhatIsZillow.jsx'
import WhyChooseChecklist from '../../components/shared/WhyChooseChecklist.jsx'
import AiFeaturesGrid from '../../components/shared/AiFeaturesGrid.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import RoleFeatureTabs from '../../components/shared/RoleFeatureTabs.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

export default function ZillowClonePage() {
  usePageStylesheets(pageStylesheets.zillowClone)

  useEffect(() => {
    document.title = 'Zillow Clone Script | Real Estate App Solution | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <ZillowHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <TrustedByBadges heading="by Real Estate Founders" />
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

        <section className="vc_section">
          <WhatIsZillow />
        </section>

        <WhyChooseChecklist
          heading="Why"
          accentWord="Choose Us?"
          desc="Fenizo provides a robust, user-friendly, and futuristic real estate platform that meets your global market expectations."
          points={[
            ['Launch a Zillow-like App with ', '100% Customization.', ''],
            ['Get Complete ', 'Free Installation Support.', ''],
            ['Built on Proven ', 'Business Model to Start Earning Faster.', ''],
            ['Seamless Operations with ', 'Reliable Customer Support.', ''],
          ]}
          image="/wp-content/uploads/2026/04/website-aboutus-1.webp"
          imageAlt="website-aboutus"
        />

        <AiFeaturesGrid items={aiFeatures} heading="AI-Powered Capabilities" columns={4} />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2><strong><span style={{ color: '#002692' }}>The Smarter Choice</span> for Zillow Clone App</strong></h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>The Zillow clone is built with powerful features and scalable technology to assist real estate startups in growing faster and earning revenue.</p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Zillow Clone" />

        <PdfDownloadCta
          heading="Discover Complete Features of Our Zillow Clone"
          desc="Experience the latest features crafted for scalability, high performance, user engagement, and business success. Download the Complete Product Features Guide."
        />

        <RoleFeatureTabs heading="Explore Features Based on Role" roles={roleTabs} />

        <TechStackRow items={techStack} />

        <StandOutFeaturesGrid
          heading="What makes our Zillow Clone stand out?"
          subheading="Our Zillow Clone is built with advanced features and a user-friendly design, making it the perfect solution for property buyers, sellers, and agents."
          items={standOutFeatures}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Get All These Supports &mdash; Absolutely Free</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <RevenueBenefits
          heading="Revenue Benefits"
          subheading="Enhance Your Earnings with Our Zillow Clone&rsquo;s Next-Gen Revenue Strategies!"
          items={revenueBenefits}
          image="/wp-content/uploads/2026/04/revenue_benefits.webp"
        />

        <LiveDemoTabs dashboards={dashboards} />

        <LaunchCta heading="Experience Our Zillow Clone in Real Time" />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our real estate Zillow Clone Script with our extensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
