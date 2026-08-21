import './SchoolReviewCards.css'

function Stars({ rating }) {
  return (
    <span className="schoolreview-card__stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="schoolreview-card__star" aria-hidden="true">
          <i className="fa fa-star schoolreview-card__star-bg"></i>
          <i
            className="fa fa-star schoolreview-card__star-fg"
            style={{ width: `${Math.max(0, Math.min(1, rating - n + 1)) * 100}%` }}
          ></i>
        </span>
      ))}
    </span>
  )
}

export default function SchoolReviewCards({ reviews = [] }) {
  return (
    <div className="schoolreview-grid">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="schoolreview-card"
          style={{ '--rv-bg': r.bg, '--rv-accent': r.accent, '--rv-dot': r.dot }}
        >
          <span className="schoolreview-card__dot" aria-hidden="true"></span>

          <div className="schoolreview-card__head">
            <i className="fa fa-solid fa-quote-left schoolreview-card__mark" aria-hidden="true"></i>
            <Stars rating={r.rating} />
          </div>

          <blockquote className="schoolreview-card__quote">{r.quote}</blockquote>

          <figcaption className="schoolreview-card__author">
            <span className="schoolreview-card__avatar">
              <img src={r.avatar} alt={`${r.name}, ${r.role}`} width="256" height="256" loading="lazy" decoding="async" />
            </span>
            <span className="schoolreview-card__meta">
              <span className="schoolreview-card__name">{r.name}</span>
              {r.role ? <span className="schoolreview-card__role">{r.role}</span> : null}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
