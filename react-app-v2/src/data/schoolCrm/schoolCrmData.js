export const coreModules = [
  { icon: 'fa fa-solid fa-user-graduate', title: 'Admissions & Enrollment', desc: 'Move student admissions online — applications, document uploads, and seat allotment in one flow.' },
  { icon: 'fa fa-solid fa-fingerprint', title: 'Attendance Management', desc: 'Mark and track daily attendance for students and staff, with biometric and app-based check-in support.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'Fee Management', desc: 'Generate fee structures, send reminders, and collect payments online with full receipt history.' },
  { icon: 'fa fa-solid fa-file-pen', title: 'Exams & Report Cards', desc: 'Plan exams, enter marks, and auto-generate report cards in your school’s own format.' },
  { icon: 'fa fa-solid fa-calendar-days', title: 'Timetable & Scheduling', desc: 'Build class and staff timetables that update automatically when a period or teacher changes.' },
  { icon: 'fa fa-solid fa-chalkboard-user', title: 'Online Classes', desc: 'Host live classes and share recordings, assignments, and study material with students.' },
  { icon: 'fa fa-solid fa-book-open', title: 'Library Management', desc: 'Track book inventory, issue and return records, and due-date reminders.' },
  { icon: 'fa fa-solid fa-bus', title: 'Transport Tracking', desc: 'Track school buses in real time and keep parents informed of pickup and drop timings.' },
  { icon: 'fa fa-solid fa-comments', title: 'Notices & Communication', desc: 'Send announcements, circulars, and homework updates to parents by app, SMS, or email.' },
]

export const standardFeatures = [
  { icon: 'fa fa-solid fa-user-shield', title: 'Role-Based Access Control' },
  { icon: 'fa fa-solid fa-code-branch', title: 'Multi-Branch Support' },
  { icon: 'fa fa-solid fa-fingerprint', title: 'Biometric Attendance Integration' },
  { icon: 'fa fa-solid fa-credit-card', title: 'Online Fee Payment Gateway' },
  { icon: 'fa fa-brands fa-whatsapp', title: 'SMS, Email & WhatsApp Alerts' },
  { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Dedicated Parent App' },
  { icon: 'fa fa-solid fa-language', title: 'Multi-Language Support' },
  { icon: 'fa fa-solid fa-file-circle-check', title: 'Automated Report Cards' },
  { icon: 'fa fa-solid fa-database', title: 'Automated Data Backup' },
  { icon: 'fa fa-solid fa-sack-dollar', title: 'Staff Payroll & HR' },
  { icon: 'fa fa-solid fa-clipboard-list', title: 'Homework & Assignment Tracker' },
  { icon: 'fa fa-solid fa-video', title: 'Live Class Integration' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-shield-halved', 'Secure Login'],
  ['fa fa-solid fa-key', 'OTP Verification'],
  ['fa fa-solid fa-bell', 'Push Notifications'],
  ['fa fa-solid fa-folder-open', 'Document Vault'],
  ['fa fa-solid fa-id-card', 'ID Card Generator'],
  ['fa fa-solid fa-certificate', 'Certificate Generator'],
  ['fa fa-solid fa-user-check', 'Visitor Management'],
  ['fa fa-solid fa-boxes-stacked', 'Inventory Management'],
  ['fa fa-solid fa-people-group', 'Alumni Network'],
  ['fa fa-solid fa-calendar-star', 'Event Calendar'],
  ['fa fa-solid fa-location-dot', 'Bus GPS Tracking'],
  ['fa fa-solid fa-bed', 'Hostel Management'],
  ['fa fa-solid fa-chart-column', 'Performance Analytics'],
  ['fa fa-solid fa-file-invoice-dollar', 'Fee Receipt Download'],
  ['fa fa-solid fa-address-book', 'Staff Directory'],
].map(([icon, title]) => ({ icon, title }))

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next Js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'image', image: '/wp-content/uploads/2022/01/mysql-1.png', color: 'rgb(0, 95, 133)', title: 'MySQL' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Receive complete installation assistance for a quick and hassle-free launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Brand Personalization', desc: 'Customize your school’s logo, colors, and content to reflect your identity.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'Get expert assistance to help you launch and manage your school platform successfully.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$1999', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$999', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', false], ['iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made school management solution built for admins, teachers, and parents.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic CRM solutions with limited education-specific functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What is School CRM?', a: 'School CRM is a ready-to-launch school management software that brings admissions, attendance, fees, exams, and parent communication together on one platform. Start your own school management business with little or no development investment.' },
  { q: 'How to reach our support team?', a: 'Once you purchase our products, if you have any doubts or queries you can reach our support team via email to clarify your doubts.' },
  { q: 'Is it possible to claim full ownership of your clone script/themes once purchased?', a: 'Yes, once you purchase it, you will completely own your website.' },
  { q: 'What is 100% source code?', a: 'You get the complete source code of your website so you can customize it based on your desired and business needs. The script/themes are not encrypted files.' },
  { q: 'Can I resell the script/theme from CloneScript?', a: 'No, once you purchase School CRM or any theme from us, you don’t have to resell or distribute them. If you violate this you are liable for illegal activities.' },
  { q: 'How do Single and Multi Domain License differ?', a: 'A single-domain license allows usage for only one school on a single domain. For example, you can use it exclusively on myschool.com.' },
]
