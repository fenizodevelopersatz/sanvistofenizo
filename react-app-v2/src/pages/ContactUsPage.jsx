import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import ContactHero from '../components/contact/ContactHero.jsx'
import ContactTabs from '../components/contact/ContactTabs.jsx'
import GetInTouch from '../components/contact/GetInTouch.jsx'
import './ContactUsPage.css'

export default function ContactUsPage() {
  usePageStylesheets(pageStylesheets.contactUs)

  useSeo('Contact Us | CloneScript')

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <ContactHero />
          <ContactTabs />
          <GetInTouch />
        </section>
      </div>
    </main>
  )
}
