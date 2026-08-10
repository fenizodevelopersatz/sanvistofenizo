import { coreModules } from '../../data/erp/coreModules.js'

export default function CoreModules() {
  return (
    <section className="vc_section">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a66503f8">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-2 vc_col-md-8 vc_col-sm-offset-1 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                    <header className="fancy-title text-center">
                      <h2>All-In-One Business ERP System</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>A complete ERP Solution for managing business operations, helping teams stay organized and work more efficiently.</p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a6650f21">
        <div className="ld-container container">
          <div className="row ld-row">
            {coreModules.map((m, i) => (
              <div className="wpb_column vc_column_container vc_col-sm-1/5" key={i}>
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="iconbox iconbox-hexagon iconbox-md iconbox-heading-sm" style={{ color: '#002692' }}>
                        <div className="iconbox-icon-wrap">
                          <span className="iconbox-icon-container"><i className={m.icon}></i></span>
                        </div>
                        <h3 className="font-weight-semibold">{m.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
