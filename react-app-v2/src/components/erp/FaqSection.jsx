import { useState } from 'react'
import { erpFaqs } from '../../data/erp/coreModules.js'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const [tab, setTab] = useState('faq')

  const requirements = [
    'PHP Above 8.1',
    'MySQL - 4.x & 5.x',
    'PDO PHP Extension',
    'OpenSSL PHP Extension',
    'Mbstring PHP Extension',
    'XML PHP Extension',
    'Tokenizer PHP Extension',
  ]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a663200 erp-faq-section">
      <div className="ld-container container">
        <div className="row ld-row erp-faq-heading">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <h3>Have Doubts? Get Answers Right Here</h3>
            <p>Clear all your doubts about our ERP Software with our extensive FAQ section.</p>
          </div>
        </div>

        <div className="erp-faq-tabs" role="tablist" aria-label="ERP support information">
          <button type="button" role="tab" aria-selected={tab === 'faq'} className={tab === 'faq' ? 'active' : ''} onClick={() => setTab('faq')}>FAQ</button>
          <button type="button" role="tab" aria-selected={tab === 'requirements'} className={tab === 'requirements' ? 'active' : ''} onClick={() => setTab('requirements')}>SERVER REQUIREMENTS</button>
        </div>

        {tab === 'faq' ? <div className="row ld-row erp-faq-content" role="tabpanel">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  {erpFaqs.map((faq, i) => (
                    <div className={`vc_do_toggle vc_toggle vc_toggle_simple vc_toggle_color_black vc_toggle_size_sm${openIndex === i ? ' vc_toggle_active' : ''}`} key={i}>
                      <button type="button" className="vc_toggle_title" aria-expanded={openIndex === i} onClick={() => setOpenIndex((current) => current === i ? null : i)}>
                        <h5 style={{ fontSize: 18, color: '#111111', textAlign: 'left' }} className="vc_custom_heading">{faq.q}</h5>
                        <i className="vc_toggle_icon"></i>
                      </button>
                      {openIndex === i && (
                        <div className="vc_toggle_content">
                          <p><span style={{ fontWeight: 400 }}>{faq.a}</span></p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> : (
          <div className="erp-server-panel" role="tabpanel">
            <img src="/wp-content/uploads/2024/12/image-778.webp" width="520" height="390" alt="ERP server requirements" loading="lazy" decoding="async" />
            <div>
              <h3>Server Requirements</h3>
              <p>Use the following environment to install and run the ERP platform reliably.</p>
              <ul>
                {requirements.map((requirement) => <li key={requirement}><i className="fa fa-check" aria-hidden="true"></i>{requirement}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
