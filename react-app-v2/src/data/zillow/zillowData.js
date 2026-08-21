export const aiFeatures = [
  { image: '/wp-content/uploads/2026/06/ai-property-recommendation.webp', title: 'AI Property Recommendations', desc: 'Discover properties that closely match your preferences and requirements.' },
  { image: '/wp-content/uploads/2026/06/ai-chatbot-1.webp', title: 'AI Real Estate Chatbot', desc: 'Get instant answers to your real estate questions anytime instantly.' },
  { image: '/wp-content/uploads/2026/06/ai-description-generator.webp', title: 'AI-Powered Descriptions', desc: 'Create clear and engaging property descriptions within seconds.' },
  { image: '/wp-content/uploads/2026/06/ai-neighbourhood.png', title: 'AI Neighborhood Insights', desc: 'Explore local amenities, connectivity, and community highlights nearby.' },
]

export const roleTabs = {
  user: {
    label: 'User',
    icon: 'fas fa-user',
    tabs: [
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Property Search Filters', image: '/wp-content/uploads/2026/04/property-search.webp' },
      { icon: 'fa fa-solid fa-bell', title: 'Notification System', image: '/wp-content/uploads/2026/04/notifications.webp' },
      { icon: 'fa fa-solid fa-heart', title: 'Wishlist & Saved Properties', image: '/wp-content/uploads/2026/04/wishlist.webp' },
      { icon: 'fa fa-solid fa-user-tie', title: 'Direct Contact', image: '/wp-content/uploads/2026/04/contact-agent-seller.webp' },
      { icon: 'fa fa-regular fa-calendar', title: 'Flexible Property Visit Booking', image: '/wp-content/uploads/2026/04/property-schedule-user.webp' },
      { icon: 'fa fa-solid fa-map-location-dot', title: 'Map-Based Property View', image: '/wp-content/uploads/2026/04/property-view.webp' },
    ],
  },
  agent: {
    label: 'Agent',
    icon: 'fas fa-user-tie',
    tabs: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Agent Dashboard', image: '/wp-content/uploads/2026/04/agent_dashboard.webp' },
      { icon: 'fa fa-solid fa-table-list', title: 'Advanced Property Listing', image: '/wp-content/uploads/2026/04/agent-property-listing.webp' },
      { icon: 'fa fa-solid fa-cloud-arrow-up', title: 'Document Upload System', image: '/wp-content/uploads/2026/04/upload-document.webp' },
      { icon: 'fa fa-solid fa-money-bill', title: 'Invoice & Billing History', image: '/wp-content/uploads/2026/04/invoice.webp' },
      { icon: 'fa fa-solid fa-route', title: 'Tour Request Status Tracking', image: '/wp-content/uploads/2026/04/tour-request.webp' },
      { icon: 'fa fa-solid fa-building', title: 'Property Status Management', image: '/wp-content/uploads/2026/04/property-status.webp' },
    ],
  },
  seller: {
    label: 'Seller',
    icon: 'fas fa-user-check',
    tabs: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Seller Dashboard', image: '/wp-content/uploads/2026/04/seller_dashboard.webp' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Property Visit Scheduling', image: '/wp-content/uploads/2026/04/property-schedule.webp' },
      { icon: 'fa fa-solid fa-envelope-open', title: 'Direct Inquiry Management', image: '/wp-content/uploads/2026/04/enquiry.webp' },
      { icon: 'fa fa-solid fa-list-ol', title: 'Listing Limit', image: '/wp-content/uploads/2026/04/lisitng-limit.webp' },
      { icon: 'fa fa-solid fa-receipt', title: 'Payment & Transaction History', image: '/wp-content/uploads/2026/04/invoice-seller.webp' },
      { icon: 'fa fa-solid fa-box-open', title: 'Package Activity Monitoring', image: '/wp-content/uploads/2026/04/package-monitor.webp' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    tabs: [
      { icon: 'fa fa-solid fa-gauge', title: 'Advanced Analytics Dashboard', image: '/wp-content/uploads/2026/04/platform_analytics.webp' },
      { icon: 'fa fa-solid fa-circle-user', title: 'User Management', image: '/wp-content/uploads/2026/04/user-management.webp' },
      { icon: 'fa fa-regular fa-folder-open', title: 'Category Management', image: '/wp-content/uploads/2026/04/category-management.webp' },
      { icon: 'fa fa-solid fa-list-check', title: 'Amenities Management', image: '/wp-content/uploads/2026/04/amenities-management.webp' },
      { icon: 'fa fa-solid fa-box', title: 'Package Management', image: '/wp-content/uploads/2026/04/package-management.webp' },
      { icon: 'fa fa-regular fa-calendar-check', title: 'Appointment Management', image: '/wp-content/uploads/2026/04/appointment-management.webp' },
    ],
  },
}

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-bootstrap', color: 'rgb(121, 82, 179)', title: 'Bootstrap' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next Js' },
  { type: 'image', image: '/wp-content/uploads/2022/01/mysql-1.png', color: 'rgb(0, 95, 133)', title: 'MySQL' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-file-shield', title: 'Authentication & Security', desc: 'Provides secure user access, encrypted authentication, secured sessions and strong data privacy controls.' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Automated Billing & Invoicing System', desc: 'Issues invoices, handles recurrent billing, and automates the tracking of payments effectively.' },
  { icon: 'fa fa-solid fa-map-location-dot', title: 'Map & Location Intelligence', desc: 'Improves the functionality of the map by adding geo-tagging, location insights, and proximity-based recommendations.' },
  { icon: 'fa fa-solid fa-users', title: 'Role & Access Engine', desc: 'Administers role-based access and authorizations in order to be certain that every user uses the platform depending on established privileges.' },
  { icon: 'fa fa-solid fa-layer-group', title: 'Content Management System', desc: 'Facilitates the easy development, editing, and administration of web content in the form of blogs, pages and media.' },
  { icon: 'fa fa-solid fa-coins', title: 'Multi-Currency', desc: 'Our Zillow clone script seamless transactions with support for multiple currencies, live exchange rates, and regional tax computation.' },
  { icon: 'fa fa-solid fa-gears', title: 'System Performance & Scalability', desc: 'Provides a high-speed performance and scalability to increased user demand and data.' },
  { icon: 'fa fa-solid fa-gear', title: 'Global Platform Settings', desc: 'Manages all controls of the platform such as system-wide settings and environment management.' },
  { icon: 'fa fa-solid fa-magnifying-glass', title: 'Core Search Engine', desc: 'Provides quick and precise property search and filtering experience on optimized backend search.' },
]

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-bookmark', title: 'Featured Listing', desc: 'Admin can earn from the agents for making their listing featured on the homepage.' },
  { icon: 'fa fa-solid fa-rectangle-ad', title: 'Google Ads', desc: 'Zillow Clone App allows the admin can earn by displaying Google ads.' },
  { icon: 'fa fa-solid fa-dollar-sign', title: 'Credit Packages', desc: 'Agents need to purchase the credit packages to list their properties on the platform.' },
  { icon: 'fa fa-solid fa-money-bill', title: 'Agent Earning', desc: 'An agent can earn by selling or renting the property or project to the users.' },
]

export const launchSteps = [
  { icon: 'icon-et-gears', title: 'Platform Setup', desc: 'Our team sets up the marketplace on your server and ensures everything is ready before launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Marketplace Personalization', desc: 'Make the marketplace your own by adding your branding, business details, and visual style.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'We help you through the launch process so you can start your marketplace without complications.' },
]

export const dashboards = [
  { label: 'User Dashboard', email: 'user@yopmail.com', password: '12345678' },
  { label: 'Agent Dashboard', email: 'agent@yopmail.com', password: '12345678' },
  { label: 'Seller Dashboard', email: 'seller@yopmail.com', password: '12345678' },
  { label: 'Admin Dashboard', email: 'admin@gmail.com', password: 'Admin@123' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1499', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Unlimited Updates', true], ['Free Installation', true], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made script tailored to your real estate business needs',
  'Clear development process with complete documentation',
  'Affordable pricing with no hidden charges',
  '100% guaranteed launch within the committed timeframe',
  'One-time payment with no additional costs',
  'Reliable customer support for all your queries',
  'Free installation support for a hassle-free setup',
  'Full source code access with complete ownership control',
]

export const comparisonOthers = [
  'Generic solutions that don’t fully meet business needs',
  'Unclear and undefined development process',
  'High costs with hidden charges during development',
  'No fixed timeline leading to delayed launches',
  'Recurring subscription and annual fees',
  'Limited or no customer support',
  'Additional charges for installation support',
  'Restricted or no access to full source code',
]

export const faqs = [
  { q: 'What is Zillow Clone Script', a: 'Zillow Clone is a white-label real estate solution that enables budding entrepreneurs and real estate business owners to launch their own real estate listing and rental platform quickly and affordably.' },
  { q: 'How Real Estate App like Zillow Works?', a: 'The Zillow Clone Solution allows users to search and view properties for sale or rent. Agents can list their properties, and users can connect with them directly.' },
  { q: 'Will I Have Complete Ownership of the Zillow Clone Script?', a: 'Yes, you will receive complete ownership of the Zillow Clone Script. Since it is a white-label solution, you can tailor the website to suit your business needs.' },
  { q: 'How Much Does it Cost for a Zillow Clone App?', a: 'Launching a Zillow Clone from scratch can be expensive. However, CloneScript offers a Zillow Clone at an affordable price, with three different pricing plans to suit various business needs.' },
  { q: 'What Type of Support Will I Get After Purchase?', a: 'We provide three months of free technical support with every Zillow Clone purchase to ensure everything runs smoothly.' },
]

export const serverRequirements = {
  vpsServer: ['OS: Ubuntu 22.04 LTS', 'CPU: 2–4 Cores', 'RAM: 4–8 GB', 'Storage: 40+ GB SSD', 'Node.js: v18 or higher'],
  database: ['MongoDB 5+'],
}

export const changeLog = [
  {
    version: 'Version 2.0',
    date: 'June, 2026',
    items: [
      'AI Chatbot for Property Assistance',
      'AI Property Description Generator',
      'AI Property Recommendations',
      'Neighborhood Insights',
      'Local Market Updates',
      'Property Comparison Tool',
      'Voice Search',
      'Location-Based Property Search',
      'Virtual Property Tours',
      'Saved Search Alerts',
      'EMI Calculator',
      'Enhanced Seller Dashboard',
      'Enhanced Agent Dashboard',
      'Improved Admin Dashboard & Management Features',
    ],
  },
  {
    version: 'Version 1.0',
    date: 'April, 2026',
    items: ['Initial Release'],
  },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Margaret Ellison',
    role: 'Real Estate Broker',
    rating: 5,
    quote: 'AI Property Recommendations actually match what buyers are looking for, not just what is newly listed.',
    avatar: '/wp-content/reviews/zillow/review-margaret-ellison.webp',
    bg: '#e0fbf6',
    accent: '#0eaa90',
    dot: '#5ae2cb',
  },
  {
    name: 'Tariq Hussain',
    role: 'Real Estate Agent',
    rating: 4.5,
    quote: 'The AI Chatbot answers listing questions after hours, leads do not go cold overnight anymore.',
    avatar: '/wp-content/reviews/zillow/review-tariq-hussain.webp',
    bg: '#e0f4fb',
    accent: '#0e83aa',
    dot: '#5ac0e2',
  },
  {
    name: 'Beatriz Costa',
    role: 'Property Platform Founder',
    rating: 5,
    quote: 'AI-Powered Descriptions save my team hours every week and the copy reads better than what we wrote ourselves.',
    avatar: '/wp-content/reviews/zillow/review-beatriz-costa.webp',
    bg: '#e0ebfb',
    accent: '#0e4faa',
    dot: '#5a93e2',
  },
  {
    name: 'Nathaniel Cross',
    role: 'Broker',
    rating: 4.5,
    quote: 'Property search filters are precise enough that clients find real matches, not just a wall of listings.',
    avatar: '/wp-content/reviews/zillow/review-nathaniel-cross.webp',
    bg: '#e0e1fb',
    accent: '#0e15aa',
    dot: '#5a61e2',
  },
  {
    name: 'Simone Laurent',
    role: 'Neighborhood Specialist',
    rating: 4.5,
    quote: 'AI Neighborhood Insights give buyers context we used to explain over dozens of phone calls.',
    avatar: '/wp-content/reviews/zillow/review-simone-laurent.webp',
    bg: '#eae0fb',
    accent: '#4a0eaa',
    dot: '#8e5ae2',
  },
]
