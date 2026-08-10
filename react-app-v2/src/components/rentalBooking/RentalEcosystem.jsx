import Reveal from '../shared/Reveal.jsx'

export default function RentalEcosystem() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-0 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>Complete Rental Booking Ecosystem</h2>
                    <h3>Supporting End-to-End Rental Management Operations</h3>
                    <div className="st-desc">
                      <p>Our Rental Booking Script is a digital solution designed to simplify rental listings, reservations, and availability management through a single unified platform. It supports multiple rental categories, real-time availability updates, flexible pricing options, secure online payments, user dashboards, and complete booking management.</p>
                      <p>Built to support growing rental operations, this solution enables businesses to manage daily rentals efficiently while adapting to future expansion with ease and confidence.</p>
                    </div>
                  </header>
                  <a href="#schedule_form" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Schedule Demo</span>
                      <span className="btn-icon"><i className="fas fa-calendar-alt"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2026/01/rental-script-booking.webp" width="1584" height="1493" className="vc_single_image-img attachment-full" alt="rental-script-booking" title="rental-script-booking" loading="lazy" />
                      </div>
                    </figure>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
