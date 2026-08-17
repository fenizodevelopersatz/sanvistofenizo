import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { siteContact } from '../data/siteContact.js'
import {
  coreModules, standardFeatures, addOnFeatures, techStack, launchSteps,
  pricingPlans, comparisonOurs, comparisonOthers, faqs,
} from '../data/schoolCrm/schoolCrmData.js'
import { comparisonLabels } from '../data/comparisonLabels.js'

import SchoolCrmHero from '../components/schoolCrm/SchoolCrmHero.jsx'
import WhatIsSchoolCrm from '../components/schoolCrm/WhatIsSchoolCrm.jsx'
import TrustedByBadges from '../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../components/shared/BlockquoteTestimonials.jsx'
import ComparisonTable from '../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../components/shared/PdfDownloadCta.jsx'
import StandOutFeaturesGrid from '../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../components/shared/SimpleIconGrid.jsx'
import TechStackRow from '../components/shared/TechStackRow.jsx'
import ProcessSteps from '../components/shared/ProcessSteps.jsx'
import LaunchCta from '../components/shared/LaunchCta.jsx'
import LiveDemoTabs from '../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../components/shared/FaqAccordion.jsx'
import BlogTeaser from '../components/shared/BlogTeaser.jsx'
import './SchoolCrmPage.css'

const dashboards = [
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: '12345678', url: siteContact.cloneDemoUrl },
  { label: 'Teacher Dashboard', email: 'teacher@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
  { label: 'Parent Dashboard', email: 'parent@gmail.com', password: 'password123', url: siteContact.cloneDemoUrl },
]

export default function SchoolCrmPage() {
  usePageStylesheets(pageStylesheets.schoolCrm)

  useSeo('School CRM | School Management System | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper schoolcrm-motion-page">
        <section className="vc_section">
          <SchoolCrmHero />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TrustedByBadges heading="by Schools & Institutes" />
          <BlockquoteTestimonials count={3} offset={0} visibleCount={2} />
        </section>

        <section className="vc_section">
          <WhatIsSchoolCrm />
        </section>

        <StandOutFeaturesGrid
          heading="Core Modules of School CRM"
          subheading="Everything a school needs to run day-to-day operations, in one connected platform."
          items={coreModules}
        />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="School CRM" />
        <PdfDownloadCta
          heading="Grab Our Best School CRM Features Document Now!"
          desc="One Click to Get Our School CRM Product's Complete Knowledge."
        />

        <SimpleIconGrid items={standardFeatures} title="Standard Features of School CRM" columns={3} iconColor="#002692" />
        <SimpleIconGrid items={addOnFeatures} title="Add-On Features of School CRM" columns={5} iconColor="#002692" />

        <TechStackRow items={techStack} />

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

        <LaunchCta heading="Launch Your School Management Platform Faster with Expert Support and Guidance." />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our School CRM with our extensive FAQ section."
          faqs={faqs}
        />

        <BlogTeaser />
      </div>
    </main>
  )
}
