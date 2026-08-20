import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { megaMenuColumns } from '../../data/megaMenu.js'
import './ProductFinder.css'

const allProducts = megaMenuColumns.flat().filter((product) => product.enabled)

export default function ProductFinder() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allProducts
    return allProducts.filter(
      (product) => product.title.toLowerCase().includes(q) || product.subtitle.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <section className="cs-finder vc_row wpb_row vc_row-fluid">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>Find Your Product in Seconds</h2>
                    <div className="st-desc">
                      <p style={{ textAlign: 'center' }}>Search across all {allProducts.length}+ ready-made scripts and apps.</p>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="cs-finder__search">
          <i className="fas fa-search" aria-hidden="true"></i>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search e.g. Uber, Airbnb, Marketplace, School..."
            aria-label="Search products"
          />
          {query && (
            <button type="button" className="cs-finder__clear" onClick={() => setQuery('')} aria-label="Clear search">
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="cs-finder__empty">No products match &ldquo;{query}&rdquo;. Try a different search term.</p>
        ) : (
          <div className="cs-finder__grid">
            {filtered.map((product) => (
              <Link key={product.id} to={product.link} className="cs-finder__item" style={{ background: product.gradient }}>
                <span className="cs-finder__icon"><i className={product.icon} aria-hidden="true"></i></span>
                <span className="cs-finder__text">
                  <span className="cs-finder__title">{product.title}</span>
                  <span className="cs-finder__subtitle">{product.subtitle}</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
