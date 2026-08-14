import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Ms. Zemira',
    location: 'Online retailer',
    image: '/wp-content/uploads/2024/04/3.png',
    text: 'Starting my online store was tough, but then I discovered the CloneScript ERP platform. It has been a lifesaver—from setting up my shop to handling inventory—and now I am seeing sales!',
  },
  {
    name: 'Mr. Jaxon',
    location: 'Business owner',
    image: '/wp-content/uploads/2024/04/6.png',
    text: 'Their business platform was user-friendly and feature-packed. It helped me create a successful operation with the tools my team needs at an affordable cost.',
  },
  {
    name: 'Mr. Henry',
    location: 'Operations manager',
    image: '/wp-content/uploads/2024/04/5.png',
    text: 'Launching and managing our online business was a breeze with CloneScript. We can connect daily operations, customers, and reporting while the business keeps growing.',
  },
]

export default function BlockquoteTestimonials() {
  const items = testimonials
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % items.length), 6000)
    return () => clearInterval(id)
  }, [items.length])

  const visibleItems = [items[active], items[(active + 1) % items.length]]

  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox-6a665a664e1c6 erp-testimonials-section">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                    <div className="carousel-items erp-testimonial-grid">
                      {visibleItems.map((item, index) => (
                      <div className="carousel-item" key={`${item.name}-${active}-${index}`}>
                        <div className="testimonial testimonial-whole-filled testimonial-whole-shadowed testimonial-details-top testimonial-avatar-shadowed text-left testimonial-details-sm testimonial-avatar-sm testimonial-avatar-topleft avatar-fix">
                          <div className="testimonial-quote">
                            <blockquote>
                              <p><span style={{ fontSize: 14, color: 'black', textAlign: 'left' }}>{item.text}</span></p>
                            </blockquote>
                          </div>
                          <div className="testimonial-details">
                            <figure className="avatar">
                              <img src={item.image} width="54" height="54" alt={item.name} loading="lazy" decoding="async" />
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
                      ))}
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
