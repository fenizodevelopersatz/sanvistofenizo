import { reviewPlatforms } from '../../data/reviewPlatforms.js'

export default function ReviewPlatforms() {
  const [row1, row2] = [reviewPlatforms.slice(0, 3), reviewPlatforms.slice(3, 6)]

  return (
    <section className="vc_section vc_custom_1726292198593 vc_section-has-fill">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40ed78f">
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
                      <h3>Our Client&rsquo;s Reviews and Ratings Across Platforms</h3>
                    </header>
                    <div className="ld-empty-space">
                      <span className="liquid_empty_space_inner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40edf65">
        <div className="ld-container container">
          <div className="row ld-row">
            {[row1, row2].map((row, r) => (
              <div className="wpb_column vc_column_container vc_col-sm-6" key={r}>
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        {row.map((p, i) => (
                          <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-4" key={i}>
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_wrapper-inner">
                                  <div className="wpb_single_image wpb_content_element vc_align_center">
                                    <figure className="wpb_wrapper vc_figure">
                                      <a href={p.href} target="_blank" rel="noreferrer" className="vc_single_image-wrapper vc_box_border_grey">
                                        <img src={p.image} width={p.width} height={p.height} className="vc_single_image-img attachment-full" alt={p.alt} title="" />
                                      </a>
                                    </figure>
                                  </div>
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
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
