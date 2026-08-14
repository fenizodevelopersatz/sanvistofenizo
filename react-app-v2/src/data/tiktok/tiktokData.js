export const featureGroups = [
  {
    id: 'customer',
    label: 'Customer',
    icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2026/01/user-features.webp',
    imageAlt: 'user-features',
    features: [
      { title: 'User Livestreaming', desc: 'The TikTok Clone app includes a live streaming feature that allows creators to go live, while users can view streams and interact through real-time comments.' },
      { title: 'Video Upload Page', desc: 'Users can record, edit, and upload videos easily, enabling them to showcase their talent and creativity on the platform.' },
      { title: 'Filters and Effects', desc: 'Creators can enhance their videos using a wide range of filters and effects, making content more engaging and visually appealing.' },
      { title: 'Chat Page', desc: 'The chat feature allows users to communicate with others on the platform by sending text messages, images, and videos seamlessly.' },
      { title: 'Wallet', desc: 'The built-in wallet enables users to add, manage, and use funds whenever required. This feature is fully integrated into our TikTok Clone App.' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2026/01/admin-feature.webp',
    imageAlt: 'admin-feature',
    features: [
      { title: 'Analytics Dashboard', desc: 'This TikTok Clone app helps admins easily track visitor data, user analytics, and reports, enabling better insights to improve platform engagement.' },
      { title: 'Hashtags and Coins Management', desc: 'Admins can add and manage new or trending hashtags for reels and stories to boost engagement. All hashtag and coin management features are accessible from a single dashboard.' },
      { title: 'Livestream Controls', desc: 'Our TikTok Clone platform provides complete livestream control for admins, allowing them to monitor, add, or remove livestreams easily to maintain trust and quality.' },
      { title: 'User Management', desc: 'Admins can verify users and freeze or unfreeze user accounts. The admin panel allows viewing and editing of user details, wallets, stories, and posts.' },
    ],
  },
]

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-coins', title: 'Coins', desc: 'Admins have full control over the coin system, including coin allocation and valuation.' },
  { icon: 'fa fa-solid fa-gift', title: 'Virtual Gifts', desc: 'Users can support their favorite creators by sending virtual gifts within the platform.' },
  { icon: 'fa fa-solid fa-bell', title: 'Notifications and Alerts', desc: 'Users receive real-time notifications for updates, alerts, chats, followers, and reminders through the app.' },
  { icon: 'fa fa-solid fa-id-badge', title: 'Memberships', desc: 'Our TikTok Clone offers premium memberships that provide faster support, an ad-free experience, and access to exclusive features and functionalities.' },
  { icon: 'fa fa-solid fa-share-nodes', title: 'Social Integrations', desc: 'Users can like reels and shorts, comment, share, tag, repost, and interact with live videos and the community seamlessly on the platform.' },
  { icon: 'fa fa-solid fa-gear', title: 'Account Settings', desc: 'TikTok Clone users can manage their account details and privacy preferences. The app also allows users to share their profiles and change their preferred language as needed.' },
  { icon: 'fa fa-solid fa-sliders', title: 'Advanced Functionalities', desc: 'Users can add backgrounds to posts and stories, and enjoy video preview support through the seek bar within the TikTok Clone.' },
  { icon: 'fa fa-solid fa-hashtag', title: 'Hashtag Suggestions', desc: 'The platform suggests new, trending, and relevant hashtags to help users improve video views, reach trending status, and increase overall exposure.' },
  { icon: 'fa fa-solid fa-user-plus', title: 'Easy Signup', desc: 'Users can sign up effortlessly on our TikTok Clone App via Gmail, social media accounts, phone numbers, or other supported platforms.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-music', 'Add Story Music'],
  ['fa fa-solid fa-user-group', 'Co-Host Support'],
  ['fa fa-solid fa-video', 'Multi-Host Live Streaming'],
  ['fa fa-solid fa-bolt', 'PK Battle'],
  ['fa fa-solid fa-qrcode', 'Profile QR Code'],
  ['fa fa-solid fa-clock-rotate-left', 'Withdraw History'],
  ['fa fa-solid fa-satellite-dish', 'Dummy Live Support'],
  ['fa fa-solid fa-comment-slash', 'Comment Restriction'],
  ['fa fa-solid fa-envelope', 'Private Messaging'],
  ['fa fa-solid fa-location-dot', 'Geotag Moments'],
  ['fa fa-solid fa-sack-dollar', 'Monetization Options'],
  ['fa fa-solid fa-shield-halved', 'Privacy Control'],
  ['fa fa-solid fa-brain', 'Smart Content Moderation'],
  ['fa fa-solid fa-bookmark', 'Save Favourite'],
  ['fa fa-solid fa-stamp', 'Watermark Video'],
  ['fa fa-solid fa-cloud-arrow-down', 'Offline Friendly'],
  ['fa fa-solid fa-user-slash', 'Block User'],
  ['fa fa-solid fa-circle-play', 'Video Preview'],
  ['fa fa-solid fa-reply', 'Reply to Stories'],
  ['fa fa-solid fa-stopwatch', 'Custom Story Duration'],
].map(([icon, title]) => ({ icon, title }))

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-rectangle-ad', title: 'AdMob Ads', desc: 'Admins can generate consistent revenue by integrating and managing AdMob ads within the TikTok Clone App.' },
  { icon: 'fa fa-solid fa-user-plus', title: 'Plus Membership', desc: 'Offer premium subscriptions with an ad-free experience and a verified blue tick. Admins have full control to set pricing and customize exclusive benefits for subscribers.' },
  { icon: 'fa fa-solid fa-cart-shopping', title: 'In-App Purchases', desc: 'Boost revenue by enabling secure coin purchases that users can spend on virtual gifts for their favorite livestreamers.' },
  { icon: 'fa fa-solid fa-percent', title: 'Commission-Based Earnings', desc: 'Earn consistent revenue by collecting a commission on every virtual gift sent during livestreams. The more users engage, the more your platform profits.' },
]

export const screenshots = [
  '/wp-content/uploads/2026/01/share.webp',
  '/wp-content/uploads/2026/01/reels.webp',
  '/wp-content/uploads/2026/01/profile.webp',
  '/wp-content/uploads/2026/01/home.webp',
  '/wp-content/uploads/2026/01/comments.webp',
]

export const pricingPlans = [
  {
    name: 'Corporate Plus', price: '$4999', featured: true,
    features: [['1 Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', true], ['Android Native App', true], ['iOS Native App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Corporate', price: '$3899', featured: false,
    features: [['1 Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', false], ['Android Native App', true], ['iOS Native App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
]

export const faqs = [
  { q: 'What Is a TikTok Clone?', a: 'A TikTok Clone is a ready-made video-sharing app that replicates core TikTok features such as short-video creation, uploading, editing, live streaming, likes, comments, and sharing. With CloneScript’s TikTok Clone Script, entrepreneurs can quickly launch their own branded short-video platform without building everything from scratch.' },
  { q: 'What Is a TikTok Clone Script?', a: 'TikTok Clone Script is a fully customizable, scalable, and feature-rich solution designed to help startups and businesses launch a video-sharing app like TikTok within 7 days. It includes user apps, an admin panel, monetization tools, and advanced features to support rapid growth.' },
  { q: 'Why Do Entrepreneurs Choose CloneScript’s TikTok Clone Script?', a: 'Entrepreneurs choose CloneScript because it offers faster launch within a week, lower development cost, proven market-ready features, full customization and branding, and built-in monetization options. This allows businesses to enter the booming short-video market quickly and gain a competitive edge without technical complexity.' },
  { q: 'How Much Does It Cost to Build a TikTok Clone App?', a: 'The cost of a TikTok Clone app depends on your feature requirements and customizations. CloneScript offers affordable and flexible pricing, making it ideal for startups and growing businesses. Advanced features such as AI-based recommendations, live streaming, virtual gifts, and monetization modules can be added based on your business goals.' },
  { q: 'How Fast Can I Launch a TikTok Clone App with CloneScript?', a: 'With CloneScript, you can launch your TikTok-like video-sharing app in as little as 7 days. Our team takes care of setup, customization, deployment, and technical support—ensuring a smooth and quick go-to-market experience.' },
  { q: 'Is a TikTok Clone a Good Business Idea in 2026 and Beyond?', a: 'Yes. Short-video platforms continue to dominate user engagement globally. With AI-powered content discovery, creator monetization, and social commerce integrations, launching a TikTok Clone app is a highly profitable and future-ready business model.' },
]
