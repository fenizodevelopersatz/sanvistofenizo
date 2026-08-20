import './RocketLoader.css'

// Original hand-built rocket (nose/body/window/fins/flame), not an icon-font
// glyph -- the window clips in the real favicon mark so it reads as
// "CloneScript" launching, not a generic rocket. Sways + flies bottom-to-top
// on a loop inside .cs-rocket-loader__stage; the stage's overflow:hidden is
// what makes it read as launching through a viewport rather than just an
// icon sliding around.
export default function RocketLoader() {
  return (
    <div className="cs-rocket-loader" aria-hidden="true">
      <div className="cs-rocket-loader__stage">
        <span className="cs-rocket-loader__puff cs-rocket-loader__puff--1" />
        <span className="cs-rocket-loader__puff cs-rocket-loader__puff--2" />
        <span className="cs-rocket-loader__puff cs-rocket-loader__puff--3" />
        <div className="cs-rocket-loader__sway">
          <svg className="cs-rocket-loader__ship" viewBox="0 0 120 210" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cs-rocket-accent" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#e83ebc" />
              </linearGradient>
              <linearGradient id="cs-rocket-flame" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="55%" stopColor="#ff9b3f" />
                <stop offset="100%" stopColor="#ff5f6d" />
              </linearGradient>
              <clipPath id="cs-rocket-window-clip">
                <circle cx="60" cy="88" r="17" />
              </clipPath>
            </defs>

            <g className="cs-rocket-loader__flame">
              <path d="M60,158 C50,172 46,186 60,206 C74,186 70,172 60,158 Z" fill="url(#cs-rocket-flame)" />
              <path d="M60,160 C55,170 53,180 60,194 C67,180 65,170 60,160 Z" fill="#fff3b0" opacity="0.85" />
            </g>

            <path d="M38,122 L12,160 L38,150 Z" fill="url(#cs-rocket-accent)" />
            <path d="M82,122 L108,160 L82,150 Z" fill="url(#cs-rocket-accent)" />

            <path
              d="M60,8 C46,8 40,34 39,52 L39,140 C39,150 48,158 60,158 C72,158 81,150 81,140 L81,52 C80,34 74,8 60,8 Z"
              fill="#ffffff"
              stroke="url(#cs-rocket-accent)"
              strokeWidth="2.5"
            />

            <circle cx="60" cy="88" r="20" fill="#101b48" />
            <image href="/favicon.png" x="43" y="71" width="34" height="34" clipPath="url(#cs-rocket-window-clip)" />
            <circle cx="60" cy="88" r="17" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.85" />
            <path d="M50,76 a17,17 0 0 1 10,-5" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.55" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
