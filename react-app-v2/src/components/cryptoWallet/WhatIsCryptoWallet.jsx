import { walletConcepts } from '../../data/cryptoWallet/cryptoWalletData.js'

export default function WhatIsCryptoWallet() {
  return (
    <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox vc_row-o-content-middle vc_row-flex">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-md-offset-1 vc_col-md-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <div className="ld-fancy-heading text-center">
                    <h2 className="lqd-highlight-underline lqd-highlight-grow-left">
                      <span className="ld-fh-txt"> What Is a <span style={{ color: '#002692' }}>Crypto Wallet?</span></span>
                    </h2>
                  </div>
                  <header className="fancy-title text-center">
                    <div className="st-desc">
                      <p><span style={{ fontWeight: 400 }}>A crypto wallet is software that lets a person or business store, send, and receive digital assets on the blockchain.</span></p>
                      <p><span style={{ fontWeight: 400 }}>It does not hold coins the way a physical wallet holds cash — it holds the cryptographic keys that prove ownership and authorize every transaction.</span></p>
                      <p><span style={{ fontWeight: 400 }}>Every wallet is built around three core concepts:</span></p>
                    </div>
                  </header>
                  <div className="ld-empty-space"><span className="liquid_empty_space_inner"></span></div>
                  <ul className="custom_list_icon" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
                    {walletConcepts.map((concept) => (
                      <li key={concept.term}>
                        <span style={{ fontWeight: 400 }}><strong>{concept.term}</strong> — {concept.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
