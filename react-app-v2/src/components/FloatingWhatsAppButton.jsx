import { siteContact } from '../data/siteContact.js'

export default function FloatingWhatsAppButton() {
  return (
    <div className="float_social">
      <div className="flt-icon">
        <a
          className="whatlink"
          href={`https://api.whatsapp.com/send?phone=${siteContact.whatsappApiNumber}&text=Hello,%20I%20am%20interested%20with%20this%20product`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <span className="btn-icon">
            <i className="fa fa-whatsapp"></i>
          </span>
          <span className="mob_schedule_wa slide-left">
            Chat with us <span style={{ fontSize: 20 }}>👋</span>
          </span>
          <span className="whatsapp-notification">4</span>
        </a>
      </div>
    </div>
  )
}
