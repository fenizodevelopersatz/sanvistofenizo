import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { subscribeToCartOpenRequests } from '../lib/cart.js'

function formatPrice(value) {
  return `$${value.toLocaleString('en-US')}`
}

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, count, total, removeItem, clear } = useCart()

  // An "Invest Now" click anywhere on the site asks this dropdown to open,
  // so adding a plan gives the user immediate visual confirmation.
  useEffect(() => subscribeToCartOpenRequests(() => setIsOpen(true)), [])

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
          <span className="ld-module-trigger-count header-cart-fragments">{count}</span>
        </span>
        <div className={`ld-module-dropdown collapse${isOpen ? ' show in' : ''}`} id="lqd-cart" aria-expanded={isOpen}>
          <div className="ld-cart-contents">
            <div className="header-quickcart">
              <div className="ld-cart-head flex-wrap justify-content-between">
                <span className="ld-cart-head-txt">
                  Cart <span className="ld-module-trigger-count color-primary">{count}</span>
                </span>
                <span className="ld-module-trigger collapsed" onClick={() => setIsOpen(false)}>
                  <span className="ld-module-trigger-icon">
                    <i className="icon-md-close"></i>
                  </span>
                </span>
              </div>
              <span className="item-count" style={{ display: 'none' }}>{count}</span>

              <div className="ld-cart-products woocommerce-mini-cart cart_list product_list_widget">
                {items.length === 0 ? (
                  <div className="empty">
                    <h3>No products in the cart.</h3>
                  </div>
                ) : (
                  items.map((item) => (
                    <div className="ld-cart-product" key={item.id}>
                      <div className="ld-cart-product-details">
                        <span className="ld-cart-product-name">{item.planName}</span>
                        <span className="ld-cart-product-meta">{item.productName}</span>
                      </div>
                      <span className="ld-cart-product-price">{item.price}</span>
                      <a
                        href="#"
                        className="remove ld-cart-product-remove"
                        role="button"
                        title={`Remove ${item.planName} from cart`}
                        aria-label={`Remove ${item.planName} from cart`}
                        onClick={(event) => {
                          event.preventDefault()
                          removeItem(item.id)
                        }}
                      >
                        &times;
                      </a>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="ld-cart-foot">
                  <div className="ld-cart-total">
                    <span className="ld-cart-total-label">Subtotal:</span>
                    <span className="ld-cart-total-price">{formatPrice(total)}</span>
                  </div>
                  <div className="ld-cart-button">
                    <Link to="/schedule-free-demo" className="btn btn-solid" onClick={() => setIsOpen(false)}>
                      <span>Schedule Demo Tour</span>
                    </Link>
                    <button type="button" className="btn btn-naked ld-cart-clear" onClick={clear}>
                      <span>Clear Cart</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
