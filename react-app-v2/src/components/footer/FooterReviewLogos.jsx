const reviewPlatforms = [
  ['google-sangvish.webp', 'Google reviews'],
  ['glassdoor-sangvish.webp', 'Glassdoor reviews'],
  ['trustpilot-sangvish.webp', 'Trustpilot reviews'],
  ['ambitionbox-sangvish.webp', 'AmbitionBox reviews'],
  ['sitejabber-sangvish.webp', 'Sitejabber reviews'],
  ['justdial-sangvish.webp', 'Justdial reviews'],
]

export default function FooterReviewLogos() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h3>Our Client&apos;s Reviews and Ratings Across Platforms</h3>
                  </header>
                  <div className="footer-review-platforms__logos" aria-label="Review platforms">
                    {reviewPlatforms.map(([file, label]) => (
                      <img
                        key={file}
                        src={`/wp-content/uploads/2025/01/${file}`}
                        width="165"
                        height="48"
                        alt={label}
                        loading="eager"
                        decoding="async"
                      />
                    ))}
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
