import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import {
  walletFeatures, securityPoints, walletProcessSteps, techStackItems, faqs, customerReviews,
} from '../data/cryptoWallet/cryptoWalletData.js'

import CryptoWalletHero from '../components/cryptoWallet/CryptoWalletHero.jsx'
import WhatIsCryptoWallet from '../components/cryptoWallet/WhatIsCryptoWallet.jsx'
import WalletTypesShowcase from '../components/cryptoWallet/WalletTypesShowcase.jsx'
import CryptoWalletServicePanels from '../components/cryptoWallet/CryptoWalletServicePanels.jsx'
import StandOutFeaturesGrid from '../components/shared/StandOutFeaturesGrid.jsx'
import WhyChooseChecklist from '../components/shared/WhyChooseChecklist.jsx'
import ProcessSteps from '../components/shared/ProcessSteps.jsx'
import TechStackRow from '../components/shared/TechStackRow.jsx'
import MoneyBackGuarantee from '../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../components/shared/FaqAccordion.jsx'
import ReviewCards from '../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../components/footer/TestimonialRotatorSection.jsx'
import PremiumCta from '../components/shared/PremiumCta.jsx'
import './CryptoWalletPage.css'

export default function CryptoWalletPage() {
  usePageStylesheets(pageStylesheets.cryptoWallet)

  useSeo(
    'Crypto Wallet Development Services | Secure Custodial & Non-Custodial Wallets',
    'Build a secure, scalable crypto wallet with CloneScript — custodial and non-custodial wallets, exchange integration, multi-chain support, security audits, and ongoing maintenance.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section">
          <CryptoWalletHero />
        </section>

        <StandOutFeaturesGrid
          heading="Features of Every CloneScript Wallet"
          subheading="Everything you need to manage, move, and grow digital assets, built into one connected wallet."
          items={walletFeatures}
        />

        <section className="vc_section">
          <WhatIsCryptoWallet />
        </section>

        <section className="vc_section">
          <WalletTypesShowcase />
        </section>

        <WhyChooseChecklist
          heading="Five Layers Between An"
          accentWord="Attacker And The Funds"
          desc="Every layer below works together, so a single point of failure is never enough to put client funds at risk."
          points={securityPoints}
          image="/wp-content/uploads/2025/10/web-development-company-enhanced-securiyt.webp"
          imageAlt="Digital shield and security icon representing layered protection for a crypto wallet"
          color="#4f46e5"
        />

        <MoneyBackGuarantee />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>From First Call to a Wallet in Production</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={walletProcessSteps} />

        <CryptoWalletServicePanels />

        <TechStackRow items={techStackItems} heading="Coins & Networks Your Wallet Can Speak" />

        <FaqAccordion
          heading="Questions We Hear Before Every Wallet Build"
          subheading="Answers to what founders and product teams ask most before starting a wallet build."
          faqs={faqs}
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <h6 style={{ fontWeight: 600 }}>Crypto & Regulatory Disclaimer</h6>
                      <p style={{ color: '#666', fontSize: 14 }}>
                        CloneScript builds custody and wallet software to your specification; we do not provide
                        investment, financial, or legal advice, and we do not act as a licensed money-transmitter,
                        custodian, or exchange operator on your behalf. Clients remain responsible for obtaining any
                        licences, registrations, and legal or compliance review required in their operating
                        jurisdictions before launch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <PremiumCta
          heading="Ready to Build Your Wallet?"
          subheading="Share your requirements and we'll help you build the secure app your business needs."
          buttonText="Get a Quote"
          icon="fa-wallet"
        />
      </div>
    </main>
  )
}
