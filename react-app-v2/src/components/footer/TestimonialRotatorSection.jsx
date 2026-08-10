import { testimonialVideos } from '../../data/testimonialVideos.js'

export default function TestimonialRotatorSection() {
  return (
    <>
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d1c33">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <div className="ld-fancy-heading text-center">
                      <h3 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                        <span className="ld-fh-txt">
                          {' '}
                          Testimonial{' '}
                          <span className="txt-rotate-keywords">
                            <span className="keyword active" style={{ color: 'rgb(255, 87, 87)' }}>Beyond Expectations</span>
                            <span className="keyword" style={{ color: 'rgb(87, 161, 255)' }}>Celebrating Excellence</span>
                            <span className="keyword" style={{ color: 'rgb(0, 214, 53)' }}>Outstanding Performance</span>
                          </span>
                        </span>
                      </h3>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-3 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_wrapper-inner">
                              <div className="wpb_single_image wpb_content_element vc_align_center">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img src="/wp-content/uploads/2023/03/Group-726-1024x92.png" width="780" height="70" className="vc_single_image-img attachment-large" alt="google review" title="google review" />
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d33ea">
        <div className="ld-container container">
          <div className="row ld-row">
            {testimonialVideos.map((v, i) => (
              <div className="custom-footer-ripple-btn wpb_column vc_column_container vc_col-sm-4 text-center" key={i}>
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="liquid-img-group-container">
                        <div className="liquid-img-group-inner">
                          <div className="liquid-img-group-single custom-footer-ripple-btn" data-roundness="6">
                            <div className="liquid-img-group-img-container">
                              <div className="liquid-img-group-content content-floated-mid">
                                <a href={v.href} target="_blank" rel="noreferrer" className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-custom-size btn-icon-circle btn-icon-border-thicker btn-icon-bordered btn-icon-ripple">
                                  <span>
                                    <span className="btn-icon"><i className="icon-ion-ios-play"></i></span>
                                  </span>
                                </a>
                              </div>
                              <div className="liquid-img-container-inner">
                                <figure>
                                  <div style={{ width: '100%', aspectRatio: '1280 / 720', background: '#e9e9e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="img" aria-label={v.alt}>
                                    <i className="fas fa-video" style={{ fontSize: 32, color: '#bbb' }}></i>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d5f12">
        <div className="ld-container container-fluid">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <a href="#" title="Portfolio" className="btn btn-solid btn-bordered border-thin vc_custom_1712921565314">
                      <span>
                        <span className="btn-txt">View All</span>
                      </span>
                    </a>
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
