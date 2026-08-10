// Placeholder hrefs — these were the original site's real social accounts.
// Checked fenizotechnologies.com (2026-08-04): its "Follow Us" footer section has no
// working social links either, so there's nothing real to substitute in yet.
export const socialLinks = [
  { href: '#', icon: 'fa fa-facebook' },
  { href: '#', icon: 'fa fa-twitter' },
  { href: '#', icon: 'fa fa-linkedin' },
  { href: '#', icon: 'fa fa-instagram' },
  { href: '#', icon: 'fa fa-github' },
  { href: '#', icon: 'fa fa-youtube' },
  { href: '#', icon: 'fa fa-pinterest' },
]

export const footerNavColumns = [
  {
    title: 'About Company',
    links: [
      ['#', 'About Us'],
      ['#', 'Our Services'],
      ['#', 'Our Products'],
      ['#', 'Portfolio'],
      ['#', 'Our Blog'],
      ['#', 'Career'],
    ],
  },
  {
    title: 'Website Design',
    headingTag: 'h5',
    links: [
      ['#', 'Corporate websites'],
      ['#', 'News/Blog/Portfolio Websites'],
      ['#', 'E-Commerce Websites'],
      ['#', 'Marketplace Websites'],
      ['#', 'Custom Web Development'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['#', 'Terms of Service'],
      ['#', 'Privacy Policy'],
      ['#', 'Refund Policy'],
    ],
  },
  {
    title: 'Application Development',
    links: [
      ['#', 'Desktop Software Development'],
      ['#', 'Mobile App Development'],
    ],
  },
]

// Verification-service links were scoped to sangvish.com in the original site — neutralized
// to '#' since they'd otherwise verify the old domain, not Fenizo's, under Fenizo's name.
export const trustBadges = [
  { href: '#', image: '/wp-content/uploads/2023/03/DMCA_logo-std-btn120w.png', width: 121, height: 45, alt: 'DMCA' },
  { href: '#', image: '/wp-content/uploads/2023/03/trustiste.png', width: 106, height: 43, alt: 'TrustedSite' },
  { href: '#', image: '/wp-content/uploads/2023/03/fenizo-norton.png', width: 74, height: 40, alt: 'Norton Safe Web' },
]
