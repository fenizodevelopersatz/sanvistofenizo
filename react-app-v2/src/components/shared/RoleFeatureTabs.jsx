import { useState } from 'react'

function RoleGroup({ roleKey, role }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id={roleKey} className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="vc_tta-container">
                    <div className="vc_tta vc_general vc_tta-tabs vc_tta-tabs-position-top vc_tta-style-classic vc_tta-shape-rounded vc_tta-o-shape-group vc_tta-color-grey vc_tta-o-slide-fade">
                      <div className="vc_tta-tabs-container">
                        <ul className="vc_tta-tabs-list">
                          {role.tabs.map((t, i) => (
                            <li key={i} className={`vc_tta-tab${activeTab === i ? ' vc_active' : ''}`}>
                              <a href={`#${roleKey}-${i}`} onClick={(e) => { e.preventDefault(); setActiveTab(i) }}>
                                <i className={`vc_tta-icon ${t.icon}`}></i>
                                <span className="vc_tta-title-text">{t.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="vc_tta-panels-container">
                        <div className="vc_tta-panels">
                          <div className="vc_tta-panel vc_active">
                            <div className="vc_tta-panel-body">
                              <div className="wpb_single_image wpb_content_element vc_align_left">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <img src={role.tabs[activeTab].image} width="1440" height="820" className="vc_single_image-img attachment-full" alt={role.tabs[activeTab].title} />
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default function RoleFeatureTabs({ heading, desc, roles }) {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <h3 style={{ textAlign: 'center' }} className="vc_custom_heading">{heading}</h3>
                  {desc && (
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>{desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div id="fixed-menu" className="lqd-custom-menu text-center fixed-menu">
                    <ul className="reset-ul inline-nav menu-items-have-fill">
                      {Object.entries(roles).map(([key, role]) => (
                        <li key={key}><a href={`#${key}`}><i className={`${role.icon} custom-tab-icon`}></i> {role.label}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {Object.entries(roles).map(([key, role]) => (
        <RoleGroup roleKey={key} role={role} key={key} />
      ))}
    </section>
  )
}
