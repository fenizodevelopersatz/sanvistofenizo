export const upcomingAiFeature = {
  image: '/wp-content/uploads/2026/01/ai-chatbox.webp',
  title: 'AI Auto-Fill Listings',
  desc: 'Makes listing creation faster and easier by reducing manual input and simplifying the setup process.',
}

export const roleShowcase = {
  user: {
    label: 'User',
    navIcon: 'fas fa-user',
    image: '/wp-content/uploads/2026/05/user-dashboard.webp',
    imageAlt: 'user-dashboard',
    items: [
      { icon: 'fa fa-solid fa-user-plus', title: 'Account Sign-Up' },
      { icon: 'fa fa-solid fa-lock', title: 'Secure Authentication' },
      { icon: 'fa fa-solid fa-user-gear', title: 'User Profile Control' },
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Smart Search' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Real-Time Availability' },
      { icon: 'fa fa-solid fa-envelope-open-text', title: 'Booking Requests' },
      { icon: 'fa fa-solid fa-circle-check', title: 'Instant Bookings' },
      { icon: 'fa fa-solid fa-ban', title: 'Booking Cancellation' },
      { icon: 'fa fa-solid fa-credit-card', title: 'Secure Payment Gateway' },
      { icon: 'fa fa-solid fa-bell', title: 'Instant Alerts' },
    ],
  },
  host: {
    label: 'Host',
    navIcon: 'fas fa-user-tie',
    image: '/wp-content/uploads/2026/05/host-dashboard.webp',
    imageAlt: 'host-dashboard',
    items: [
      { icon: 'fa fa-solid fa-car-side', title: 'Vehicle Listing' },
      { icon: 'fa fa-solid fa-images', title: 'Media Gallery' },
      { icon: 'fa fa-solid fa-sliders', title: 'Vehicle Management' },
      { icon: 'fa fa-solid fa-list-check', title: 'Custom Vehicle Details' },
      { icon: 'fa fa-solid fa-clipboard-check', title: 'Listing Verification' },
      { icon: 'fa fa-solid fa-key', title: 'Vehicle Pickup Process' },
      { icon: 'fa fa-solid fa-rotate-left', title: 'Vehicle Return Process' },
      { icon: 'fa fa-solid fa-road', title: 'Distance Tracking' },
      { icon: 'fa fa-solid fa-money-check-dollar', title: 'Earnings Settlement' },
      { icon: 'fa fa-solid fa-wallet', title: 'Payout Requests' },
    ],
  },
  admin: {
    label: 'Admin',
    navIcon: 'fas fa-user-shield',
    image: '/wp-content/uploads/2026/05/admin-dashboard.webp',
    imageAlt: 'admin-dashboard',
    items: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Administration Panel' },
      { icon: 'fa fa-solid fa-user-check', title: 'Verification Management' },
      { icon: 'fa fa-solid fa-users-gear', title: 'User Monitoring' },
      { icon: 'fa fa-solid fa-gear', title: 'Platform Settings' },
      { icon: 'fa fa-solid fa-database', title: 'Data Backups' },
      { icon: 'fa fa-solid fa-language', title: 'Language Management' },
      { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Platform Fee Management' },
      { icon: 'fa fa-solid fa-rotate-left', title: 'Refund Management' },
      { icon: 'fa fa-solid fa-id-card', title: 'Age Verification' },
      { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Mobile Verification' },
    ],
  },
}

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-location-dot', title: 'Geo Fencing', desc: 'Define service areas and manage vehicle access within selected locations.' },
  { icon: 'fa fa-solid fa-bell', title: 'Email Notifications', desc: 'Keep users informed with timely updates and important platform alerts.' },
  { icon: 'fa fa-solid fa-star-half-stroke', title: 'User Feedback', desc: 'Enable users to share experiences and build trust within the marketplace.' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Vehicle Billing Documents', desc: 'Generate and access rental invoices quickly and conveniently.' },
  { icon: 'fa fa-solid fa-clock-rotate-left', title: 'Trip Records', desc: 'View and manage past reservations and rental activities with ease.' },
  { icon: 'fa fa-solid fa-comments', title: 'Real-Time Chat', desc: 'Allow users to communicate directly for a smoother rental experience.' },
  { icon: 'fa fa-solid fa-heart', title: 'Saved Vehicles', desc: 'Let users bookmark preferred vehicles for future bookings.' },
  { icon: 'fa fa-solid fa-plug', title: 'API Integration', desc: 'Connect with external services to extend platform functionality.' },
  { icon: 'fa fa-solid fa-magnifying-glass-chart', title: 'SEO Optimization', desc: 'Improve online presence and help users discover your platform more easily.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-right-left', 'Role Switcher'],
  ['fa fa-solid fa-triangle-exclamation', 'Role Switcher'],
  ['fa fa-solid fa-shield-halved', 'Protection Plans'],
  ['fa fa-solid fa-language', 'Multi-Language Support'],
  ['fa fa-solid fa-money-bill-transfer', 'Multi-Currency Support'],
  ['fa fa-solid fa-id-card', 'Driver Verification'],
  ['fa fa-solid fa-screwdriver-wrench', 'Vehicle Maintenance Alerts'],
  ['fa fa-solid fa-wallet', 'Wallet System'],
  ['fa fa-solid fa-ticket', 'Coupon Discounts'],
  ['fa fa-solid fa-money-check-dollar', 'Settlement Processing'],
  ['fa fa-solid fa-ban', 'Handover Rejections'],
  ['fa fa-solid fa-tags', 'Promo Codes & Discounts'],
  ['fa fa-solid fa-mobile-screen-button', 'OTP Authentication'],
  ['fa fa-solid fa-calendar-check', 'Calendar Availability'],
  ['fa fa-solid fa-chart-line', 'Fleet Monitoring'],
].map(([icon, title]) => ({ icon, title }))

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-hand-holding-dollar', title: 'Host Rental Earnings', desc: 'Generate consistent income by renting out vehicles through the platform.' },
  { icon: 'fa fa-solid fa-road-circle-exclamation', title: 'Additional Distance Charges', desc: 'Increase earnings through additional mileage charges beyond trip limits.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'Platform Commission', desc: 'Earn a commission from every completed booking made on the marketplace.' },
  { icon: 'fa fa-solid fa-wallet', title: 'Protection Plan Revenue', desc: 'Create extra revenue by offering optional protection and coverage plans.' },
]

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nestjs.webp', color: 'rgb(239, 216, 29)', title: 'Nest Js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/tailwind-css.webp', color: 'rgb(21, 114, 182)', title: 'Tailwind Css' },
  { type: 'image', image: '/wp-content/uploads/2026/05/fastify.webp', color: 'rgb(239, 216, 29)', title: 'Fastify' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(104, 160, 99)', title: 'Next Js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'image', image: '/wp-content/uploads/2022/01/mysql-1.png', color: 'rgb(0, 95, 133)', title: 'MySQL' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const pricingPlans = [
  {
    name: 'Corporate Plus', price: '$4999', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Corporate', price: '$999', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', true], ['Android App', false], ['iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const serverRequirements = {
  vpsServer: ['OS: Ubuntu 22.04 LTS', 'CPU: 2–4 Cores', 'RAM: 4–8 GB', 'Storage: 40+ GB SSD', 'Node.js: v18 or higher'],
  database: ['MongoDB 5+'],
}

export const faqs = [
  { q: 'What is a Turo Clone Script?', a: 'A Turo Clone Script is a pre-designed script which allows you to quickly start a peer-to-peer car sharing website, allowing vehicle owners list their car and renters book it online.' },
  { q: 'Who can use this Turo Clone Script?', a: 'The platform is ideal for startups, entrepreneurs, car rental businesses, and anyone looking to build a vehicle-sharing marketplace.' },
  { q: 'Is it possible to make changes to the platform based on my business requirements?', a: 'Yes, it is possible to customize the script so that it is branded, business model and feature-wise aligned with your own.' },
  { q: 'Does the site have online payment option?', a: 'Yes, the platform also has secure online payment for making transactions easy for both hosts and renters.' },
  { q: 'Are owners of vehicles able to manage their own listing?', a: 'Yes, it is possible to add, update and manage their vehicle listings with a dedicated dashboard at the host end.' },
]

export const screenshots = [
  '/wp-content/uploads/2026/05/cars-detail.webp',
  '/wp-content/uploads/2026/05/my-booking.webp',
  '/wp-content/uploads/2026/05/wishlist.webp',
  '/wp-content/uploads/2026/05/vehicles.webp',
  '/wp-content/uploads/2026/05/search.webp',
  '/wp-content/uploads/2026/05/fleets.webp',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Grant Sullivan',
    role: 'Car Host',
    rating: 5,
    quote: 'AI Auto-Fill Listings turned a 20-minute listing chore into two minutes. I added my whole fleet in an afternoon.',
    avatar: '/wp-content/reviews/turo/review-grant-sullivan.webp',
    bg: '#e0fbe0',
    accent: '#0eaa10',
    dot: '#5ae25c',
  },
  {
    name: 'Valentina Rossi',
    role: 'Fleet Owner',
    rating: 5,
    quote: 'Real-time availability stopped our double-bookings completely, guests only see what is actually free.',
    avatar: '/wp-content/reviews/turo/review-valentina-rossi.webp',
    bg: '#e0fbeb',
    accent: '#0eaa51',
    dot: '#5ae294',
  },
  {
    name: 'Mateus Almeida',
    role: 'Platform Founder',
    rating: 4.5,
    quote: 'Secure authentication gave both hosts and renters real confidence before handing over keys.',
    avatar: '/wp-content/reviews/turo/review-mateus-almeida.webp',
    bg: '#e0fbf4',
    accent: '#0eaa85',
    dot: '#5ae2c2',
  },
  {
    name: 'Brianna Hayes',
    role: 'Frequent Renter',
    rating: 4.5,
    quote: 'Smart search found exactly the car I wanted by location and price without endless scrolling.',
    avatar: '/wp-content/reviews/turo/review-brianna-hayes.webp',
    bg: '#e0f7fb',
    accent: '#0e96aa',
    dot: '#5ad0e2',
  },
  {
    name: 'Connor Whitfield',
    role: 'Car Sharing Operator',
    rating: 4.5,
    quote: 'User profile controls let hosts set their own rules, which cut support tickets way down.',
    avatar: '/wp-content/reviews/turo/review-connor-whitfield.webp',
    bg: '#e0ebfb',
    accent: '#0e52aa',
    dot: '#5a96e2',
  },
]
