import Reveal from '../shared/Reveal.jsx'

export default function UpcomingAiFeature({ feature }) {
  return (
    <section data-bg-image="url" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-has-fill vc_row-has-bg">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <Reveal>
                    <div className="ld-fancy-heading text-center sv_text_super">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Upcoming AI Features in<span style={{ color: '#0077ff' }}> Turo Clone Script</span></span>
                      </h2>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>Future updates will bring new features and improvements to deliver an even better platform experience.</p>
                      </div>
                    </div>
                  </Reveal>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="row ld-row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="wpb_wrapper-inner">
                            <div className="iconbox iconbox-heading-xs iconbox-icon-image sv_border">
                              <div className="iconbox-icon-wrap">
                                <span className="iconbox-icon-container"><img src={feature.image} className="liquid-image-icon" width="60" height="60" alt={feature.title} /></span>
                              </div>
                              <div className="contents">
                                <h3>{feature.title}</h3>
                                <p><span style={{ fontWeight: 400 }}>{feature.desc}</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
