/**
 * Andrew G. Palaran — Portfolio Default Configuration
 * Baseline data for profile details, live projects, and 11 verified credentials.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.config = window.PortfolioApp.config || {};

window.PortfolioApp.config.STORAGE_KEY = 'andrew-editorial-portfolio-v15';

window.PortfolioApp.config.defaultData = {
  name: 'Andrew G. Palaran',
  role: 'Project Manager & Full-Stack Developer',
  intro: 'Fourth-year BS Information Technology student at Southern Leyte State University (Class of 2027). Project Manager for WaterWatch, a web-based GIS water monitoring and forecasting project, with hands-on experience in web development, e-commerce, franchising, and inventory management.',
  about: 'Fourth-year BS Information Technology student at Southern Leyte State University, expecting to graduate in 2027. Project manager for WaterWatch, a web-based GIS water monitoring and forecasting project. Experience in web development, e-commerce, franchising, and inventory management, with an interest in practical business software.',
  email: 'andrewgpalaran@gmail.com',
  phone: '+63 905 736 1525',
  facebook: 'https://www.facebook.com/andrew.palaran.5',
  github: 'https://github.com/Sleepy-Builder',
  linkedin: 'https://www.linkedin.com/in/andrew-palaran-30b18844a',
  projects: [
    {
      title: 'WATERWATCH | GIS WATER MONITORING & FORECASTING',
      subtitle: 'Web-based GIS Mapping, Real-Time Monitoring & Predictive Forecasting',
      badge: 'PROJECT MANAGER · LIVE GIS PLATFORM',
      visualClass: 'visual-gis',
      image: 'assets/project-waterwatch.jpg',
      description: 'Web-based project combining GIS mapping, real-time water monitoring, and predictive forecasting. Served as Project Manager leading system planning and delivery.',
      tag: 'GIS · Water Monitoring · Forecasting · Project Manager',
      url: 'https://waterwatch.tortor.org',
      actionText: 'View Live Demo (waterwatch.tortor.org) ↗'
    },
    {
      title: 'APEX HORIZON MOTORS | VIRTUAL SHOWROOM & CONCIERGE',
      subtitle: 'Authentic Luxury Inventory, Financial Calculator & Virtual Concierge',
      badge: 'FRONTEND DEVELOPER · VIRTUAL SHOWROOM',
      visualClass: 'visual-auto',
      image: 'assets/project-cardealership.jpg',
      description: 'Modern automotive dealership platform built with Vue 3 and Tailwind CSS featuring authentic vehicle inventories, verified VINs, live finance calculation, side-by-side vehicle comparisons, and an AI virtual concierge.',
      tag: 'Vue 3 · Tailwind CSS · Automotive E-Commerce · Interactive Concierge',
      url: 'https://sleepy-builder.github.io/car_dealership/',
      actionText: 'View Virtual Showroom ↗'
    },
    {
      title: 'EASESTAY | LUXURY HOTEL & RESORT',
      subtitle: 'Accessible Luxury Hotel & Resort Booking Platform',
      badge: 'FULL-STACK DEVELOPER · HOSPITALITY UI',
      visualClass: 'visual-hospitality',
      image: 'assets/project-easestay.jpg',
      description: 'Modern luxury hotel and resort web application featuring room & suite bookings, interactive amenities showcases, fine dining galleries, and mobile-optimized guest hospitality UI.',
      tag: 'Web Development · Hospitality UI · Booking System · Responsive Design',
      url: 'https://sleepy-builder.github.io/hotel/',
      actionText: 'Explore EaseStay Resort ↗'
    },
    {
      title: 'UNCLE BREW | SAMPLE COFFEE SHOP WEBSITE',
      subtitle: 'Specialty Coffee Brand, Interactive Menu & Franchising Portal',
      badge: 'WEB DEVELOPER · COFFEE BRAND UI',
      visualClass: 'visual-cafe',
      image: 'assets/project-unclebrew.jpg',
      description: 'Created a sample coffee-shop website featuring an interactive drinks menu, branch listings, and franchising content.',
      tag: 'Web Development · Brand UI · Franchising',
      url: 'https://sleepy-builder.github.io/unclebrew-website/',
      actionText: 'View Uncle Brew Cafe ↗'
    },
    {
      title: "BIG DADDY'S CUP | CHEESY SILOG & ORDERS PORTAL",
      subtitle: 'Fast-Casual Food Brand & Interactive Customer Ordering Portal',
      badge: 'FULL-STACK WEB APP · RESTAURANT UI',
      visualClass: 'visual-food',
      image: 'assets/project-bigdaddycup.jpg',
      description: "Interactive fast-casual restaurant web app featuring dynamic menu filtering, custom cup builder configurator, branch locator, franchise ROI calculator, and an authenticated customer portal with simulated real-time order tracking.",
      tag: 'Web Development · Brand UI · Food E-Commerce · Order Tracking',
      url: 'https://sleepy-builder.github.io/bigdaddycup_website/',
      actionText: "Visit Big Daddy's Cup ↗"
    },
    {
      title: 'E-COMMERCE, FRANCHISING & INVENTORY',
      subtitle: 'Digital Product Distribution, Online Storefronts & Practical Operations',
      badge: 'BUSINESS OPERATIONS · DIGITAL SALES',
      visualClass: 'visual-commerce',
      image: '',
      description: 'Experience in online selling and digital product sales, paired with hands-on experience in franchising and inventory management.',
      tag: 'E-Commerce · Digital Sales · Franchising · Inventory',
      url: '#contact',
      actionText: 'Discuss Business Software ↗'
    }
  ],
  certificates: [
    {
      title: 'Google AI Essentials (5-Course Specialization)',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-ai.png',
      pdf: 'assets/cert-google-ai.pdf',
      verifyUrl: 'https://coursera.org/verify/specialization/VJZ30B6IIG8K'
    },
    {
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM · Coursera',
      date: 'Apr 1, 2026',
      category: 'technical',
      image: 'assets/cert-ibm-web.png',
      pdf: 'assets/cert-ibm-web.pdf',
      verifyUrl: 'https://coursera.org/verify/TPWZOE7G3R73'
    },
    {
      title: 'The Arduino Platform and C Programming',
      issuer: 'University of California, Irvine (UC Irvine) · Coursera',
      date: 'Mar 16, 2026',
      category: 'technical',
      image: 'assets/cert-uci-arduino.png',
      pdf: 'assets/cert-uci-arduino.pdf',
      verifyUrl: 'https://coursera.org/verify/P289W2Y88QT8'
    },
    {
      title: 'Introduction to AI',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-intro-ai.png',
      pdf: 'assets/cert-google-intro-ai.pdf',
      verifyUrl: 'https://coursera.org/verify/HBN6K6VNFH3U'
    },
    {
      title: 'Maximize Productivity With AI Tools',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-productivity.png',
      pdf: 'assets/cert-google-productivity.pdf',
      verifyUrl: 'https://coursera.org/verify/R26V8BUCZLY7'
    },
    {
      title: 'Discover the Art of Prompting',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-prompting.png',
      pdf: 'assets/cert-google-prompting.pdf',
      verifyUrl: 'https://coursera.org/verify/Q4U8GQ1F6TQ7'
    },
    {
      title: 'Use AI Responsibly',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-responsible-ai.png',
      pdf: 'assets/cert-google-responsible-ai.pdf',
      verifyUrl: 'https://coursera.org/verify/8Q7DVDR4A1XM'
    },
    {
      title: 'Stay Ahead of the AI Curve',
      issuer: 'Google · Coursera',
      date: 'Apr 8, 2026',
      category: 'ai',
      image: 'assets/cert-google-ai-curve.png',
      pdf: 'assets/cert-google-ai-curve.pdf',
      verifyUrl: 'https://coursera.org/verify/CH19GKWDIUXO'
    },
    {
      title: 'Data Analytics Foundations: Turn Data into Insights',
      issuer: 'IBM · Coursera',
      date: 'Apr 8, 2026',
      category: 'technical',
      image: 'assets/cert-ibm-data-analytics.png',
      pdf: 'assets/cert-ibm-data-analytics.pdf',
      verifyUrl: 'https://coursera.org/verify/QUM433ZCUD9Y'
    },
    {
      title: 'Introduction to IT Security',
      issuer: 'Akamai Technologies, Inc. · Coursera',
      date: 'Apr 23, 2026',
      category: 'technical',
      image: 'assets/cert-akamai-security.png',
      pdf: 'assets/cert-akamai-security.pdf',
      verifyUrl: 'https://coursera.org/verify/VYZLK7HEK2FH'
    },
    {
      title: 'Guided Website Development Project',
      issuer: 'University of Washington · Coursera',
      date: 'May 7, 2026',
      category: 'technical',
      image: 'assets/cert-uw-web-project.png',
      pdf: 'assets/cert-uw-web-project.pdf',
      verifyUrl: 'https://coursera.org/verify/C53M79XNXGFQ'
    }
  ]
};
