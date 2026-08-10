import Reveal from '../shared/Reveal.jsx'

export default function ZillowHero() {
  return (
    <section className="vc_row wpb_row vc_row-fluid sv_first_row liquid-row-shadowbox">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-10 text-center">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <Reveal as="div" className="wpb_wrapper-inner" duration={1.2}>
                  <div className="iconbox iconbox-inline iconbox-heading-xs" style={{ justifyContent: 'center' }}>
                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className="fa fa-solid fa-wand-sparkles"></i></span></div>
                    <h3 className="font-weight-semibold">AI-Powered</h3>
                  </div>
                  <div className="ld-fancy-heading text-center">
                    <h1 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt">
                        <span style={{ color: '#002692' }}>Zillow Clone</span> Best Real Estate App Solution
                      </span>
                    </h1>
                  </div>
                  <div className="wpb_text_column wpb_content_element">
                    <div className="wpb_wrapper">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 400 }}>Zillow Clone lets you build a 100% customizable and scalable real estate platform packed with robust features, which enable users to rent, buy, and sell properties.</span>
                      </p>
                    </div>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h4 className="lqd-highlight-underline lqd-highlight-grow-left" data-text-rotator="true">
                      <span className="ld-fh-txt">
                        {' '}
                        <span className="txt-rotate-keywords">
                          <span className="keyword active" style={{ color: 'rgb(255, 87, 87)' }}>Modern UI/UX</span>
                          <span className="keyword" style={{ color: 'rgb(87, 161, 255)' }}>Secure Platform</span>
                          <span className="keyword" style={{ color: 'rgb(0, 214, 53)' }}>Fast Performance</span>
                          <span className="keyword" style={{ color: 'rgb(210, 71, 204)' }}>100 % Customizable</span>
                        </span>
                      </span>
                    </h4>
                  </div>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <a href="#demo" className="btn btn-solid btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">Live Demo</span>
                      <span className="btn-icon"><i className="fa fa-regular fa-eye"></i></span>
                    </span>
                  </a>
                  <a href="#prices" className="btn btn-default btn-sm round btn-bordered border-thin" data-localscroll="true">
                    <span>
                      <span className="btn-txt">View Prices</span>
                      <span className="btn-icon"><i className="fa fa-solid fa-dollar-sign"></i></span>
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-1"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_wrapper-inner"></div></div></div></div>
        </div>
      </div>
    </section>
  )
}
