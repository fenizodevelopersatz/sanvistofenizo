import ScheduleFormSection from '../home/ScheduleFormSection.jsx'
import TestimonialRotatorSection from './TestimonialRotatorSection.jsx'
import FooterSitemap from './FooterSitemap.jsx'
import ReviewPlatforms from './ReviewPlatforms.jsx'
import FooterBottom from './FooterBottom.jsx'

export default function Footer() {
  return (
    <footer className="main-footer site-footer footer" id="footer">
      <section id="schedule_form" className="vc_section section-box-shadow schedule-bg vc_custom_1740027174021 vc_section-has-fill">
        <ScheduleFormSection />
        <TestimonialRotatorSection />
      </section>
      <FooterSitemap />
      <ReviewPlatforms />
      <FooterBottom />
    </footer>
  )
}
