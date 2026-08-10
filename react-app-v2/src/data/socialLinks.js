// Real Fenizo social handles, confirmed from fenizotechnologies.com on 2026-08-10.
// No GitHub/Pinterest presence was found on the live site, so those icons were dropped
// rather than left pointing at '#'.
export const socialLinks = [
  { href: 'https://www.facebook.com/FenizoTechnologies', icon: 'fa fa-facebook' },
  { href: 'https://twitter.com/FenizoTechs', icon: 'fa fa-twitter' },
  { href: 'https://www.linkedin.com/company/fenizo-technologies-software-company', icon: 'fa fa-linkedin' },
  { href: 'https://www.instagram.com/fenizotechnologies', icon: 'fa fa-instagram' },
  { href: 'https://www.youtube.com/@FenizoTechnologies', icon: 'fa fa-youtube' },
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

// Verification-service links were scoped to the old company's domain in the original
// site — neutralized to '#' since they'd otherwise verify the old domain, not Fenizo's,
// under Fenizo's name.
export const trustBadges = [
  { href: '#', image: '/wp-content/uploads/2023/03/DMCA_logo-std-btn120w.png', width: 121, height: 45, alt: 'DMCA' },
  { href: '#', image: '/wp-content/uploads/2023/03/trustiste.png', width: 106, height: 43, alt: 'TrustedSite' },
  { href: '#', image: '/wp-content/uploads/2023/03/fenizo-norton.png', width: 74, height: 40, alt: 'Norton Safe Web' },
]
