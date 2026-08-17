const points = [
  ['Simplify business operations with our ', 'Business Management Software.'],
  ['Reduce Manual Work with ', 'Simple & Efficient Workflows.'],
  ['Access Business Information from a ', 'Centralized System.'],
  ['Receive ', 'Reliable Support', ' for your ERP Solution.'],
]

export default function WhyChooseErp() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a665f000 erp-why-section">
      <div className="ld-container container">
        <div className="row ld-row erp-why-layout">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-left sv_text_top">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Why Choose Our<span style={{ color: '#002692' }}> ERP SaaS?</span></span>
                    </h2>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'left' }}>
                        Our ERP software brings inventory, sales, purchasing, billing, and inventory management together in one
                        business management software, helping businesses stay organized and manage daily operations more
                        effectively.
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  {points.map((parts, i) => (
                    <div className="ld-fancy-heading text-left sv_border_why_choose_us" key={i}>
                      <p className="lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt">
                          <i className="fa-solid fa-circle-check" style={{ color: 'black' }}></i>{' '}
                          {parts.length === 2 ? (
                            <>{parts[0]}<span style={{ color: '#002692', fontWeight: 'bold' }}>{parts[1]}</span></>
                          ) : (
                            <>{parts[0]}<span style={{ color: '#002692', fontWeight: 'bold' }}>{parts[1]}</span>{parts[2]}</>
                          )}
                        </span>
                      </p>
                    </div>
                  ))}
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-xs">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img src="/wp-content/5.png" width="650" height="583" className="vc_single_image-img attachment-full" alt="Girl giving thumbs up" title="girl-thumbs-up" loading="lazy" decoding="async" />
                      </div>
                    </figure>
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
