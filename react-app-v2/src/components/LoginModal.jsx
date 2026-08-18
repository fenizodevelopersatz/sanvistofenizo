import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INITIAL_VALUES = { username: '', password: '' }

// The site has no real accounts/auth backend -- every other CTA (VIP Club,
// Invest Now, the cart) already funnels toward booking a demo, so "login"
// is the same lead-gate pattern: collect the fields, then hand off to the
// Schedule Free Demo page.
export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState(INITIAL_VALUES)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const close = () => {
    setIsOpen(false)
    setValues(INITIAL_VALUES)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    close()
    navigate('/schedule-free-demo')
  }

  return (
    <>
      <div className="header-module">
        <button
          type="button"
          title="my-account"
          className="btn btn-naked btn-icon-left"
          onClick={() => setIsOpen(true)}
        >
          <span>
            <span className="btn-icon"><i className="fas fa-circle-user"></i></span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="lqd-modal"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={close}
        >
          <div
            className="lqd-modal-inner"
            style={{ position: 'relative', background: '#fff', borderRadius: 20, padding: 30, maxWidth: 400, width: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pum-close"
              onClick={close}
              aria-label="Close"
              style={{ position: 'absolute', top: 10, right: 15, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}
            >
              &times;
            </button>
            <header className="fancy-title text-center">
              <h6>Login to Your Account</h6>
              <div className="st-desc">
                <p><span style={{ fontSize: 14 }}>Sign in to book your personalized demo tour</span></p>
              </div>
            </header>
            <div className="lqd-contact-form lqd-contact-form-inputs-round lqd-contact-form-button-round">
              <form className="wpcf7-form init" onSubmit={handleSubmit}>
                <p>
                  <span className="wpcf7-form-control-wrap">
                    <input
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                      required
                      placeholder="Username*"
                      type="text"
                      name="username"
                      autoComplete="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                  </span>
                </p>
                <p>
                  <span className="wpcf7-form-control-wrap">
                    <input
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-fluid"
                      required
                      placeholder="Password*"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </span>
                </p>
                <p>
                  <input className="wpcf7-form-control wpcf7-submit btn btn-accent" type="submit" value="Login" />
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
