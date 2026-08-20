import './DecorativeBackground.css'

// Sitewide ambient backdrop -- fixed behind all page content (see .cs-decor
// z-index:-1 in the CSS, and the transparent .clonescript-site override in
// CloneScriptDesignSystem.css that lets it show through). Pure CSS/SVG, no
// images, so it stays lightweight and never blocks interaction.
export default function DecorativeBackground() {
  return (
    <div className="cs-decor" aria-hidden="true">
      <span className="cs-decor__orb cs-decor__orb--1" />
      <span className="cs-decor__orb cs-decor__orb--2" />
      <span className="cs-decor__orb cs-decor__orb--3" />
      <span className="cs-decor__orb cs-decor__orb--4" />
      <span className="cs-decor__orb cs-decor__orb--5" />
      <span className="cs-decor__glass" />
      <span className="cs-decor__dots cs-decor__dots--tl" />
      <span className="cs-decor__dots cs-decor__dots--br" />
      <div className="cs-decor__accent cs-decor__accent--1"><span /></div>
      <div className="cs-decor__accent cs-decor__accent--2"><span /></div>
      <div className="cs-decor__accent cs-decor__accent--3"><span /></div>
      <svg className="cs-decor__lines" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,620 C250,520 420,720 720,580 C980,460 1150,620 1490,520" fill="none" stroke="#E72AD4" strokeOpacity="0.14" strokeWidth="2" />
        <path d="M-50,180 C300,90 520,280 820,140 C1050,40 1200,190 1490,110" fill="none" stroke="#7135E8" strokeOpacity="0.12" strokeWidth="2" />
      </svg>
    </div>
  )
}
