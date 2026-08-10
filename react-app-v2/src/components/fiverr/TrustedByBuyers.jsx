import { trustedByLogos } from '../../data/trustedByLogos.js'

export default function TrustedByBuyers() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading text-center">
                    <p className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Trusted by<strong> 600+ Buyers</strong></span>
                    </p>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1 grayscale-img-carousel">
                    <div className="carousel-items row">
                      {trustedByLogos.map((logo, i) => (
                        <div className="carousel-item" key={i}>
                          <div className="wpb_single_image wpb_content_element vc_align_left">
                            <figure className="wpb_wrapper vc_figure">
                              <div className="vc_single_image-wrapper vc_box_border_grey">
                                <img src={logo.src} width="300" height="140" className="vc_single_image-img attachment-full" alt={logo.alt} title={logo.title || ''} />
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
