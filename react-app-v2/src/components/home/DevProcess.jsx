import { devProcessSteps } from '../../data/devProcessSteps.js'

function ProcessStep({ step }) {
  return (
    <div className="iconbox iconbox-side iconbox-icon-hover-shadow iconbox-circle iconbox-sm iconbox-heading-sm iconbox-icon-linked" data-plugin-options='{"color":"rgb(51, 51, 51)","hoverColor":"rgb(255, 255, 255)"}' data-shape-border="1" style={{ paddingBottom: 30 }}>
      <div className="iconbox-icon-wrap">
        <span className="iconbox-icon-container">
          <span className="iconbox-icon-hover-bg"></span>
          <i className={step.icon}></i>
        </span>
      </div>
      <div className="contents">
        <h3 className="font-weight-semibold">{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </div>
  )
}

export default function DevProcess() {
  const [left, right] = [devProcessSteps.slice(0, 3), devProcessSteps.slice(3, 6)]

  return (
    <section className="fenizo-process-section vc_section">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40be25f">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Web &amp; App Development Process</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <h3>Behind the Code - Our Proven Development Process</h3>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>
                          At Fenizo, we use a simple and efficient development process to deliver a high-quality website and
                          app tailored to your business demands.
                        </p>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40beff7 vc_row-o-content-middle vc_row-flex">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    {left.map((step, i) => (
                      <ProcessStep step={step} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-4 vc_hidden-sm vc_hidden-xs">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <img
                            src="/wp-content/uploads/2025/10/Web-Devleopment-Process.webp"
                            width="550"
                            height="684"
                            className="vc_single_image-img attachment-full"
                            alt="Web-Devleopment-Process"
                            title="Web-Devleopment-Process"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    {right.map((step, i) => (
                      <ProcessStep step={step} key={i} />
                    ))}
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
