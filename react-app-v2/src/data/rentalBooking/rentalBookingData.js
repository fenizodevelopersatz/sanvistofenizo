export const mainFeaturesRoles = {
  customer: {
    label: 'Customer',
    icon: 'fas fa-user',
    image: '/wp-content/uploads/2026/01/user-features-1-250x450.webp',
    imageAlt: 'user-features',
    items: [
      { icon: 'fa fa-solid fa-list', title: 'Browse Rentals' },
      { icon: 'fa fa-solid fa-credit-card', title: 'Instant Checkout' },
      { icon: 'fa fa-solid fa-clipboard-list', title: 'Booking History' },
      { icon: 'fa fa-solid fa-bell', title: 'Notifications' },
      { icon: 'fa fa-regular fa-heart', title: 'Wishlist' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Flexible Booking' },
      { icon: 'fa fa-solid fa-lock', title: 'Secure Payments' },
      { icon: 'fa fa-solid fa-pen-to-square', title: 'Modify or Cancel' },
      { icon: 'fa fa-solid fa-star', title: 'Ratings & Reviews' },
      { icon: 'fa fa-solid fa-headset', title: 'Support Requests' },
    ],
  },
  host: {
    label: 'Host',
    icon: 'fas fa-user-tie',
    image: '/wp-content/uploads/2026/01/host-feature.webp',
    imageAlt: 'host-feature',
    items: [
      { icon: 'fa fa-solid fa-layer-group', title: 'Manage Listings' },
      { icon: 'fa fa-solid fa-tags', title: 'Pricing Control' },
      { icon: 'fa fa-solid fa-wallet', title: 'Earnings Overview' },
      { icon: 'fa fa-solid fa-comment', title: 'Customer Chat' },
      { icon: 'fa fa-solid fa-percent', title: 'Discount Management' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Set Availability' },
      { icon: 'fa fa-solid fa-circle-check', title: 'Accept Bookings' },
      { icon: 'fa fa-solid fa-hand-holding-dollar', title: 'Payout Requests' },
      { icon: 'fa fa-solid fa-clipboard', title: 'Rental History' },
      { icon: 'fa fa-solid fa-user-check', title: 'Profile Verification' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    image: '/wp-content/uploads/2026/01/admin-feature-2.webp',
    imageAlt: 'admin-feature',
    items: [
      { icon: 'fa fa-solid fa-user-large', title: 'User Management' },
      { icon: 'fa fa-regular fa-calendar-check', title: 'Booking Control' },
      { icon: 'fa fa-solid fa-percent', title: 'Commission Settings' },
      { icon: 'fa fa-solid fa-scale-balanced', title: 'Dispute Handling' },
      { icon: 'fa fa-solid fa-user-shield', title: 'Access Roles' },
      { icon: 'fa fa-solid fa-user-gear', title: 'Vendor Management' },
      { icon: 'fa fa-solid fa-money-bill-wave', title: 'Payment Management' },
      { icon: 'fa fa-solid fa-chart-column', title: 'Reports & Analytics' },
      { icon: 'fa fa-solid fa-gear', title: 'System Settings' },
      { icon: 'fa fa-solid fa-sliders', title: 'Platform Configuration' },
    ],
  },
}

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-hand-pointer', title: 'Easy-to-Use Interface', desc: 'Designed for smooth navigation, enabling users and administrators to access features quickly with minimal effort.' },
  { icon: 'fa fa-solid fa-bolt', title: 'Fast Booking Process', desc: 'Allows users to complete rental bookings efficiently with quick confirmation and a simplified flow.' },
  { icon: 'fa fa-regular fa-calendar-days', title: 'Live Availability Management', desc: 'Keeps rental availability updated in real time to avoid overlaps and scheduling conflicts.' },
  { icon: 'fa fa-solid fa-sliders', title: 'Flexible Pricing Control', desc: 'Enables businesses to manage rental prices based on duration, demand, or seasonal needs.' },
  { icon: 'fa fa-solid fa-star', title: 'Ratings and Feedback', desc: 'Allows users to share reviews and ratings, helping build trust and improve service quality.' },
  { icon: 'fa fa-solid fa-globe', title: 'Multi-Currency Support', desc: 'Supports transactions in multiple currencies, making rentals accessible for global users.' },
  { icon: 'fa fa-solid fa-calculator', title: 'Automated Fee Handling', desc: 'Manages additional charges and calculations smoothly for accurate billing.' },
  { icon: 'fa fa-solid fa-location-dot', title: 'Location-Based Service Control', desc: 'Supports region-based operations to manage rental availability effectively.' },
  { icon: 'fa fa-solid fa-lock', title: 'Secure Payment Processing', desc: 'Ensures safe and reliable transactions through trusted payment gateways and protecting user data.' },
]

export const addOnFeatures = [
  { icon: 'fa fa-solid fa-magnifying-glass', title: 'Advanced Search' },
  { icon: 'fa fa-solid fa-language', title: 'Language Support' },
  { icon: 'fa fa-solid fa-circle-plus', title: 'Additional Rental Options' },
  { icon: 'fa fa-solid fa-layer-group', title: 'Multiple Rental Management' },
  { icon: 'fa fa-solid fa-chart-line', title: 'Admin Insights' },
  { icon: 'fa fa-solid fa-headset', title: 'Customer Assistance' },
  { icon: 'fa fa-solid fa-id-card', title: 'ID Verification' },
  { icon: 'fa fa-solid fa-comments', title: 'Built-in Chat' },
  { icon: 'fa fa-solid fa-wallet', title: 'Digital Wallet' },
  { icon: 'fa fa-solid fa-credit-card', title: 'Multiple Payment Options' },
  { icon: 'fa fa-solid fa-eye', title: 'Visual Preview' },
  { icon: 'fa fa-solid fa-briefcase', title: 'Vendor Plans' },
  { icon: 'fa fa-solid fa-sliders', title: 'Custom Rules' },
  { icon: 'fa fa-regular fa-bell', title: 'Instant Alerts' },
  { icon: 'fa fa-regular fa-clock', title: 'Booking Reminders' },
]

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-percent', title: 'Commission Fee', desc: 'The admin can charge a percentage-based commission for every booking made through the platform.' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Service Charges', desc: 'Add nominal service fees for each booking or for booking cancellations on the platform.' },
  { icon: 'fa fa-solid fa-calendar-check', title: 'Subscription Plans', desc: 'Offer special subscription plans with exclusive features and discounts for premium subscribers.' },
  { icon: 'fa fa-solid fa-bullhorn', title: 'Advertising', desc: 'Display advertisements on the platform and earn revenue by charging advertisers a percentage-based fee.' },
]

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

export const faqs = [
  { q: 'What Is a Rental Booking Script?', a: 'A Rental Booking Script is a ready-made software solution that helps businesses create and manage an online rental booking app or website with essential booking and management features.' },
  { q: 'Which Rental Businesses Can Use This Script?', a: 'It is suitable for property rentals, vacation homes, vehicle rentals, equipment leasing, and other on-demand rental services.' },
  { q: 'Does the System Support Mobile And Web Platforms?', a: 'Yes, the rental booking script can be deployed as a web platform and a mobile-friendly application.' },
  { q: 'How Quickly Can I Launch My Rental Booking Platform?', a: 'The rental booking script allows you to get your platform up and running in just 7 days, depending on customization and deployment requirements.' },
  { q: 'Can the Rental Booking Script Be Customized to My Business Needs?', a: 'Yes, the script can be customized to match your rental workflow, branding, pricing rules, and feature requirements.' },
]

export const rentalCategories = [
  { title: 'Boat Rental', subtitle: 'Smart Marine Booking', desc: 'Easy boat bookings for trips leisure and adventures.', image: '/wp-content/uploads/2026/02/Boat-Rental.png' },
  { title: 'Vacation Rental', subtitle: 'Stay Comfortably', desc: 'Comfortable holiday homes with seamless stay bookings.', image: '/wp-content/uploads/2026/02/vacation-rental.webp' },
  { title: 'Space Rental', subtitle: 'Flexible Space Solutions', desc: 'Book offices studios venues instantly with flexible pricing.', image: '/wp-content/uploads/2026/02/space-rental.webp' },
  { title: 'Party', subtitle: 'Event Essentials Booking', desc: 'Book party spaces and essentials for celebrations.', image: '/wp-content/uploads/2026/02/party.webp' },
  { title: 'House Rental', subtitle: 'Reliable Home Leasing', desc: 'Discover verified homes and manage rentals easily.', image: '/wp-content/uploads/2026/02/house-rental.webp' },
  { title: 'Hotel', subtitle: 'Easy Reservations', desc: 'Search compare hotels and confirm stays instantly online.', image: '/wp-content/uploads/2026/02/Hotel.webp' },
  { title: 'Flight', subtitle: 'Quick Air Ticketing', desc: 'Find flights fast with secure ticket booking system.', image: '/wp-content/uploads/2026/02/Flight.webp' },
  { title: 'Car Rental', subtitle: 'Easy Vehicle Hire', desc: 'Reserve cars anytime with affordable rates and options.', image: '/wp-content/uploads/2026/02/car-rental.webp' },
]

export const appScreens = [
  '/wp-content/uploads/2026/01/search-option.webp',
  '/wp-content/uploads/2026/01/payment-2.webp',
  '/wp-content/uploads/2026/01/booking-confirmation.webp',
  '/wp-content/uploads/2026/01/booking.webp',
  '/wp-content/uploads/2026/01/details.webp',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Holly Marsh',
    role: 'Equipment Rental Owner',
    rating: 5,
    quote: 'Instant checkout means customers book and pay without calling us first. Bookings doubled in two months.',
    avatar: '/wp-content/reviews/rentalBooking/review-holly-marsh.webp',
    bg: '#e0fbf5',
    accent: '#0eaa88',
    dot: '#5ae2c5',
  },
  {
    name: 'Petr Novak',
    role: 'Rental Fleet Manager',
    rating: 4.5,
    quote: 'Flexible booking windows fit how our customers actually rent, by the hour or by the week.',
    avatar: '/wp-content/reviews/rentalBooking/review-petr-novak.webp',
    bg: '#e0f5fb',
    accent: '#0e8baa',
    dot: '#5ac7e2',
  },
  {
    name: 'Amara Johnson',
    role: 'Booking Platform Founder',
    rating: 4.5,
    quote: 'Wishlist and notifications bring people back before their next trip even starts.',
    avatar: '/wp-content/reviews/rentalBooking/review-amara-johnson.webp',
    bg: '#e0ecfb',
    accent: '#0e57aa',
    dot: '#5a9ae2',
  },
  {
    name: 'Tobias Richter',
    role: 'Operations Lead',
    rating: 4.5,
    quote: 'Booking history gives our support team the full picture in seconds instead of digging through email.',
    avatar: '/wp-content/reviews/rentalBooking/review-tobias-richter.webp',
    bg: '#e0e2fb',
    accent: '#0e1daa',
    dot: '#5a68e2',
  },
  {
    name: 'Leila Haddad',
    role: 'Small Business Owner',
    rating: 5,
    quote: 'Browsing rentals feels as smooth as any big travel site, our customers noticed the difference immediately.',
    avatar: '/wp-content/reviews/rentalBooking/review-leila-haddad.webp',
    bg: '#e9e0fb',
    accent: '#420eaa',
    dot: '#875ae2',
  },
]
