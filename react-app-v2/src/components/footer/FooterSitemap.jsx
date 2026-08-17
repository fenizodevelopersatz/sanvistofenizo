import { Link } from 'react-router-dom'
import { footerSitemap } from '../../data/footerSitemap.js'

const sitemapTitleStyles = [
  ['rgba(27, 221, 69, 0.3)', '#000000'],
  ['rgba(221, 120, 27, 0.3)', '#000000'],
  ['rgba(92, 177, 255, 0.3)', '#101b48'],
  ['rgba(173, 134, 255, 0.3)', '#101b48'],
  ['rgba(255, 152, 189, 0.3)', '#101b48'],
  ['rgba(0, 26, 255, 0.3)', '#101b48'],
  ['rgba(199, 255, 0, 0.49)', '#000000'],
  ['rgba(182, 221, 27, 0.3)', '#000000'],
  ['rgba(83, 221, 27, 0.3)', '#101b48'],
  ['rgba(206, 67, 255, 0.3)', '#101b48'],
  ['rgba(221, 62, 27, 0.3)', '#000000'],
  ['rgba(221, 159, 27, 0.3)', '#000000'],
  ['rgba(206, 67, 255, 0.3)', '#101b48'],
  ['rgba(74, 212, 255, 0.3)', '#101b48'],
]

const styledSitemap = footerSitemap.map((category, index) => ({
  ...category,
  titleBackground: sitemapTitleStyles[index]?.[0] ?? 'transparent',
  titleColor: sitemapTitleStyles[index]?.[1] ?? '#101b48',
}))

const sitemapColumnGroups = [
  [0, 6],
  [1, 5],
  [2, 8, 10],
  [3, 7],
  [4, 13],
  [9, 11, 12],
].map((indexes) => indexes.map((index) => styledSitemap[index]).filter(Boolean))

function SitemapLink({ href, label }) {
  if (href === '#') {
    return <a href={href}>{label}</a>
  }
  return <Link to={href}>{label}</Link>
}

export default function FooterSitemap() {
  return (
    <section data-vc-full-width="true" className="fenizo-business-solutions vc_section vc_custom_1726227127650 vc_section-has-fill">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40d6738">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-empty-space" style={{ height: 50 }}>
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
                      {sitemapColumnGroups.map((column, i) => (
                        <div className="wpb_column vc_column_container vc_col-sm-2" key={i}>
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="fenizo-sitemap-column wpb_wrapper-inner">
                                {column.map((category) => (
                                  <div
                                    className="fenizo-sitemap-category"
                                    key={category.title}
                                    style={{
                                      '--fenizo-footer-title-bg': category.titleBackground,
                                      '--fenizo-footer-title-color': category.titleColor,
                                    }}
                                  >
                                    <div className="ld-fancy-heading ld-fh-has-fill text-left text-uppercase">
                                      <h4 className="round lqd-highlight-underline lqd-highlight-grow-left">
                                        <span className="ld-fh-txt"> {category.title}</span>
                                      </h4>
                                    </div>
                                    <ul className="lqd-custom-menu reset-ul custom-li-arrow">
                                      {category.links.map(([href, label], j) => (
                                        <li key={j}>
                                          <SitemapLink href={href} label={label} />
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
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
