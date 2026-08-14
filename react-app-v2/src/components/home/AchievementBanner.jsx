import { Link } from 'react-router-dom'
import { useInView } from '../../hooks/useInView.js'

export default function AchievementBanner() {
  const [imgRef, imgInView] = useInView()

  return (
    <section className="fenizo-reveal-x-row vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40a6e93 vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-fancy-heading ld-fh-has-fill text-left">
                    <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> Achievement</span>
                    </p>
                  </div>
                  <header className="fancy-title">
                    <h3>Milestones That Matter</h3>
                    <div className="st-desc">
                      <p>
                        Our greatest milestones are made possible by our clients&rsquo; trust, with each achievement reflecting
                        the value we provide and the platforms we build.
                      </p>
                    </div>
                  </header>
                  <Link to="/schedule-free-demo" target="_blank" className="btn btn-solid btn-md circle btn-bordered border-thin btn-icon-circle" style={{ marginRight: 15 }}>
                    <span>
                      <span className="btn-txt">Schedule now</span>
                      <span className="btn-icon"><i className="far fa-calendar-alt"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div
                className="wpb_wrapper"
                ref={imgRef}
                style={{
                  marginTop: '10%',
                  opacity: imgInView ? 1 : 0,
                  transform: imgInView ? 'translateX(0)' : 'translateX(150px)',
                  transition: 'opacity 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s, transform 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s',
                }}
              >
                <div className="wpb_wrapper-inner">
                  <div className="wpb_single_image wpb_content_element vc_align_left">
                    <figure className="wpb_wrapper vc_figure">
                      <div className="vc_single_image-wrapper vc_box_border_grey">
                        <img
                          src="/assets/images/fenizo/achievement-stats.svg"
                          width="650"
                          height="583"
                          className="vc_single_image-img attachment-full"
                          alt="Fenizo Technologies: serving 20+ countries with 24+ happy clients worldwide"
                          title="fenizo-achievements"
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
        </div>
      </div>
    </section>
  )
}
