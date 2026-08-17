export default function MoneyBackGuarantee() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div
                className="wpb_wrapper"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  flexWrap: 'wrap',
                  backgroundColor: '#f4fef0',
                  border: '1px solid #4b922e',
                  borderRadius: 15,
                  padding: '30px 40px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: '#4b922e',
                    color: '#fff',
                    fontSize: 28,
                  }}
                >
                  <i className="fa fa-solid fa-shield-halved"></i>
                </span>
                <header className="fancy-title" style={{ flex: 1, minWidth: 220 }}>
                  <h2>100% Money Back Guaranteed</h2>
                  <div className="st-desc">
                    <p><span style={{ color: '#222222', fontSize: 14 }}>If our product doesn&rsquo;t work well we&rsquo;ll refund 100% of your money within 7 days.</span></p>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
