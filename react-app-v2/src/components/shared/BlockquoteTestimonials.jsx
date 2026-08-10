import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'
import InitialsAvatar from './InitialsAvatar.jsx'

export default function BlockquoteTestimonials({ count = 3, offset = 0 }) {
  const items = testimonials.slice(offset, offset + count)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % items.length), 6000)
    return () => clearInterval(id)
  }, [items.length])

  const item = items[active]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                    <div className="carousel-items row">
                      <div className="carousel-item">
                        <div className="testimonial testimonial-whole-filled testimonial-whole-shadowed testimonial-details-top testimonial-avatar-shadowed text-left testimonial-details-sm testimonial-avatar-sm testimonial-avatar-topleft avatar-fix">
                          <div className="testimonial-quote">
                            <blockquote>
                              <p><span style={{ fontSize: 14, color: 'black', textAlign: 'left' }}>{item.text}</span></p>
                            </blockquote>
                          </div>
                          <div className="testimonial-details">
                            <figure className="avatar">
                              <InitialsAvatar name={item.name} size={48} />
                            </figure>
                            <div className="testimonial-info">
                              <h5>{item.name}</h5>
                              {item.location && <span style={{ fontSize: 12, color: '#8a8a8a' }}>{item.location}</span>}
                            </div>
                            <ul className="star-rating">
                              {[1, 2, 3, 4, 5].map((n) => (
                                <li key={n}><i className="fa fa-star"></i></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-dots">
                      {items.map((t, i) => (
                        <button type="button" key={i} className={`dot${i === active ? ' is-selected' : ''}`} aria-label={`Show testimonial ${i + 1}`} onClick={() => setActive(i)}></button>
                      ))}
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
