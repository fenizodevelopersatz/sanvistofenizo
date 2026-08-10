import { Link } from 'react-router-dom'
import { footerSitemap } from '../../data/footerSitemap.js'

function SitemapLink({ href, label }) {
  if (href === '#') {
    return <a href={href}>{label}</a>
  }
  return <Link to={href}>{label}</Link>
}

export default function FooterSitemap() {
  return (
    <section data-vc-full-width="true" className="vc_section vc_custom_1726227127650 vc_section-has-fill">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d6738">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                    <header className="fancy-title">
                      <h3>Our Best-in-Class Business Solutions</h3>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid vc_custom_1721655678770 liquid-row-shadowbox-6a665a40d6d40 vc_row-has-fill">
        <div className="ld-container container-fluid">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
              <div className="vc_column-inner">
                <div className="wpb_wrapper vc_custom_1721710219815">
                  <div className="wpb_wrapper-inner">
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      {footerSitemap.map((col, i) => (
                        <div className="wpb_column vc_column_container vc_col-sm-2" key={i}>
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_wrapper-inner">
                                <div className="ld-fancy-heading ld-fh-has-fill text-left text-uppercase">
                                  <h4 className="round lqd-highlight-underline lqd-highlight-grow-left">
                                    <span className="ld-fh-txt"> {col.title}</span>
                                  </h4>
                                </div>
                                <ul className="lqd-custom-menu reset-ul custom-li-arrow">
                                  {col.links.map(([href, label], j) => (
                                    <li key={j}>
                                      <SitemapLink href={href} label={label} />
                                    </li>
                                  ))}
                                </ul>
                                <div className="ld-empty-space">
                                  <span className="liquid_empty_space_inner"></span>
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
    </section>
  )
}
