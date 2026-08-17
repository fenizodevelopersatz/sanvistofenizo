import Reveal from './Reveal.jsx'

export default function RevenueBenefits({ heading = 'Revenue Benefits', subheading, items, image, color = 'rgb(0, 38, 146)' }) {
  const [left, right] = [items.slice(0, Math.ceil(items.length / 2)), items.slice(Math.ceil(items.length / 2))]
  const cardStyle = { padding: 20, backgroundColor: '#FFFFFF', borderRadius: 15 }

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <Reveal>
                    <div className="ld-fancy-heading text-center sv_text_super">
                      <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> <span style={{ color }}>{heading} </span></span>
                      </h2>
                    </div>
                    {subheading && (
                      <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                          <p style={{ textAlign: 'center' }}>{subheading}</p>
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div className="wpb_column vc_column_container vc_col-sm-3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {left.map((f, i) => (
              <Reveal direction="left" delay={0.1 * i} key={i}>
                <div className="iconbox iconbox-shadow" style={{ ...cardStyle, color }}>
                  <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className={f.icon} style={{ color }}></i></span></div>
                  <div className="contents">
                    <h3>{f.title}</h3>
                    <p style={{ textAlign: 'center' }}><span style={{ fontSize: 12 }}>{f.desc}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {image && (
            <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
              <img src={image} alt="revenue benefits" style={{ maxWidth: '100%' }} loading="eager" decoding="async" />
            </div>
          )}
          <div className="wpb_column vc_column_container vc_col-sm-3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {right.map((f, i) => (
              <Reveal direction="right" delay={0.1 * i} key={i}>
                <div className="iconbox iconbox-shadow" style={{ ...cardStyle, color }}>
                  <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className={f.icon} style={{ color }}></i></span></div>
                  <div className="contents">
                    <h3>{f.title}</h3>
                    <p style={{ textAlign: 'center' }}><span style={{ fontSize: 12 }}>{f.desc}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
