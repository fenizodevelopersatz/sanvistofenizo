import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import Hero from '../components/home/Hero.jsx'
import StarRatingBanner from '../components/home/StarRatingBanner.jsx'
import TrustedByLogos from '../components/home/TrustedByLogos.jsx'
import WhyWeStandOut from '../components/home/WhyWeStandOut.jsx'
import AchievementBanner from '../components/home/AchievementBanner.jsx'
import OurServices from '../components/home/OurServices.jsx'
import TeamToolsBanner from '../components/home/TeamToolsBanner.jsx'
import ReadyMadeSolutions from '../components/home/ReadyMadeSolutions.jsx'
import ViewAllProductsBanner from '../components/home/ViewAllProductsBanner.jsx'
import TechStackBanner from '../components/home/TechStackBanner.jsx'
import DevProcess from '../components/home/DevProcess.jsx'
import ConnectWithUs from '../components/home/ConnectWithUs.jsx'
import './HomePage.css'

export default function HomePage() {
  usePageStylesheets(pageStylesheets.home)

  useSeo('CloneScript | Web, Mobile App & Software Development Company')

  return (
    <main className="content fenizo-homepage" id="content">
      <div className="wpb-content-wrapper">
        <section className="fenizo-intro-section vc_section">
          <Hero />
          <StarRatingBanner />
          <TrustedByLogos />
        </section>
        <WhyWeStandOut />
        <section className="fenizo-milestones-section vc_section">
          <AchievementBanner />
        </section>
        <section className="fenizo-showcase-section vc_section vc_custom_1745486374572 vc_section-has-fill">
          <TeamToolsBanner />
        </section>
        <OurServices />
        <section className="fenizo-solutions-section vc_section">
          <ReadyMadeSolutions />
          <ViewAllProductsBanner />
          <TechStackBanner />
          <DevProcess />
        </section>
        <section className="fenizo-connect-section vc_section vc_custom_1745486388430 vc_section-has-fill">
          <ConnectWithUs />
        </section>
      </div>
    </main>
  )
}
