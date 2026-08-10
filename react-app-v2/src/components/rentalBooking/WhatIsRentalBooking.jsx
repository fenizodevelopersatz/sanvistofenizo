import Reveal from '../shared/Reveal.jsx'

export default function WhatIsRentalBooking() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 text-left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="left">
                  <header className="fancy-title">
                    <h2>What is a Rental Booking Script?</h2>
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A Rental Booking Script is a ready-to-use software solution that helps businesses quickly launch a professional rental booking website or mobile app with robust features, functionalities are inspired by leading rental platforms.</span></p>
                      <p><span style={{ fontWeight: 400 }}>It reduces development time and cost while delivering a smooth, secure, and user-friendly booking experience. Built for property rentals, vacation homes, vehicle rentals, equipment leasing, and on-demand rental services, it includes advanced search, real-time availability, secure online payments, and centralized management dashboards.</span></p>
                    </div>
                  </header>
                  <a href="/schedule-free-demo" target="_blank" rel="noreferrer" className="btn btn-solid btn-sm circle btn-bordered border-thin btn-gradient">
                    <span>
                      <span className="btn-txt">Schedule Now</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-calendar"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" direction="right">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/uploads/2026/01/rental-booking-clone.webp" width="1386" height="1416" className="vc_single_image-img attachment-full" alt="rental-booking-clone" title="rental-booking-clone" loading="lazy" />
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
