import TestimonialCarousel from '../home/TestimonialCarousel.jsx'

export default function SocialProofPanel() {
  return (
    <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-0 vc_col-md-6 vc_col-xs-offset-1 vc_col-xs-10 vc_hidden-xs vc_col-has-fill">
      <div className="vc_column-inner">
        <div className="wpb_wrapper vc_custom_1738575156836">
          <div className="wpb_wrapper-inner">
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
            <div className="wpb_single_image wpb_content_element vc_align_center vc_custom_1726564743253">
              <span style={{ fontSize: 26, fontWeight: 700, color: '#101B48', letterSpacing: 0.5, display: 'inline-block' }}>FENIZO</span>
            </div>
            <div className="wpb_text_column wpb_content_element">
              <div className="wpb_wrapper">
                <div className="banner_wrapper">
                  <div className="banner banner-65734 bottom vert custom-banners-theme-standard custom-banners-theme-standard-white">
                    <img
                      src="/wp-content/uploads/2023/04/price-banner.png"
                      width="1140"
                      height="321"
                      className="attachment-full size-full"
                      alt="VIP pack"
                    />
                    <a className="custom_banners_big_link" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
            <header className="fancy-title text-center">
              <h4 className="lined-alt">
                <i className="line-alt"></i> <i className="fas fa-heart"></i> Trusted By <i className="line-alt"></i>
              </h4>
            </header>
            <div className="wpb_single_image wpb_content_element vc_align_center vc_custom_1726558007980">
              <figure className="wpb_wrapper vc_figure">
                <div className="vc_single_image-wrapper vc_box_border_grey">
                  <img
                    src="/wp-content/uploads/2024/09/Group-2311.png"
                    width="483"
                    height="70"
                    className="vc_single_image-img attachment-large"
                    alt="client logos"
                    title="client logos"
                  />
                </div>
              </figure>
            </div>
            <TestimonialCarousel cardBg="#ffffff" />
            <div className="ld-empty-space">
              <span className="liquid_empty_space_inner"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
