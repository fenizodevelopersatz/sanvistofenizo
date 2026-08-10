import { pricingPlans } from '../../data/erp/coreModules.js'

export default function PricingPlans() {
  return (
    <section id="prices" className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a668d000">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2 style={{ textAlign: 'center' }} className="vc_custom_heading">Pick Price Plan</h2>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ld-row">
          {pricingPlans.map((plan, i) => (
            <div className="wpb_column vc_column_container vc_col-sm-6" key={i}>
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="wpb_wrapper-inner">
                    <div className={`pricing-table pricing-table-agency business${plan.featured ? ' featured native-business-plus' : ' native-business'}`}>
                      {plan.featured && (
                        <span className="pricing-table-featured-label font-weight-bold text-uppercase ltr-sp-25"><span>Popular</span></span>
                      )}
                      <div className="pricing-table-header">
                        <h5>{plan.name}</h5>
                        <p className="pricing">{plan.price}</p>
                      </div>
                      <div className="pricing-table-body">
                        <ul style={{ textAlign: 'left' }}>
                          {plan.features.map(([label, included], j) => (
                            <li key={j} className={included ? (j === 0 ? 'bold' : '') : 'no'}>
                              <i className={included ? 'fa fa-check' : 'fa fa-close'}></i> {label}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pricing-table-footer">
                        <a href="#" className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-icon-left">
                          <span>
                            <span className="btn-txt">Invest Now</span>
                            <span className="btn-icon"><i className="fa fa-brands fa-opencart"></i></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
