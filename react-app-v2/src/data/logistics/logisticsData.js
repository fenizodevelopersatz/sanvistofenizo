export const coreModules = [
  { icon: 'fa fa-solid fa-truck-fast', title: 'Fleet & Rider Management', desc: 'Onboard riders and vehicles, assign zones, and manage availability from one dashboard.' },
  { icon: 'fa fa-solid fa-location-crosshairs', title: 'Real-Time GPS Tracking', desc: 'Track every shipment and rider live on the map from pickup to final delivery.' },
  { icon: 'fa fa-solid fa-route', title: 'Route Optimization', desc: 'Automatically plan the fastest multi-stop routes to cut delivery time and fuel cost.' },
  { icon: 'fa fa-solid fa-clipboard-list', title: 'Order & Dispatch Management', desc: 'Receive, assign, and monitor orders with automated or manual dispatch rules.' },
  { icon: 'fa fa-solid fa-warehouse', title: 'Warehouse & Hub Management', desc: 'Manage inbound and outbound stock across multiple warehouses and sorting hubs.' },
  { icon: 'fa fa-solid fa-file-signature', title: 'Proof of Delivery', desc: 'Capture digital signatures and delivery photos to confirm every drop-off.' },
  { icon: 'fa fa-solid fa-truck-ramp-box', title: 'Multi-Vehicle Support', desc: 'Support bikes, vans, and trucks with vehicle-specific routing and capacity rules.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'COD & Digital Payments', desc: 'Collect cash on delivery or accept digital payments, reconciled automatically.' },
  { icon: 'fa fa-solid fa-bell', title: 'Customer Notifications', desc: 'Keep customers informed with live status updates by SMS, email, and app push.' },
]

export const standardFeatures = [
  { icon: 'fa fa-solid fa-user-shield', title: 'Role-Based Access Control' },
  { icon: 'fa fa-solid fa-code-branch', title: 'Multi-Branch & Hub Support' },
  { icon: 'fa fa-solid fa-map-location-dot', title: 'Live Rider Tracking' },
  { icon: 'fa fa-solid fa-robot', title: 'Automated Dispatch Assignment' },
  { icon: 'fa fa-solid fa-comments', title: 'In-App Chat Support' },
  { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Dedicated Rider App' },
  { icon: 'fa fa-solid fa-language', title: 'Multi-Language Support' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Automated Invoicing' },
  { icon: 'fa fa-solid fa-database', title: 'Automated Data Backup' },
  { icon: 'fa fa-solid fa-wallet', title: 'Rider Payout & Earnings' },
  { icon: 'fa fa-solid fa-chart-column', title: 'Delivery Analytics Dashboard' },
  { icon: 'fa fa-solid fa-clock-rotate-left', title: 'Route History Logs' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-shield-halved', 'Secure Login'],
  ['fa fa-solid fa-key', 'OTP Verification'],
  ['fa fa-solid fa-bell', 'Push Notifications'],
  ['fa fa-solid fa-signature', 'Digital Signature Capture'],
  ['fa fa-solid fa-qrcode', 'Barcode / QR Scanning'],
  ['fa fa-solid fa-rotate-left', 'Return & Refund Management'],
  ['fa fa-solid fa-star', 'Ratings & Reviews'],
  ['fa fa-solid fa-map-pin', 'Zone-Based Pricing'],
  ['fa fa-solid fa-calendar-check', 'Scheduled Deliveries'],
  ['fa fa-solid fa-triangle-exclamation', 'SOS / Emergency Alert'],
  ['fa fa-solid fa-money-bill-transfer', 'Multi-Currency Support'],
  ['fa fa-solid fa-clock', 'Delivery Time Slots'],
  ['fa fa-solid fa-address-book', 'Address Book'],
  ['fa fa-solid fa-gas-pump', 'Fuel & Expense Tracking'],
  ['fa fa-solid fa-plug', 'Third-Party API Integrations'],
].map(([icon, title]) => ({ icon, title }))

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/06/socket-io.png', color: 'rgb(97, 218, 251)', title: 'Socket IO' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'icon', icon: 'fa fa-solid fa-location-crosshairs', color: 'rgb(234, 88, 12)', title: 'Live GPS Tracking' },
  { type: 'icon', icon: 'fa fa-brands fa-aws', color: 'rgb(255, 153, 0)', title: 'AWS' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Receive complete installation assistance for a quick and hassle-free launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Fleet & Zone Setup', desc: 'Configure your delivery zones, vehicle types, and pricing rules from day one.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'Get expert assistance to help you launch and manage your logistics platform successfully.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2299', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Rider Android App', true], ['Rider iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1299', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Rider Android App', false], ['Rider iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made logistics and delivery solution built for riders, hubs, and customers.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic delivery solutions with limited logistics-specific functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What is the Logistics Service App?', a: 'Logistics Service App is a ready-to-launch delivery management software that brings order dispatch, rider tracking, warehouse management, and customer notifications together on one platform. Start your own logistics or courier business with little or no development investment.' },
  { q: 'How to reach our support team?', a: 'Once you purchase our products, if you have any doubts or queries you can reach our support team via email to clarify your doubts.' },
  { q: 'Is it possible to claim full ownership of your clone script/themes once purchased?', a: 'Yes, once you purchase it, you will completely own your website.' },
  { q: 'What is 100% source code?', a: 'You get the complete source code of your website so you can customize it based on your desired and business needs. The script/themes are not encrypted files.' },
  { q: 'Can I resell the script/theme from CloneScript?', a: 'No, once you purchase the Logistics Service App or any theme from us, you don’t have to resell or distribute them. If you violate this you are liable for illegal activities.' },
  { q: 'How do Single and Multi Domain License differ?', a: 'A single-domain license allows usage for only one business on a single domain. For example, you can use it exclusively on mylogistics.com.' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Harriet Solano',
    role: 'Fleet Operations Manager',
    rating: 5,
    quote: 'Real-time GPS tracking means we stop fielding where-is-my-delivery calls. Customers can just see it for themselves.',
    avatar: '/wp-content/reviews/logistics/review-harriet-solano.webp',
    bg: '#e0fafb',
    accent: '#0ea9aa',
    dot: '#5ae1e2',
  },
  {
    name: 'Deepak Suri',
    role: 'Warehouse Director',
    rating: 4.5,
    quote: 'Warehouse and hub management finally talks to dispatch. We cut a full step out of every order.',
    avatar: '/wp-content/reviews/logistics/review-deepak-suri.webp',
    bg: '#e0effb',
    accent: '#0e68aa',
    dot: '#5aa9e2',
  },
  {
    name: 'Anke Vermeulen',
    role: 'Logistics Founder',
    rating: 5,
    quote: 'Route optimization alone paid for the platform in fuel savings within the first quarter.',
    avatar: '/wp-content/reviews/logistics/review-anke-vermeulen.webp',
    bg: '#e0e6fb',
    accent: '#0e34aa',
    dot: '#5a7be2',
  },
  {
    name: 'Julian Ferreira',
    role: 'Dispatch Lead',
    rating: 4.5,
    quote: 'Proof of delivery with photo capture ended nearly every damage dispute we used to have.',
    avatar: '/wp-content/reviews/logistics/review-julian-ferreira.webp',
    bg: '#e3e0fb',
    accent: '#210eaa',
    dot: '#6b5ae2',
  },
  {
    name: 'Priyanka Rao',
    role: 'Supply Chain Manager',
    rating: 4.5,
    quote: 'Fleet and rider management gives us visibility we never had with spreadsheets. Onboarding new riders takes minutes now.',
    avatar: '/wp-content/reviews/logistics/review-priyanka-rao.webp',
    bg: '#efe0fb',
    accent: '#650eaa',
    dot: '#a65ae2',
  },
]
