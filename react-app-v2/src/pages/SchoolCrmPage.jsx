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
import GuideCoverArt from '../components/shared/GuideCoverArt.jsx'
import DashboardMockup from '../components/schoolCrm/DashboardMockup.jsx'
import StandOutFeaturesGrid from '../components/shared/StandOutFeaturesGrid.jsx'
import SimpleIconGrid from '../components/shared/SimpleIconGrid.jsx'
import TechStackRow from '../components/shared/TechStackRow.jsx'
import ProcessSteps from '../components/shared/ProcessSteps.jsx'
import LaunchCta from '../components/shared/LaunchCta.jsx'
import LiveDemoTabs from '../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../components/shared/FaqAccordion.jsx'
import TestimonialRotatorSection from '../components/footer/TestimonialRotatorSection.jsx'
import BlogTeaser from '../components/shared/BlogTeaser.jsx'
import PremiumCta from '../components/shared/PremiumCta.jsx'
import './SchoolCrmPage.css'

const dashboards = [
  {
    label: 'Admin Dashboard',
    email: 'admin@gmail.com',
    password: '12345678',
    url: siteContact.cloneDemoUrl,
    image: '/wp-content/school/school-dashboard-preview.png',
    imageAlt: 'School CRM admin dashboard with student, mentor, and attendance overview',
  },
  {
    label: 'Teacher Dashboard',
    email: 'teacher@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    image: '/wp-content/school/school-analytics-preview.png',
    imageAlt: 'School CRM mentor analytics with teaching-level and gender distribution charts',
  },
  {
    label: 'Parent Dashboard',
    email: 'parent@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Parent" accent="#e72ad4" avatarIcon="fa-user" stats={[{ value: '2', label: 'Children' }, { value: 'A+', label: 'Latest Grade' }]} />,
  },
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
          media={(
            <GuideCoverArt
              brand="CloneScript"
              titleLine1="School Management"
              titleLine2="Software Suite"
              tagline="Core Modules &middot; Live Demo &middot; Tech Stack"
              badge="Cloud-Based"
              gradientFrom="#3b5bff"
              gradientVia="#1e3fc4"
              gradientTo="#0a1f6e"
              accentColor="#ffc233"
              features={[
                { icon: '≡', label: 'Core Modules' },
                { icon: '▶', label: 'Live Demo' },
                { icon: '⚙', label: 'Tech Stack' },
              ]}
            />
          )}
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

        <LaunchCta
          variant="dark"
          badge="CTA"
          heading="Launch Your Platform"
          desc="CloneScript School CRM is a cloud-hosted school management system with separate dashboards for admissions, attendance, and fees."
          image="/wp-content/uploads/2026/08/schoolcrm-launch-classroom.webp"
          imageAlt="Teacher assisting students with their coursework at a desk in a classroom"
        />

        <LiveDemoTabs dashboards={dashboards} />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <FaqAccordion
          heading="Have Doubts? Get Answers Right Here"
          subheading="Clear all your doubts about our School CRM with our extensive FAQ section."
          faqs={faqs}
        />

        <TestimonialRotatorSection
          image="/wp-content/reviews/school-review.png"
          imageAlt="Five School CRM customer testimonials"
          width={1140}
          height={760}
        />

        <BlogTeaser />

        <PremiumCta
          heading="Ready to Transform Your School?"
          subheading="Manage your entire school from one powerful platform."
          buttonText="Start Your Free Demo"
          icon="fa-graduation-cap"
        />
      </div>
    </main>
  )
}
