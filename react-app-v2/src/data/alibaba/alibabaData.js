export const aiFeatures = [
  { image: '/wp-content/uploads/2026/06/ai-search-history.webp', title: 'AI Search History', desc: 'Easily revisit your previous AI searches whenever you need.' },
  { image: '/wp-content/uploads/2026/06/ai-chatbot.webp', title: 'AI Chatbot', desc: 'Provide instant support and help users find answers quickly.' },
  { image: '/wp-content/uploads/2026/06/ai-query-summary.webp', title: 'AI Query Summary', desc: 'View quick summaries of sourcing searches and inquiries.' },
  { image: '/wp-content/uploads/2026/06/ai-rfq-assistant.webp', title: 'AI RFQ Assistant', desc: 'Get help creating clear and professional RFQ requests in less time.' },
  { image: '/wp-content/uploads/2026/06/ai-market-insights.webp', title: 'AI Market Insights', desc: 'Access valuable market data to support smarter business decisions.' },
  { image: '/wp-content/uploads/2026/06/ai-usage-tracking.webp', title: 'AI Usage Tracking', desc: 'Keep track of your available AI usage and activity limits.' },
]

export const roleTabs = {
  buyer: {
    label: 'Buyer',
    icon: 'fas fa-user',
    tabs: [
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Advanced Search', image: '/wp-content/uploads/2026/05/advanced-search.webp' },
      { icon: 'fa fa-solid fa-boxes-stacked', title: 'Product Catalog', image: '/wp-content/uploads/2026/05/product-catalog.webp' },
      { icon: 'fa fa-solid fa-comments', title: 'Live Chat', image: '/wp-content/uploads/2026/05/live-chat.webp' },
      { icon: 'fa fa-solid fa-truck-fast', title: 'Order Tracking', image: '/wp-content/uploads/2026/05/order-tracking.webp' },
      { icon: 'fa fa-solid fa-heart', title: 'Wishlist', image: '/wp-content/uploads/2026/05/Wishlist-1.webp' },
      { icon: 'fa fa-solid fa-file-invoice', title: 'Order Invoices', image: '/wp-content/uploads/2026/06/order-invoice.webp' },
      { icon: 'fa fa-solid fa-envelope-open-text', title: 'Inquiry Center', image: '/wp-content/uploads/2026/05/inquiry-center.webp' },
    ],
  },
  supplier: {
    label: 'Supplier',
    icon: 'fas fa-user-tie',
    tabs: [
      { icon: 'fa fa-solid fa-chart-line', title: 'Supplier Dashboard', image: '/wp-content/uploads/2026/06/supplier-dashboard.webp' },
      { icon: 'fa fa-solid fa-building-user', title: 'Profile Management', image: '/wp-content/uploads/2026/06/profile-management.webp' },
      { icon: 'fa fa-solid fa-box-open', title: 'Product Listings', image: '/wp-content/uploads/2026/06/product-listing.webp' },
      { icon: 'fa fa-solid fa-file-signature', title: 'RFQ Marketplace', image: '/wp-content/uploads/2026/06/RFQ-Marketplace.webp' },
      { icon: 'fa fa-solid fa-truck-fast', title: 'Order Tracking', image: '/wp-content/uploads/2026/06/order-tracking.webp' },
      { icon: 'fa fa-regular fa-comments', title: 'Real-Time Chat', image: '/wp-content/uploads/2026/06/real-time-chat.webp' },
      { icon: 'fa fa-solid fa-wallet', title: 'Earnings Wallet', image: '/wp-content/uploads/2026/06/earning-wallet.webp' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    tabs: [
      { icon: 'fa fa-solid fa-gauge', title: 'Admin Dashboard', image: '/wp-content/uploads/2026/05/admin-dashboard-1.webp' },
      { icon: 'fa fa-solid fa-user-gear', title: 'User Management', image: '/wp-content/uploads/2026/05/user-management.webp' },
      { icon: 'fa fa-solid fa-circle-check', title: 'Product Approval', image: '/wp-content/uploads/2026/05/product-approval.webp' },
      { icon: 'fa fa-regular fa-folder-open', title: 'Category Management', image: '/wp-content/uploads/2026/05/category-management.webp' },
      { icon: 'fa fa-solid fa-crown', title: 'Subscription Management', image: '/wp-content/uploads/2026/05/subscription-management.webp' },
      { icon: 'fa fa-solid fa-credit-card', title: 'Payment Gateways', image: '/wp-content/uploads/2026/05/payment-gateways.webp' },
      { icon: 'fa fa-solid fa-envelope-circle-check', title: 'Email Settings', image: '/wp-content/uploads/2026/05/email-settings.webp' },
    ],
  },
}

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/06/socket-io.png', color: 'rgb(97, 218, 251)', title: 'Socket IO' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next Js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'image', image: '/wp-content/uploads/2022/01/mysql-1.png', color: 'rgb(0, 95, 133)', title: 'MySQL' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-user-shield', title: 'Role-Based Access Control', desc: 'Give the right access to the right people.' },
  { icon: 'fa fa-solid fa-language', title: 'Multilingual Support', desc: 'Support multiple languages across the platform.' },
  { icon: 'fa fa-solid fa-percent', title: 'Commission Settings', desc: 'Set how commissions are calculated across the marketplace.' },
  { icon: 'fa fa-solid fa-star', title: 'Ratings & Reviews', desc: 'Let buyers share their experience and feedback.' },
  { icon: 'fa fa-solid fa-right-to-bracket', title: 'Social Authentication', desc: 'Allow quick sign-in using popular social accounts.' },
  { icon: 'fa fa-solid fa-truck', title: 'Shipping Management', desc: 'Handle delivery options and shipping charges with ease.' },
  { icon: 'fa fa-solid fa-palette', title: 'Website Customization', desc: 'Make the platform match your brand identity.' },
  { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Multi-Currency Support', desc: 'Help users buy and sell in their preferred currency.' },
  { icon: 'fa fa-solid fa-circle-check', title: 'Profile Verification', desc: 'Verify business profiles to build buyer confidence.' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Receive complete installation assistance for a quick and hassle-free launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Brand Personalization', desc: 'Customize your marketplace logo, colors, and content to reflect your business identity.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'Get expert assistance to help you launch and manage your marketplace successfully.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-shield-halved', 'Secure Login'],
  ['fa fa-solid fa-ban', 'Spam Protection'],
  ['fa fa-solid fa-key', 'OTP Verification'],
  ['fa fa-solid fa-bell', 'Live Notifications'],
  ['fa fa-solid fa-money-bill-transfer', 'Currency Conversion'],
  ['fa fa-solid fa-envelope-circle-check', 'SMTP Integration'],
  ['fa fa-solid fa-file-arrow-down', 'Invoice Download'],
  ['fa fa-solid fa-clock-rotate-left', 'Order Timeline'],
  ['fa fa-solid fa-address-book', 'Address Book'],
  ['fa fa-solid fa-wallet', 'Payout Management'],
  ['fa fa-solid fa-receipt', 'Tax Management'],
  ['fa fa-solid fa-truck-fast', 'Order Updates'],
  ['fa fa-solid fa-list-check', 'Advanced Listings'],
  ['fa fa-solid fa-file-signature', 'RFQ Management'],
  ['fa fa-solid fa-paper-plane', 'Quote Submission'],
].map(([icon, title]) => ({ icon, title }))

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android Webview App', true], ['iOS Webview App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1499', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android Webview App', false], ['IOS Webview App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made B2B marketplace solution designed for buyers and suppliers.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic marketplace solutions with limited B2B functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What is Alibaba Clone?', a: 'Alibaba Clone is an ecommerce software solution which is already pre-built to let the ecommerce entrepreneurs build an Alibaba like B2B ecommerce platform. Start your Alibaba business with little or no investment and generate all kinds of profits.' },
  { q: 'How to reach our support team?', a: 'Once you purchase our products, if you have any doubts or queries you can reach our support team via email to clarify your doubts.' },
  { q: 'It is possible to claim full ownership of your clone script/themes once purchased?', a: 'Yes, once you purchase it, you will completely own your website.' },
  { q: 'What is 100% source code?', a: 'You get the complete source code of your website so you can customize it based on your desired and business needs. The script/themes are not encrypted files.' },
  { q: 'Can i resell the script/Theme from CloneScript?', a: 'No, Once you purchase an alibaba clone script or any themes from us, you don’t have to resell or distribute them. If you violate you are liable for illegal activities.' },
  { q: 'How Single and Multi Domain Licence Differs?', a: 'A single-domain license allows usage for only one business on a single domain. For example, you can use it exclusively on mywebsite.com.' },
]

export const serverRequirements = {
  vpsServer: ['OS: Ubuntu 22.04 LTS', 'CPU: 2–4 Cores', 'RAM: 4–8 GB', 'Storage: 40+ GB SSD', 'Node.js: v18 or higher'],
  database: ['MongoDB 5+'],
}
