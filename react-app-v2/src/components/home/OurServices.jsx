import { ourServicesItems } from '../../data/ourServices.js'
import { useInView } from '../../hooks/useInView.js'

function ServiceCard({ service }) {
  const [ref, isInView] = useInView()
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-4 vc_col-xs-offset-1 vc_col-xs-10 vc_col-has-fill">
      <div className="vc_column-inner">
        <div
          className="wpb_wrapper vc_custom_1745393448857"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(150px)',
            transition: 'opacity 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s, transform 1.6s cubic-bezier(0.23,1,0.32,1) 0.25s',
          }}
        >
          <div className="wpb_wrapper-inner">
            <div className="iconbox iconbox-inline iconbox-heading-xs" style={{ color: '#006fff', marginBottom: 0 }}>
              <div className="iconbox-icon-wrap">
                <span className="iconbox-icon-container">
                  <i className="far fa-check-circle"></i>
                </span>
              </div>
              <h3 className="font-weight-semibold">{service}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurServices() {
  return (
    <section className="vc_section vc_custom_1745486374572">
      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40a963b">
        <div className="ld-container container">
          <div className="row ld-row">
            <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className="ld-fancy-heading ld-fh-has-fill text-center">
                      <p className="circle lqd-highlight-underline lqd-highlight-grow-left">
                        <span className="ld-fh-txt"> Services</span>
                      </p>
                    </div>
                    <header className="fancy-title text-center">
                      <h2>Our Services</h2>
                      <div className="st-desc">
                        <p style={{ textAlign: 'center' }}>
                          Fenizo offers a wide range of services from web development to ready-made clone scripts, which can
                          be tailored to meet your business needs. Our services are designed to help you launch your business
                          quickly and scale efficiently.
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

      <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a40aa6b7">
        <div className="ld-container container">
          <div className="row ld-row">
            {ourServicesItems.map((service, i) => (
              <ServiceCard service={service} key={i} />
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
