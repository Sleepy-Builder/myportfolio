/**
 * Andrew G. Palaran — Skills & Experience Data Configuration
 * Strictly restricted to Andrew's verified skills & practical experience.
 * Matches User Reference Specifications (Cards 01 to 06).
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.config = window.PortfolioApp.config || {};

window.PortfolioApp.config.skillsData = {
  // 01 // PROGRAMMING & RUNTIME (Languages & Frameworks)
  languages: [
    { name: 'C#', level: '.NET & OOP', icon: 'devicon-csharp-plain colored' },
    { name: 'Java', level: 'Enterprise & ..', icon: 'devicon-java-plain colored' },
    { name: 'Python', level: 'Automation & ..', icon: 'devicon-python-plain colored' },
    { name: 'PHP', level: 'Server Backe..', icon: 'devicon-php-plain colored' },
    { name: 'Laravel', level: 'MVC Framew..', icon: 'devicon-laravel-plain colored' },
    { name: 'React', level: 'Interactive UI', icon: 'devicon-react-original colored' },
    { name: 'Node.js', level: 'RESTful APIs', icon: 'devicon-nodejs-plain colored' },
    { name: 'JavaScript', level: 'Modern ES6+', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5', level: 'Semantic Web', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', level: 'Responsive D..', icon: 'devicon-css3-plain colored' }
  ],

  // 02 // DATA & INFRASTRUCTURE (Databases & Dev Tools)
  databasesAndTools: [
    { name: 'MySQL', level: 'RDBMS & Queries', icon: 'devicon-mysql-plain colored' },
    { name: 'Supabase', level: 'Postgres & Auth', icon: 'devicon-supabase-plain colored' },
    { name: 'VS Code', level: 'Primary Editor', icon: 'devicon-vscode-plain colored' },
    { name: 'Git & GitHub', level: 'Version Control', icon: 'devicon-git-plain colored' },
    {
      name: 'GIS Mapping',
      level: 'Spatial Web GIS',
      accentClass: 'icon-accent-teal',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`
    },
    {
      name: 'Antigravity',
      level: 'Agentic Dev',
      accentClass: 'icon-accent-orange',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`
    }
  ],

  // 04 // CREATIVE & MEDIA SUITE (Design & Media Tools)
  creative: [
    { name: 'Photoshop', level: 'Photo & Graphi..', icon: 'devicon-photoshop-plain colored' },
    { name: 'Canva', level: 'Brand & Visuals', icon: 'devicon-canva-original colored' },
    {
      name: 'CapCut',
      level: 'Video & Reels',
      accentClass: 'icon-accent-cyan',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 4.5h3.8L15 10.2V5.5h3.5A2 2 0 0 1 20.5 7.5v2a2 2 0 0 1-2 2H15l-5.7-5.7v4.7H5.5A2 2 0 0 1 3.5 9v-2.5a2 2 0 0 1 2-2zm0 9.5h3.8L15 19.7V15h3.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H15l-5.7-5.7v4.7H5.5a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2z"/></svg>`
    },
    {
      name: 'Google Flow',
      level: 'Cloud Workflo..',
      accentClass: '',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22.5 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h5.9c-.25 1.37-1.03 2.53-2.2 3.31v2.77h3.57c2.08-1.92 3.23-4.74 3.23-8.32z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>`
    }
  ],

  // 05 // PRACTICAL & ENTERPRISE (Experience & Operations)
  operations: [
    {
      name: 'Project Man...',
      level: 'WaterWatch GI..',
      accentClass: 'icon-accent-indigo',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path></svg>`
    },
    {
      name: 'Franchise O...',
      level: 'House of Franchise (HOF)',
      accentClass: 'icon-accent-amber',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
    },
    {
      name: 'Inventory C...',
      level: 'Stock & Logisti..',
      accentClass: 'icon-accent-emerald',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    },
    {
      name: 'E-Commer...',
      level: 'Online Storefro..',
      accentClass: 'icon-accent-terracotta',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
    },
    {
      name: 'Digital Prod...',
      level: 'Sales & Distrib..',
      accentClass: 'icon-accent-violet',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
    }
  ],

  // 06 // METHODOLOGY & WORKFLOW (Core Competencies & Execution)
  competencies: [
    {
      name: 'AI-Assisted...',
      level: 'Rapid Prototyp..',
      accentClass: 'icon-accent-teal',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"></polygon><circle cx="12" cy="12" r="3.5"></circle></svg>`
    },
    {
      name: 'Team Leade...',
      level: 'Teamwork & Sy..',
      accentClass: 'icon-accent-blue',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    },
    {
      name: 'Analytical ...',
      level: 'Critical Thinking',
      accentClass: 'icon-accent-purple',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
    },
    {
      name: 'Problem So...',
      level: 'Adaptable & R..',
      accentClass: 'icon-accent-amber',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
    },
    {
      name: 'Time Manag...',
      level: 'Punctual & Reli..',
      accentClass: 'icon-accent-emerald',
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`
    }
  ]
};
