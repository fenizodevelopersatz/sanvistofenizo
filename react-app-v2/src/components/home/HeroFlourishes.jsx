import './HeroFlourishes.css'

// Rocket (speed/launch) + ascending growth chart, framing the hero from the
// bottom-left/bottom-right per the reference composition -- decorative only,
// hidden on small screens to keep the mobile hero uncluttered.
export default function HeroFlourishes() {
  return (
    <div className="cs-hero-flourish" aria-hidden="true">
      <div className="cs-hero-flourish__rocket">
        <span className="cs-hero-flourish__rocket-glow" />
        <i className="fas fa-rocket" aria-hidden="true"></i>
      </div>
      <div className="cs-hero-flourish__chart">
        <i className="fas fa-arrow-trend-up cs-hero-flourish__arrow" aria-hidden="true"></i>
        <div className="cs-hero-flourish__bars">
          <span style={{ height: '35%' }} />
          <span style={{ height: '55%' }} />
          <span style={{ height: '75%' }} />
          <span style={{ height: '95%' }} />
        </div>
      </div>
    </div>
  )
}
