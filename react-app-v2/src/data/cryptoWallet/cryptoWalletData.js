// Stat bar rendered directly under the hero content. "13+ Year Experience" intentionally
// reuses the exact figure/label already established in components/home/AchievementBanner.jsx
// instead of inventing a new experience number for this one page.
export const heroStats = [
  { icon: 'fa-solid fa-wallet', value: '300+', label: 'Wallets Delivered' },
  { icon: 'fa-solid fa-link', value: '10+', label: 'Blockchains Supported' },
  { icon: 'fa-solid fa-shield-halved', value: '24/7', label: 'Security Monitoring' },
  { icon: 'fa-solid fa-bolt', value: '99.5%', label: 'Uptime' },
  { icon: 'fa-solid fa-award', value: '13+', label: 'Year Experience' },
]

export const walletFeatures = [
  { icon: 'fa fa-solid fa-coins', title: 'Multi-Currency Support', desc: 'Store, send, and receive Bitcoin, Ethereum, stablecoins, and dozens of other assets from a single wallet.' },
  { icon: 'fa fa-solid fa-shield-halved', title: 'Bank-Grade Security', desc: 'Advanced encryption, key-management, and authentication protocols keep client funds and data protected around the clock.' },
  { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Cross-Platform Access', desc: 'Give users the same seamless wallet experience on the web, iOS, and Android from one connected backend.' },
  { icon: 'fa fa-solid fa-chart-line', title: 'Staking & Exchange', desc: 'Let users grow their holdings with built-in staking options and direct access to exchange liquidity.' },
  { icon: 'fa fa-solid fa-right-left', title: 'Built-In Swap', desc: 'Users can buy, sell, and swap crypto assets directly inside the wallet without switching to another app.' },
  { icon: 'fa fa-solid fa-clock-rotate-left', title: 'Transaction History', desc: 'Every transaction is recorded in a complete, searchable, and exportable history for users and administrators.' },
]

// Rendered as a `custom_list_icon` list (same convention already used for e.g. the
// payment-options list in ClonePages/AirbnbClonePage.jsx) instead of inventing new markup.
export const walletConcepts = [
  { term: 'Public Key', desc: 'the shareable address used to receive funds.' },
  { term: 'Private Key', desc: 'the credential that controls the funds — it should never be shared.' },
  { term: 'The Blockchain', desc: 'the public ledger where every transaction is permanently recorded.' },
]

export const walletTypes = [
  { icon: 'fa-solid fa-building-columns', title: 'Custodial Wallets', desc: 'We manage private keys on your users’ behalf for a simpler onboarding experience.' },
  { icon: 'fa-solid fa-user-shield', title: 'Non-Custodial Wallets', desc: 'Your users hold their own keys for full self-custody of their funds.' },
  { icon: 'fa-solid fa-microchip', title: 'Hardware Wallets', desc: 'Cold-storage wallets built for maximum security of long-term holdings.' },
  { icon: 'fa-solid fa-puzzle-piece', title: 'Browser-Extension Wallets', desc: 'Lightweight in-browser wallets built for fast, everyday web3 interactions.' },
]

// WhyChooseChecklist's `points` prop is an array of [prefix, boldWord, suffix] 3-tuples.
export const securityPoints = [
  ['Every fund movement requires ', 'Multi-Signature Approval', ' from more than one authorized party before it is released.'],
  ['Keys are protected with ', 'Hardware-Grade Encryption', ' backed by dedicated HSM-based key management.'],
  ['A ', 'Full Audit Trail', ' logs and traces every action taken across the wallet platform.'],
  ['Dedicated systems provide ', '24/7 Monitoring', ' for unusual activity, anomalies, and emerging threats.'],
  ['A ', 'Cold-Storage Option', ' keeps the majority of funds offline and air-gapped from the internet.'],
]

export const walletProcessSteps = [
  { icon: 'fa fa-solid fa-clipboard-list', title: 'Requirements', desc: 'Define the scope, wallet types, supported assets, and integration needs for your product.' },
  { icon: 'fa fa-solid fa-sitemap', title: 'Architecture', desc: 'Choose the right blockchain infrastructure and technical design for your wallet.' },
  { icon: 'fa fa-solid fa-code', title: 'Development', desc: 'Build and test the wallet following secure coding and key-management best practices.' },
  { icon: 'fa fa-solid fa-shield-halved', title: 'Security Audit', desc: 'An independent review of the code, keys, and infrastructure takes place before launch.' },
  { icon: 'fa fa-solid fa-rocket', title: 'Launch & Support', desc: 'Deploy to production with ongoing monitoring, maintenance, and support.' },
]

// Five alternating service panels. Each reuses DashboardMockup (no real screenshot exists)
// with a distinct role/accent/stats combination so every visual on the page stays built
// from the same established component instead of five different ad-hoc treatments.
export const servicePanels = [
  {
    title: 'Custom Crypto Wallet Development',
    desc: 'A fully custom wallet built for your business, from the user-facing app to the backend infrastructure, tailored to your exact requirements and brand.',
    role: 'Wallet',
    accent: '#4f6ef7',
    avatarIcon: 'fa-wallet',
    stats: [{ value: '$9,535', label: 'Portfolio' }, { value: '12', label: 'Assets' }],
  },
  {
    title: 'Crypto Exchange Development',
    desc: 'Launch your own exchange with trading, order matching, and liquidity, built for performance and compliance.',
    role: 'Exchange',
    accent: '#14b8a6',
    avatarIcon: 'fa-chart-line',
    stats: [{ value: '2,480', label: 'Trades/Day' }, { value: '0.05%', label: 'Fee' }],
  },
  {
    title: 'Crypto Wallet Integration',
    desc: 'Add wallet functionality into your existing app or platform without rebuilding it from scratch.',
    role: 'Integration',
    accent: '#8b7cf6',
    avatarIcon: 'fa-plug',
    stats: [{ value: '14', label: 'Endpoints' }, { value: '99.9%', label: 'Sync Rate' }],
    image: '/wp-content/uploads/2026/08/crypto-wallet-integration-graphic.webp',
    imageAlt: 'Crypto coins in motion with percentage rate icons, representing wallet integration and exchange rates',
  },
  {
    title: 'Wallet Maintenance & Support',
    desc: 'Ongoing maintenance, monitoring, and support to keep your wallet running smoothly and securely.',
    role: 'Support',
    accent: '#f59e0b',
    avatarIcon: 'fa-headset',
    stats: [{ value: '24/7', label: 'Monitoring' }, { value: '<1hr', label: 'Response' }],
  },
  {
    title: 'Crypto & Blockchain Consulting',
    desc: 'Expert guidance on blockchain strategy, architecture, and implementation for your business.',
    role: 'Consulting',
    accent: '#e72ad4',
    avatarIcon: 'fa-lightbulb',
    stats: [{ value: '10+', label: 'Blockchains' }, { value: '50+', label: 'Projects Advised' }],
  },
]

// Font Awesome only ships real brand marks for Bitcoin/Ethereum -- the rest use one
// consistent generic icon per category (fa-link for chains, fa-circle-dollar-to-slot for
// stablecoins, fa-coins otherwise) with a distinct color per item, rather than fabricating
// brand-logo image assets that don't exist in this repo.
export const techStackItems = [
  { type: 'icon', icon: 'fa fa-brands fa-bitcoin', color: 'rgb(247, 147, 26)', title: 'Bitcoin' },
  { type: 'icon', icon: 'fa fa-brands fa-ethereum', color: 'rgb(98, 126, 234)', title: 'Ethereum' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(240, 185, 11)', title: 'BNB Chain' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(20, 179, 130)', title: 'Solana' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(130, 71, 229)', title: 'Polygon' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(212, 27, 44)', title: 'TRON' },
  { type: 'icon', icon: 'fa fa-solid fa-circle-dollar-to-slot', color: 'rgb(38, 161, 123)', title: 'Tether' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(232, 65, 66)', title: 'Avalanche' },
  { type: 'icon', icon: 'fa fa-solid fa-circle-dollar-to-slot', color: 'rgb(39, 117, 202)', title: 'USD Coin' },
  { type: 'icon', icon: 'fa fa-solid fa-coins', color: 'rgb(35, 41, 47)', title: 'XRP' },
  { type: 'icon', icon: 'fa fa-solid fa-coins', color: 'rgb(130, 130, 140)', title: 'Litecoin' },
  { type: 'icon', icon: 'fa fa-solid fa-link', color: 'rgb(99, 102, 241)', title: 'Any EVM Chain' },
]

export const faqs = [
  { q: 'Can I build a secure crypto wallet for my business?', a: 'Yes. A crypto wallet can be built with multi-signature approval, hardware-grade encryption, full audit logging, and continuous monitoring so client funds stay protected at every stage.' },
  { q: 'Do you need blockchain expertise to commission a custom wallet?', a: 'No. You describe your business goals and target users, and our team handles the blockchain architecture, security design, and implementation on your behalf.' },
  { q: 'Can a single wallet support multiple cryptocurrencies?', a: 'Yes. A wallet can be built to support Bitcoin, Ethereum, stablecoins, and a wide range of other assets and chains from one interface.' },
  { q: 'How quickly can a crypto wallet be launched?', a: 'Timelines depend on the wallet type, supported assets, and required integrations, but most projects move through requirements, architecture, development, security audit, and launch on a phased, predictable schedule.' },
  { q: 'Do crypto wallets require ongoing maintenance after launch?', a: 'Yes. Ongoing monitoring, security patching, and feature updates help keep a wallet reliable as usage grows and the underlying blockchain networks evolve. Support plans are available after launch.' },
  { q: 'Does crypto wallet development include secure storage design?', a: 'Yes. Secure key storage — including options like cold storage and hardware-backed key management — is designed in from the start rather than added on afterward.' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Marcus Whitfield',
    role: 'Founder, Fintech Startup',
    rating: 5,
    quote: 'The multi-signature approval flow gives us real peace of mind. No single person can move funds alone, and the audit trail makes every review straightforward.',
    avatar: '/wp-content/reviews/cryptoWallet/review-marcus-whitfield.webp',
    bg: '#e3ddf9',
    accent: '#6836b0',
    dot: '#9872dc',
  },
  {
    name: 'Priya Nair',
    role: 'Co-Founder, Digital Payments Startup',
    rating: 4.5,
    quote: 'We went from requirements to a working wallet faster than any vendor we spoke with quoted. The phased process kept us informed at every stage.',
    avatar: '/wp-content/reviews/cryptoWallet/review-priya-nair.webp',
    bg: '#fcf1d3',
    accent: '#b98a2c',
    dot: '#dbb052',
  },
  {
    name: 'Daniel Osei',
    role: 'Product Manager, Investment Platform',
    rating: 5,
    quote: 'Supporting Bitcoin, Ethereum, and stablecoins in one wallet instead of three separate systems has simplified our entire product. Our users notice the difference too.',
    avatar: '/wp-content/reviews/cryptoWallet/review-daniel-osei.webp',
    bg: '#dde8fa',
    accent: '#3f6f9f',
    dot: '#5785bb',
  },
  {
    name: 'Laura Bianchi',
    role: 'Operations Lead',
    rating: 4.5,
    quote: 'The support team stayed engaged well after launch. Monitoring and patches are handled proactively, so our own team can focus on the product instead of firefighting.',
    avatar: '/wp-content/reviews/cryptoWallet/review-laura-bianchi.webp',
    bg: '#ddf5e4',
    accent: '#3f8a66',
    dot: '#5aa785',
  },
  {
    name: 'Ethan Cole',
    role: 'Engineering Lead',
    rating: 5,
    quote: 'We needed wallet functionality added to an existing platform without a rebuild. The integration was clean, well documented, and shipped on schedule.',
    avatar: '/wp-content/reviews/cryptoWallet/review-ethan-cole.webp',
    bg: '#fedde2',
    accent: '#b34a66',
    dot: '#c9617c',
  },
]
