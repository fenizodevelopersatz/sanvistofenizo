import { useEffect } from 'react'
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

export default function HomePage() {
  usePageStylesheets(pageStylesheets.home)

  useEffect(() => {
    document.title = 'Mobile App & Web Development Company | Clone Script Solutions'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <Hero />
          <StarRatingBanner />
          <TrustedByLogos />
        </section>
        <WhyWeStandOut />
        <section className="vc_section">
          <AchievementBanner />
          <TeamToolsBanner />
        </section>
        <OurServices />
        <ReadyMadeSolutions />
        <ViewAllProductsBanner />
        <TechStackBanner />
        <DevProcess />
        <section className="vc_section vc_custom_1745486388430 vc_section-has-fill">
          <ConnectWithUs />
        </section>
      </div>
    </main>
  )
}
