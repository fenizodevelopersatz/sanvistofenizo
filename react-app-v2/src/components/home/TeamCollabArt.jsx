import { siteBrand } from '../../data/siteBrand.js'
import './TeamCollabArt.css'

const avatars = [
  { icon: 'fa-user-tie', color: '#2457f5' },
  { icon: 'fa-user-astronaut', color: '#7135e8' },
  { icon: 'fa-user-ninja', color: '#e72ad4' },
  { icon: 'fa-user-graduate', color: '#4338f0' },
  { icon: 'fa-user-gear', color: '#2457f5' },
]

// Replaces a stock photo of unrelated people with a brand-forward, CSS-only
// illustration (no image asset) -- a "team collaborating around the product"
// visual built from the real logo, a fake dashboard card, and abstract
// avatar chips instead of stock photography.
export default function TeamCollabArt() {
  return (
    <div className="cs-team-art" role="img" aria-label="CloneScript's team collaborating around the CloneScript platform">
      <span className="cs-team-art__glow cs-team-art__glow--1" />
      <span className="cs-team-art__glow cs-team-art__glow--2" />

      <div className="cs-team-art__card">
        <div className="cs-team-art__card-head">
          <span className="cs-team-art__dot" />
          <span className="cs-team-art__dot" />
          <span className="cs-team-art__dot" />
        </div>
        <img src={siteBrand.logo} alt={siteBrand.name} className="cs-team-art__logo" />
        <div className="cs-team-art__bars">
          <span style={{ width: '82%' }} />
          <span style={{ width: '58%' }} />
          <span style={{ width: '70%' }} />
        </div>
      </div>

      {avatars.map((avatar, index) => (
        <span
          key={avatar.icon}
          className={`cs-team-art__avatar cs-team-art__avatar--${index + 1}`}
          style={{ background: avatar.color }}
        >
          <i className={`fas ${avatar.icon}`} aria-hidden="true"></i>
        </span>
      ))}
    </div>
  )
}
