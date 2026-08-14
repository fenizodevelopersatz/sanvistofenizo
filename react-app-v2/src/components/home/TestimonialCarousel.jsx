import { useEffect, useState } from 'react'
import { testimonials } from '../../data/testimonials.js'
import InitialsAvatar from '../shared/InitialsAvatar.jsx'
import './TestimonialCarousel.css'

const AUTOPLAY_DELAY = 6000

function ArrowIcon({ direction }) {
  const points = direction === 'previous' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TestimonialCarousel({ cardBg = '#f9f9f9' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || testimonials.length < 2) return undefined

    const id = window.setInterval(
      () => setActive((index) => (index + 1) % testimonials.length),
      AUTOPLAY_DELAY,
    )
    return () => window.clearInterval(id)
  }, [])

  const item = testimonials[active]
  const hasVideo = item.video && item.video !== '#'
  const showPrevious = () => setActive((active - 1 + testimonials.length) % testimonials.length)
  const showNext = () => setActive((active + 1) % testimonials.length)

  return (
    <section className="fenizo-testimonial" aria-roledescription="carousel" aria-label="Client testimonials">
      <article className="fenizo-testimonial__card" style={{ backgroundColor: cardBg }} aria-live="polite">
        <div className="fenizo-testimonial__avatar">
          <InitialsAvatar name={item.name} size={60} />
        </div>
        <div className="fenizo-testimonial__content">
          <h3>{item.name}</h3>
          {item.location ? <p className="fenizo-testimonial__role">{item.location}</p> : null}
          <blockquote>{item.text}</blockquote>
          {hasVideo ? (
            <a className="fenizo-testimonial__video" href={item.video} target="_blank" rel="noreferrer">
              <span className="fenizo-testimonial__play" aria-hidden="true">▶</span>
              <span>Play Testimonial Video</span>
            </a>
          ) : null}
        </div>
      </article>

      <div className="fenizo-testimonial__controls">
        <button type="button" className="fenizo-testimonial__arrow" aria-label="Previous testimonial" onClick={showPrevious}>
          <ArrowIcon direction="previous" />
        </button>
        <div className="fenizo-testimonial__dots" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.name}
              className={index === active ? 'is-active' : ''}
              aria-label={`Show testimonial ${index + 1}: ${testimonial.name}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button type="button" className="fenizo-testimonial__arrow" aria-label="Next testimonial" onClick={showNext}>
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  )
}
