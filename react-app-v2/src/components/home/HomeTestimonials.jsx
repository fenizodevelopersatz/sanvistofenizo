import TestimonialCarousel from './TestimonialCarousel.jsx'
import './HomeTestimonials.css'

export default function HomeTestimonials() {
  return (
    <section className="cs-home-testimonials vc_row wpb_row vc_row-fluid">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ld-fh-has-fill text-center">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Testimonials</span>
                    </p>
                  </div>
                  <header className="fancy-title text-center">
                    <h2>What Our Customers Say</h2>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-home-testimonials__panel">
        <TestimonialCarousel cardBg="#ffffff" />
      </div>
    </section>
  )
}
