import Reveal from './Reveal.jsx'
import './StandOutFeaturesGrid.css'

export default function StandOutFeaturesGrid({ heading, subheading, items, color = 'rgb(0, 38, 146)' }) {
  const cardStyle = {
    color,
    padding: '12% 10%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    border: `1px solid ${color}`,
  }

  return (
    <section className="stand-out-features-section vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <Reveal>
                    <div className="ld-fancy-heading text-center">
                      <h2>{heading}</h2>
                    </div>
                    <div className="ld-fancy-heading text-center">
                      <h6 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> {subheading}</span>
                      </h6>
                    </div>
                  </Reveal>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="stand-out-features-grid">
          {items.map((f, i) => (
            <Reveal delay={0.1 * (i % 3)} className="stand-out-features-grid__card hover-flash-card" key={i}>
              <div className="iconbox text-left iconbox-shadow-hover iconbox-heading-xs premium-icon-box" style={cardStyle}>
                <div className="iconbox-icon-wrap">
                  <span className="iconbox-icon-container"><i className={f.icon} style={{ color }}></i></span>
                </div>
                <div className="contents">
                  <h3 className="font-weight-semibold">{f.title}</h3>
                  <p><span style={{ color: '#1a1a1a', fontSize: 15 }}>{f.desc}</span></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
