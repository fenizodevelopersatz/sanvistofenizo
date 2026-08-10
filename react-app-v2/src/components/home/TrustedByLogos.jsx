import { trustedByLogos } from '../../data/trustedByLogos.js'

export default function TrustedByLogos() {
  return (
    <section className="vc_row wpb_row vc_row-fluid vc_custom_1742024195220 row-contains-padding-top row-contains-padding-bottom liquid-row-shadowbox-6a665a409aa78 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-4 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <header className="fancy-title">
                    <h2>Trusted by Industry Leaders</h2>
                    <h6>Step into the Future With Us</h6>
                  </header>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-8">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                    <div className="carousel-items row">
                      {trustedByLogos.map((logo, i) => (
                        <div className="carousel-item" key={i}>
                          <div className="wpb_single_image wpb_content_element vc_align_left">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img
                                  src={logo.src}
                                  width="300"
                                  height="140"
                                  className="vc_single_image-img attachment-full"
                                  alt={logo.alt}
                                  title={logo.title || ''}
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      ))}
                    </div>
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
