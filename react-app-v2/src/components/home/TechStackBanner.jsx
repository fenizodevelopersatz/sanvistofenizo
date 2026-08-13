import { homeTechStack } from '../../data/homeTechStack.js'

export default function TechStackBanner() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40bc754">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-12 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
            <div className="vc_column-inner">
              <div className="wpb_wrapper vc_custom_1745485929701">
                <div className="liquid-column-overlay" style={{ background: 'rgba(255, 255, 255, 0.53)' }}></div>
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <header className="fancy-title text-center">
                    <h3>Robust Tech Stack We Used</h3>
                  </header>
                  <div className="ld-empty-space">
                    <span className="liquid_empty_space_inner"></span>
                  </div>
                  <div className="row ld-row" style={{ position: 'relative', zIndex: 1 }}>
                    {homeTechStack.map((t, i) => (
                      <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-4" key={i}>
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_wrapper-inner">
                              <div className="iconbox iconbox-xl iconbox-contents-show-onhover" style={{ color: t.color }}>
                                <div className="iconbox-icon-wrap">
                                  <span className="iconbox-icon-container">
                                    <i className={t.icon}></i>
                                  </span>
                                </div>
                                <h3>{t.title}</h3>
                              </div>
                            </div>
                          </div>
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
    </section>
  )
}
