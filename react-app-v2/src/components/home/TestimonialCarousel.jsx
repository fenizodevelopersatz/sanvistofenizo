import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'
import InitialsAvatar from '../shared/InitialsAvatar.jsx'

export default function TestimonialCarousel({ cardBg = '#f9f9f9' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const item = testimonials[active]

  return (
    <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
      <div className="carousel-items row">
        <div className="carousel-item">
          <div className="iconbox iconbox-side text-left iconbox-xl iconbox-heading-md iconbox-icon-image portfolio-customers-mobile" style={{ padding: 20, backgroundColor: cardBg, borderRadius: 10 }}>
            <div className="iconbox-icon-wrap">
              <span className="iconbox-icon-container">
                <InitialsAvatar name={item.name} size={60} />
              </span>
            </div>
            <div className="contents">
              <h3 className="font-weight-semibold">{item.name}</h3>
              {item.location && <p style={{ margin: '-8px 0 8px', fontSize: 13, color: '#8a8a8a' }}>{item.location}</p>}
              <p>
                <span style={{ fontSize: 14 }}>{item.text}</span>
              </p>
              <a href={item.video} className="btn btn-naked btn-gradient fresco btn-icon-left btn-icon-md btn-icon-circle btn-icon-solid btn-icon-ripple">
                <span>
                  <span className="btn-txt">Play Testimonial Video</span>
                  <span className="btn-icon">
                    <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
                    <i className="fas fa-play"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {testimonials.map((t, i) => (
          <button type="button" key={i} className={`dot${i === active ? ' is-selected' : ''}`} aria-label={`Show testimonial ${i + 1}`} onClick={() => setActive(i)}></button>
        ))}
      </div>
    </div>
  )
}
