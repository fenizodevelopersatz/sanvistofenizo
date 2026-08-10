import { aiFeatures } from '../../data/alibaba/alibabaData.js'

export default function AiFeaturesSection() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> AI-Powered Capabilities</span>
                    </h2>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row">
          {aiFeatures.map((f, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-4" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="iconbox iconbox-heading-xs iconbox-icon-image sv_border">
                      <div className="iconbox-icon-wrap">
                        <span className="iconbox-icon-container"><img src={f.image} className="liquid-image-icon" width="60" height="52" alt={f.title} /></span>
                      </div>
                      <div className="contents">
                        <h3>{f.title}</h3>
                        <p><span style={{ fontWeight: 400 }}>{f.desc}</span></p>
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
  )
}
