import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="fenizo-hero vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a409892f vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading" style={{ marginBottom: 14 }}>
                    <span
                      style={{
                        display: 'inline-block', fontSize: 13, fontWeight: 600, letterSpacing: 0.5,
                        color: '#0030b8', background: '#eef2fb', border: '1px solid #dbe3f5',
                        borderRadius: 20, padding: '6px 16px',
                      }}
                    >
                      Digital Product &amp; Software Development
                    </span>
                  </div>
                  <h1 style={{ fontSize: 32, color: '#101B48', textAlign: 'left' }} className="vc_custom_heading">
                    We Build Digital Products That Move Businesses Forward.
                  </h1>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p>
                        Fenizo Technologies designs and builds websites, mobile apps, SaaS products, e-commerce
                        platforms and custom software for growing businesses — backed by ready-to-launch clone
                        scripts when speed to market matters most.
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <Link to="/contact-us" className="btn btn-solid btn-md circle btn-bordered border-thin btn-icon-circle" style={{ marginRight: 15, marginBottom: 10 }}>
                    <span>
                      <span className="btn-txt">Start Your Project</span>
                      <span className="btn-icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                    </span>
                  </Link>
                  <a href="#services" className="btn btn-default btn-md circle btn-bordered border-thin btn-icon-circle" style={{ marginBottom: 10 }}>
                    <span>
                      <span className="btn-txt">Explore Our Services</span>
                      <span className="btn-icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper" style={{ marginTop: '10%' }}>
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img
                          src="/assets/images/fenizo/hero-development.svg"
                          width="556"
                          height="439"
                          className="vc_single_image-img attachment-full"
                          alt="Web and app development at Fenizo Technologies"
                          title="fenizo-hero-development"
                          fetchPriority="high"
                          decoding="async"
                        />
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
  )
}
