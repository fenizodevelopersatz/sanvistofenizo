import { useState } from 'react'
import './CurrencySelector.css'

const currencies = [
  { code: 'USD', label: 'USA dollar', flag: '🇺🇸' },
  { code: 'INR', label: 'Indian Rupee', flag: '🇮🇳' },
]

export default function CurrencySelector() {
  const [selected, setSelected] = useState('USD')

  return (
    <div className="footer-currency-selector" role="radiogroup" aria-label="Currency">
      {currencies.map((c) => (
        <button
          type="button"
          key={c.code}
          className={`footer-currency-selector__option${c.code === selected ? ' is-selected' : ''}`}
          role="radio"
          aria-checked={c.code === selected}
          onClick={() => setSelected(c.code)}
        >
          <span className="footer-currency-selector__flag" aria-hidden="true">{c.flag}</span>
          <span className="footer-currency-selector__text">
            <span className="footer-currency-selector__code">{c.code}</span>
            <span className="footer-currency-selector__label">{c.label}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
