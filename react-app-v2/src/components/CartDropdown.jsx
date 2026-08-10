import { useState } from 'react'

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header-module ld-module-to-right font-weight-normal">
      <div className="ld-module-cart ld-module-cart-offcanvas">
        <span
          className={`ld-module-trigger${isOpen ? '' : ' collapsed'}`}
          data-ld-toggle="true"
          aria-controls="lqd-cart"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span className="ld-module-trigger-icon" style={{ color: 'rgb(0, 0, 0)' }}>
            <i className="fa fa-brands fa-opencart"></i>
          </span>
          <span className="ld-module-trigger-count header-cart-fragments">0</span>
        </span>
        <div className={`ld-module-dropdown collapse${isOpen ? ' show in' : ''}`} id="lqd-cart" aria-expanded={isOpen}>
          <div className="ld-cart-contents">
            <div className="header-quickcart">
              <div className="ld-cart-head flex-wrap justify-content-between">
                <span className="ld-cart-head-txt">
                  Cart <span className="ld-module-trigger-count color-primary">0</span>
                </span>
                <span className="ld-module-trigger collapsed" onClick={() => setIsOpen(false)}>
                  <span className="ld-module-trigger-icon">
                    <i className="icon-md-close"></i>
                  </span>
                </span>
              </div>
              <span className="item-count" style={{ display: 'none' }}>0</span>
              <div className="ld-cart-products woocommerce-mini-cart cart_list product_list_widget">
                <div className="empty">
                  <h3>No products in the cart.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
