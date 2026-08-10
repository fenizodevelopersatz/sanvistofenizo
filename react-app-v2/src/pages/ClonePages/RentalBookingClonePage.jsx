import { useEffect } from 'react'
import { usePageStylesheets } from '../../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../../data/pageStylesheets.js'
import {
  standOutFeatures, addOnFeatures, revenueBenefits, pricingPlans, faqs,
} from '../../data/rentalBooking/rentalBookingData.js'

import RentalBookingHero from '../../components/rentalBooking/RentalBookingHero.jsx'
import TrustedByBuyers from '../../components/rentalBooking/TrustedByBuyers.jsx'
import WhatIsRentalBooking from '../../components/rentalBooking/WhatIsRentalBooking.jsx'
import WhyChooseUsRental from '../../components/rentalBooking/WhyChooseUsRental.jsx'
import ChatWithExpertCta from '../../components/rentalBooking/ChatWithExpertCta.jsx'
import MainFeaturesRoles from '../../components/rentalBooking/MainFeaturesRoles.jsx'
import StandOutFeaturesGrid from '../../components/shared/StandOutFeaturesGrid.jsx'
import RentalEcosystem from '../../components/rentalBooking/RentalEcosystem.jsx'
import SimpleIconGrid from '../../components/shared/SimpleIconGrid.jsx'
import RevenueBenefits from '../../components/shared/RevenueBenefits.jsx'
import RentalCategoriesCarousel from '../../components/rentalBooking/RentalCategoriesCarousel.jsx'
import TechWeUsed from '../../components/rentalBooking/TechWeUsed.jsx'
import PricingPlans from '../../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../../components/shared/MoneyBackGuarantee.jsx'
import AppScreens from '../../components/rentalBooking/AppScreens.jsx'
import FaqAccordion from '../../components/shared/FaqAccordion.jsx'

export default function RentalBookingClonePage() {
  usePageStylesheets(pageStylesheets.rentalBookingScript)

  useEffect(() => {
    document.title = 'Rental Booking Script | Best Booking Clone | Fenizo'
  }, [])

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section vc_section-has-fill">
          <RentalBookingHero />
          <TrustedByBuyers />
        </section>

        <section className="vc_section">
          <WhatIsRentalBooking />
        </section>

        <section className="vc_section">
          <WhyChooseUsRental />
        </section>

        <section className="vc_section">
          <ChatWithExpertCta />
        </section>

        <section className="vc_section">
          <MainFeaturesRoles />
        </section>

        <section className="vc_section vc_section-has-fill">
          <StandOutFeaturesGrid
            heading="Standard Features of Rental Booking Script"
            subheading="Our Rental Booking System is designed with powerful features to elevate and streamline your rental business."
            items={standOutFeatures}
            color="#0077ff"
          />
        </section>

        <section className="vc_section">
          <RentalEcosystem />
        </section>

        <section className="vc_section vc_section-has-fill">
          <SimpleIconGrid
            items={addOnFeatures}
            title="Add-On Features of Rental Booking Script"
            desc="Our Rental Booking Script provides add-on features to help manage operations better and scale with confidence."
            columns={5}
            iconColor="#0077ff"
          />
        </section>

        <section className="vc_section vc_section-has-fill">
          <RevenueBenefits
            heading="Revenue Benefits"
            subheading="A revenue-focused Rental Booking solution that helps you grow income while delivering a seamless booking experience."
            items={revenueBenefits}
            image="/wp-content/uploads/2026/01/revenue.webp"
            color="#0077ff"
          />
        </section>

        <section className="vc_section">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-5 vc_hidden-sm vc_hidden-xs">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2026/01/rental-booking-solution.webp" width="1422" height="1458" className="vc_single_image-img attachment-full" alt="rental-booking-solution" title="rental-booking-solution" loading="lazy" />
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <header className="fancy-title">
                          <h3>Plan Your Rental Booking Platform with Our Experts Today.</h3>
                        </header>
                        <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin">
                          <span>
                            <span className="btn-txt">Schedule now</span>
                            <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="vc_section">
          <RentalCategoriesCarousel />
        </section>

        <section className="vc_section">
          <TechWeUsed />
        </section>

        <section id="prices" className="vc_section section10">
          <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
            <div className="ld-container container">
              <div className="row ld-row">
                <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-md-offset-3 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-offset-1 vc_col-xs-10 text-center">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="wpb_wrapper-inner">
                        <div className="wpb_single_image wpb_content_element vc_align_center">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper vc_box_border_grey">
                              <img src="/wp-content/uploads/2023/03/Group-726-1024x92.png" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" loading="lazy" />
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

          <MoneyBackGuarantee />
          <PricingPlans plans={pricingPlans} heading="Pick a Plan" />
        </section>

        <section className="vc_section vc_section-has-fill">
          <AppScreens />
        </section>

        <section className="vc_section">
          <FaqAccordion
            heading="Have Doubts? Get Answers Right Here"
            subheading="Explore our comprehensive FAQ section to get all the insights you need about our Rental Booking Script."
            faqs={faqs}
          />
        </section>
      </div>
    </main>
  )
}
