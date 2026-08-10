import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import { siteContact } from '../../data/siteContact.js'
import {
  techStack, standOutFeatures, launchSteps, addOnFeatures, pricingPlans, faqs,
  comparisonOurs, comparisonOthers,
} from '../../data/alibaba/alibabaData.js'
import { comparisonLabels } from '../../data/comparisonLabels.js'

import AlibabaHero from '../../components/alibaba/AlibabaHero.jsx'
import TrustedByBadges from '../../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../../components/shared/BlockquoteTestimonials.jsx'
import WhatIsAlibaba from '../../components/alibaba/WhatIsAlibaba.jsx'
import AiFeaturesSection from '../../components/alibaba/AiFeaturesSection.jsx'
import WhyInvest from '../../components/alibaba/WhyInvest.jsx'
import ComparisonTable from '../../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../../components/shared/PdfDownloadCta.jsx'
import RoleFeatureTabs from '../../components/alibaba/RoleFeatureTabs.jsx'
import TechStackRow from '../../components/shared/TechStackRow.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import ProcessSteps from '../../components/shared/ProcessSteps.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import LaunchCta from '../../components/shared/LaunchCta.jsx'
import LiveDemoTabs from '../../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../../components/shared/BlogTeaser.jsx'

const dashboards = [
  { label: 'Buyer Dashboard', email: 'buyer@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
  { label: 'Supplier Dashboard', email: 'supplier@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
]

export default function AlibabaClonePage() {
  usePageStylesheets(pageStylesheets.alibabaClone)

  useEffect(() => {
    document.title = 'Alibaba Clone Script | B2B Marketplace App | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <AlibabaHero />
        </section>

        <section className="vc_section vc_custom_1776320292174 vc_section-has-fill">
          <TrustedByBadges heading="by B2B Entrepreneurs" />
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
          <WhatIsAlibaba />
        </section>

        <WhyInvest />
        <AiFeaturesSection />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="Alibaba Clone" />
        <PdfDownloadCta
          heading="Grab Our Best Alibaba Clone App&rsquo;s Features Document Now!"
          desc="One Click to Get Our Alibaba Clone Product&rsquo;s Complete Knowledge."
        />

        <RoleFeatureTabs />

        <TechStackRow items={techStack} />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Check out Our Alibaba Clone in action</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="Why is our Alibaba clone unique?"
          subheading="Our platform helps businesses stay organized by keeping key operations connected and easy to manage."
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
                        <h2>Hassle-Free Launch Support</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <SimpleIconGrid items={addOnFeatures} title="Add-On Features of Alibaba Clone Script" columns={3} iconColor="#002692" />

        <LaunchCta heading="Launch Your B2B Marketplace Faster with Expert Support and Guidance." />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our B2B Alibaba Clone Script with our extensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
