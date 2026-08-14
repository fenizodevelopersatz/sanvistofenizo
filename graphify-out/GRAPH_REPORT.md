# Graph Report - react-app-v2/src  (2026-08-14)

## Corpus Check
- 243 files · ~74,475 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 695 nodes · 1670 edges · 19 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Amazon Commerce Components|Amazon Commerce Components]]
- [[_COMMUNITY_Home Page Experience|Home Page Experience]]
- [[_COMMUNITY_Application Routes|Application Routes]]
- [[_COMMUNITY_Product Showcase Components|Product Showcase Components]]
- [[_COMMUNITY_ERP Product Experience|ERP Product Experience]]
- [[_COMMUNITY_Rental Booking Experience|Rental Booking Experience]]
- [[_COMMUNITY_Vinted Marketplace Experience|Vinted Marketplace Experience]]
- [[_COMMUNITY_Gojek Super App Experience|Gojek Super App Experience]]
- [[_COMMUNITY_Site Infrastructure and Contact|Site Infrastructure and Contact]]
- [[_COMMUNITY_Fiverr Marketplace Experience|Fiverr Marketplace Experience]]
- [[_COMMUNITY_Footer and Testimonials|Footer and Testimonials]]
- [[_COMMUNITY_OLX Marketplace Experience|OLX Marketplace Experience]]
- [[_COMMUNITY_Swiggy Delivery Experience|Swiggy Delivery Experience]]
- [[_COMMUNITY_Airbnb Rental Experience|Airbnb Rental Experience]]
- [[_COMMUNITY_Udemy Learning Experience|Udemy Learning Experience]]
- [[_COMMUNITY_Alibaba Commerce Experience|Alibaba Commerce Experience]]
- [[_COMMUNITY_Uber Ride Experience|Uber Ride Experience]]
- [[_COMMUNITY_Forms and Lead Capture|Forms and Lead Capture]]
- [[_COMMUNITY_Vite Brand Asset|Vite Brand Asset]]

## God Nodes (most connected - your core abstractions)
1. `usePageStylesheets()` - 45 edges
2. `useSeo()` - 45 edges
3. `Reveal()` - 36 edges
4. `pageStylesheets` - 23 edges
5. `PricingPlans()` - 19 edges
6. `StandOutFeaturesGrid()` - 17 edges
7. `MoneyBackGuarantee()` - 16 edges
8. `PdfDownloadCta()` - 16 edges
9. `RevenueBenefits()` - 15 edges
10. `FaqAccordion()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `ServiceCard()` --calls--> `useInView()`  [EXTRACTED]
  components/home/OurServices.jsx → hooks/useInView.js
- `Reveal()` --calls--> `useInView()`  [EXTRACTED]
  components/shared/Reveal.jsx → hooks/useInView.js
- `Header()` --calls--> `useMobileNav()`  [EXTRACTED]
  components/Header.jsx → hooks/useMobileNav.js
- `Header()` --calls--> `useStickyHeader()`  [EXTRACTED]
  components/Header.jsx → hooks/useStickyHeader.js
- `ContactForm()` --calls--> `useContactForm()`  [EXTRACTED]
  components/contact/ContactForm.jsx → hooks/useContactForm.js

## Import Cycles
- None detected.

## Communities (19 total, 0 thin omitted)

### Community 0 - "Amazon Commerce Components"
Cohesion: 0.06
Nodes (41): AmazonFeatureTabs(), AmazonHero(), PlatformFeatureRows(), WhatIsAmazon(), AiFeaturesGrid(), CARD_STYLE, BlogTeaser(), FaqAccordion() (+33 more)

### Community 1 - "Home Page Experience"
Cohesion: 0.06
Nodes (30): TrustedByBuyers(), AchievementBanner(), ConnectWithUs(), DevProcess(), Hero(), OurServices(), ServiceCard(), ReadyMadeSolutions() (+22 more)

### Community 2 - "Application Routes"
Cohesion: 0.05
Nodes (34): AirbnbClonePage, AlibabaClonePage, AmazonClonePage, App(), ContactUsPage, ErpSoftwarePage, FiverrClonePage, GojekClonePage (+26 more)

### Community 3 - "Product Showcase Components"
Cohesion: 0.07
Nodes (32): SchoolCrmHero(), WhatIsSchoolCrm(), LiveDemoTabs(), TechStackRow(), RoleShowcase(), TuroHero(), UpcomingAiFeature(), WhatIsTuro() (+24 more)

### Community 4 - "ERP Product Experience"
Cohesion: 0.07
Nodes (29): CoreModules(), DashboardScreenshots(), DetailedFeatures(), ErpBlogTeaser(), ErpCtaAndImage(), ErpHero(), FaqSection(), IndustriesCarousel() (+21 more)

### Community 5 - "Rental Booking Experience"
Cohesion: 0.08
Nodes (26): AppScreens(), ChatWithExpertCta(), MainFeaturesRoles(), RentalBookingHero(), RentalCategoriesCarousel(), RentalEcosystem(), TechWeUsed(), WhatIsRentalBooking() (+18 more)

### Community 6 - "Vinted Marketplace Experience"
Cohesion: 0.08
Nodes (32): ProcessSteps(), RoleFeatureTabs(), VintedHero(), VintedIntroBanner(), WhatIsVintedAndVideo(), WhyInvestVinted(), WhatIsZillow(), ZillowHero() (+24 more)

### Community 7 - "Gojek Super App Experience"
Cohesion: 0.08
Nodes (27): AllInOneSuperApp(), BusinessOpportunities(), GojekHero(), ServiceOfferTabs(), WhatIsGojek(), LaunchCta(), RevenueBenefits(), StandOutFeaturesGrid() (+19 more)

### Community 8 - "Site Infrastructure and Contact"
Cohesion: 0.10
Nodes (29): ContactHero(), GetInTouch(), SocialProofPanel(), pageStylesheets, TYPOGRAPHY_OVERRIDE, usePageStylesheets(), useSeo(), AirbnbClonePage() (+21 more)

### Community 9 - "Fiverr Marketplace Experience"
Cohesion: 0.09
Nodes (20): AddOnFeaturesFlip(), FaqServerTabs(), FiverrHero(), FounderCta(), HowItWorks(), MainFeaturesRoles(), MobileScreens(), ScheduleServiceCta() (+12 more)

### Community 10 - "Footer and Testimonials"
Cohesion: 0.09
Nodes (17): BlockquoteTestimonials(), Footer(), FooterBottom(), FooterSitemap(), TestimonialRotatorSection(), ScheduleFormSection(), TestimonialCarousel(), BlockquoteTestimonials() (+9 more)

### Community 11 - "OLX Marketplace Experience"
Cohesion: 0.11
Nodes (18): AddOnFeaturesFlip(), EnhanceBusinessCta(), MainFeaturesTabs(), MobileScreens(), OlxFaqSection(), OlxHero(), StartCta(), TechWeUsed() (+10 more)

### Community 12 - "Swiggy Delivery Experience"
Cohesion: 0.11
Nodes (16): FaqServerTabs(), FeaturePanels(), FounderCta(), MobileScreensTabs(), RestaurantPos(), SwiggyHero(), WhatIsSwiggy(), WhyChooseUs() (+8 more)

### Community 13 - "Airbnb Rental Experience"
Cohesion: 0.13
Nodes (18): AirbnbHero(), AirbnbLiveDemo(), AirbnbTestimonials(), AppDownloadBanner(), BookDemoCta(), ComparisonTable(), WhyChooseChecklist(), aiFeatures (+10 more)

### Community 14 - "Udemy Learning Experience"
Cohesion: 0.14
Nodes (16): AiContentGenerator(), FreeAddOnFeatures(), UdemyFaqTabs(), UdemyHero(), UdemyRoleFeatures(), WhatIsUdemy(), WhyChooseUsUdemy(), dashboards (+8 more)

### Community 15 - "Alibaba Commerce Experience"
Cohesion: 0.14
Nodes (16): AiFeaturesSection(), AlibabaHero(), RoleFeatureTabs(), WhatIsAlibaba(), WhyInvest(), addOnFeatures, aiFeatures, comparisonOthers (+8 more)

### Community 16 - "Uber Ride Experience"
Cohesion: 0.15
Nodes (13): BookByBid(), HowItWorks(), UberHero(), UberRoleFeatures(), WhatIsUber(), WhyChooseUber(), addOnFeatures, faqs (+5 more)

### Community 17 - "Forms and Lead Capture"
Cohesion: 0.22
Nodes (9): ContactForm(), ContactTabs(), SupportForm(), PdfDownloadCta(), MeetingBookingForm(), DemoForm(), PdfDownloadCta(), demoProducts (+1 more)

### Community 18 - "Vite Brand Asset"
Cohesion: 0.50
Nodes (5): Dark Mode Adaptation, Lightning Bolt Motif, Parenthesis Frame, Vite, Vite Logo

## Knowledge Gaps
- **34 isolated node(s):** `HomePage`, `ContactUsPage`, `ScheduleFreeDemoPage`, `ErpSoftwarePage`, `SchoolCrmPage` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useSeo()` connect `Site Infrastructure and Contact` to `Amazon Commerce Components`, `Home Page Experience`, `Product Showcase Components`, `ERP Product Experience`, `Rental Booking Experience`, `Vinted Marketplace Experience`, `Gojek Super App Experience`, `Fiverr Marketplace Experience`, `OLX Marketplace Experience`, `Swiggy Delivery Experience`, `Airbnb Rental Experience`, `Udemy Learning Experience`, `Alibaba Commerce Experience`, `Uber Ride Experience`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `usePageStylesheets()` connect `Site Infrastructure and Contact` to `Amazon Commerce Components`, `Home Page Experience`, `Product Showcase Components`, `ERP Product Experience`, `Rental Booking Experience`, `Vinted Marketplace Experience`, `Gojek Super App Experience`, `Fiverr Marketplace Experience`, `OLX Marketplace Experience`, `Swiggy Delivery Experience`, `Airbnb Rental Experience`, `Udemy Learning Experience`, `Alibaba Commerce Experience`, `Uber Ride Experience`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Why does `siteContact` connect `Product Showcase Components` to `Home Page Experience`, `Application Routes`, `ERP Product Experience`, `Vinted Marketplace Experience`, `Site Infrastructure and Contact`, `Footer and Testimonials`, `Alibaba Commerce Experience`, `Forms and Lead Capture`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `HomePage`, `ContactUsPage`, `ScheduleFreeDemoPage` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Amazon Commerce Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06144393241167435 - nodes in this community are weakly interconnected._
- **Should `Home Page Experience` be split into smaller, more focused modules?**
  _Cohesion score 0.056261343012704176 - nodes in this community are weakly interconnected._
- **Should `Application Routes` be split into smaller, more focused modules?**
  _Cohesion score 0.05442176870748299 - nodes in this community are weakly interconnected._