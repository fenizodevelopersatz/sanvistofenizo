import './DashboardMockup.css'

// CSS-only fake dashboard UI (topbar + sidebar + stat cards + a logged-in
// user avatar chip) -- no image-generation tool is available, and no real
// screenshot exists yet for this newer product, so this stands in for a
// dashboard/login/user preview per role on the Live Demo tabs.
export default function DashboardMockup({ role, accent, avatarIcon, stats }) {
  return (
    <div className="cs-dash-mock" role="img" aria-label={`${role} dashboard preview`}>
      <div className="cs-dash-mock__topbar">
        <span className="cs-dash-mock__dot" />
        <span className="cs-dash-mock__dot" />
        <span className="cs-dash-mock__dot" />
        <span className="cs-dash-mock__user" style={{ background: accent }}>
          <i className={`fas ${avatarIcon}`} aria-hidden="true"></i>
        </span>
      </div>
      <div className="cs-dash-mock__body">
        <div className="cs-dash-mock__sidebar">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="cs-dash-mock__nav-item" style={i === 0 ? { background: accent } : undefined} />
          ))}
        </div>
        <div className="cs-dash-mock__main">
          <div className="cs-dash-mock__stats">
            {stats.map((stat) => (
              <div className="cs-dash-mock__stat" key={stat.label}>
                <span className="cs-dash-mock__stat-value" style={{ color: accent }}>{stat.value}</span>
                <span className="cs-dash-mock__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="cs-dash-mock__rows">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
