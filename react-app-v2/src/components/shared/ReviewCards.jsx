import './ReviewCards.css'

function Stars({ rating }) {
  return (
    <span className="reviewcard__stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="reviewcard__star" aria-hidden="true">
          <i className="fa fa-star reviewcard__star-bg"></i>
          <i
            className="fa fa-star reviewcard__star-fg"
            style={{ width: `${Math.max(0, Math.min(1, rating - n + 1)) * 100}%` }}
          ></i>
        </span>
      ))}
    </span>
  )
}

export default function ReviewCards({ reviews = [] }) {
  return (
    <div className="reviewcard-grid">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="reviewcard"
          style={{ '--rv-bg': r.bg, '--rv-accent': r.accent, '--rv-dot': r.dot }}
        >
          <span className="reviewcard__dot" aria-hidden="true"></span>

          <div className="reviewcard__head">
            <i className="fa fa-solid fa-quote-left reviewcard__mark" aria-hidden="true"></i>
            <Stars rating={r.rating} />
          </div>

          <blockquote className="reviewcard__quote">{r.quote}</blockquote>

          <figcaption className="reviewcard__author">
            <span className="reviewcard__avatar">
              <img src={r.avatar} alt={`${r.name}, ${r.role}`} width="256" height="256" loading="lazy" decoding="async" />
            </span>
            <span className="reviewcard__meta">
              <span className="reviewcard__name">{r.name}</span>
              {r.role ? <span className="reviewcard__role">{r.role}</span> : null}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
