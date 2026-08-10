import { industries } from '../../data/erp/coreModules.js'

export default function IndustriesCarousel() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a666e000">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Industries We Serve</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        Our Enterprise Resource Planning (ERP) SaaS supports a wide range of businesses by helping manage
                        inventory, sales, purchasing, and everyday operations from one place.
                      </p>
                    </div>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container-fluid">
        <div className="row ld-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {industries.map((ind, i) => (
            <div className="fancy-box border-radius-3 scheme-light fancy-box-overlay tall" key={i} style={{ position: 'relative', borderRadius: 15, overflow: 'hidden' }}>
              <div className="cb-img-container border-radius-3">
                <img src={ind.image} alt={ind.title} style={{ width: '100%', height: 330, objectFit: 'cover', display: 'block' }} />
              </div>
              <span className="cb-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)' }}></span>
              <div className="fancy-box-contents border-radius-3" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px' }}>
                <div className="fancy-box-header">
                  <span className="cb-subtitle text-uppercase ltr-sp-2 border-radius-3">
                    <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>{ind.title}</p>
                  </span>
                  <p><span style={{ fontSize: 14, color: 'white' }}>{ind.desc}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
