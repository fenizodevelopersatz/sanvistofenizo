import { useEffect, useState } from 'react'
import { dashboardScreenshots } from '../../data/erp/coreModules.js'

export default function DashboardScreenshots() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % dashboardScreenshots.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668890">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>ERP Dashboard Screenshots</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>View the live ERP interface and explore the features designed for everyday business management.</span>
                      </p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="lqd-mockup-device lqd-mockup-imac-style-1 pos-rel" style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
                    <img src="/wp-content/themes/ave/assets/img/mockups/imac/mockup-1.png" alt="iMac" style={{ width: '100%', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '4.5%', left: '13.5%', width: '73%', height: '69%', overflow: 'hidden' }}>
                      <img src={dashboardScreenshots[active]} alt="ERP dashboard screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="carousel-dots" style={{ textAlign: 'center', marginTop: 16 }}>
                    {dashboardScreenshots.map((_, i) => (
                      <button type="button" key={i} className={`dot${i === active ? ' is-selected' : ''}`} aria-label={`Show screenshot ${i + 1}`} onClick={() => setActive(i)}></button>
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
