import { useState } from 'react'
import { useContactForm } from '../../hooks/useContactForm.js'

export default function PdfDownloadCta({ heading, desc }) {
  const [isOpen, setIsOpen] = useState(false)
  const { values, handleChange, handleSubmit, submitted } = useContactForm({ fullname: '', email: '' })

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title">
                    <h3>{heading}</h3>
                    <div className="st-desc">
                      <p><span style={{ color: '#161518' }}>{desc}</span></p>
                    </div>
                  </header>
                  <a href="#download-pdf" className="btn btn-solid btn-sm round btn-bordered border-thin" onClick={(e) => { e.preventDefault(); setIsOpen(true) }}>
                    <span>
                      <span className="btn-txt">Download</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-cloud-arrow-down"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 30, maxWidth: 480, width: '90%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <header className="fancy-title">
              <h6>Fill the Form to Get the Features Document</h6>
              <div className="st-desc">
                <p><span style={{ fontSize: 14 }}>Your Document Will Be Sent Directly to Your Email</span></p>
              </div>
            </header>
            <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round">
              {submitted ? (
                <div className="wpcf7-response-output" role="status">Thanks! We&rsquo;ll send the document to your email shortly.</div>
              ) : (
                <form className="wpcf7-form init" onSubmit={handleSubmit}>
                  <p>
                    <span className="wpcf7-form-control-wrap">
                      <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid" required placeholder="Enter Full Name*" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                    </span>
                  </p>
                  <p>
                    <span className="wpcf7-form-control-wrap">
                      <input className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-fluid" required placeholder="Enter Valid Email Id*" type="email" name="email" value={values.email} onChange={handleChange} />
                    </span>
                  </p>
                  <p>
                    <input className="wpcf7-form-control wpcf7-submit has-spinner btn btn-accent" type="submit" value="Submit" />
                  </p>
                </form>
              )}
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close" style={{ position: 'absolute', top: 10, right: 15, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
    </section>
  )
}
