/**
 * Andrew G. Palaran — DrewBot AI Knowledge Base & System Persona
 * Detailed biography context, system instructions, and comprehensive offline fallback responses.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.config = window.PortfolioApp.config || {};

window.PortfolioApp.config.DREWBOT_SYSTEM_PROMPT = `You are DrewBot, the brilliant, friendly, witty, and genius AI representative for Andrew G. Palaran.
Your job is to answer any question about Andrew, his background, education, leadership, recent web projects, technical stack, certifications, and business experience.

ABOUT ANDREW G. PALARAN:
- Name: Andrew G. Palaran
- Academic Standing: 4th-year BS Information Technology (BSIT) student at Southern Leyte State University (SLSU, Class of 2027) with an outstanding General Weighted Average (GWA) of 1.403 (Honor / Dean's List standing).
- Location: Bontoc, Southern Leyte, Philippines (open to remote, hybrid, and on-site software engineering and project management roles).
- Current Major Role: Project Manager for WaterWatch (a web-based GIS water monitoring and predictive forecasting system, live at https://waterwatch.tortor.org). Leads system planning, GIS mapping telemetry, and stakeholder delivery.

FEATURED PROJECTS & WORKS:
1. WaterWatch (GIS Water Monitoring & Forecasting):
   - Project Manager leading system planning and GIS platform delivery.
   - Real-time water telemetry, water safety metrics, spatial mapping for households in Southern Leyte, and predictive forecasting models.
   - Live URL: https://waterwatch.tortor.org

2. Apex Horizon Motors (Virtual Showroom & Concierge):
   - Frontend Developer: Built with Vue 3 and Tailwind CSS.
   - Authentic curated luxury car inventory, verified VIN checks, live financing/loan calculator, side-by-side vehicle comparison engine, and 24/7 AI virtual concierge.
   - Live URL: https://sleepy-builder.github.io/car_dealership/

3. EaseStay (Luxury Hotel & Resort Booking):
   - Full-Stack Web Developer.
   - Luxury oceanfront suites booking, real-time rate calculator, amenities galleries, spa booking, and mobile-optimized hospitality UI.
   - Live URL: https://sleepy-builder.github.io/hotel/

4. Uncle Brew PH (Specialty Coffee & Franchise):
   - Coffee brand experience, dynamic drinks menu, interactive pricing, nationwide branch locator, and digital franchise application portal.
   - Live URL: https://sleepy-builder.github.io/unclebrew-website/

5. Big Daddy's Cup / BDC (Cheesy Silog & Orders Portal):
   - Interactive fast-casual comfort food web app with custom cup builder configurator, branch locator, franchise ROI calculator, and customer order tracking portal.
   - Live URL: https://sleepy-builder.github.io/bigdaddycup_website/

6. E-Commerce, Franchising & Inventory Systems:
   - Practical operational experience managing digital product distribution, online retail storefronts, franchise business operations with House of Franchise (HOF), and inventory tracking systems (SKU stock levels, fulfillment rates).

TECHNICAL SKILLS & TOOLKIT:
- Programming Languages: C#, Java, Python, PHP, JavaScript (ES6+), Modern HTML5 & CSS3.
- Frameworks & Libraries: Vue 3, React, Laravel, Node.js, Tailwind CSS, Bootstrap.
- Databases & Infrastructure: MySQL, Supabase, Git, GitHub, VS Code, Spatial GIS Mapping, Antigravity Agentic Dev.
- Artificial Intelligence Stack: ChatGPT, Claude, Gemini, DeepSeek, GitHub Copilot, MS Copilot, Perplexity, Canva AI, Midjourney, Leonardo AI, Higgsfield, Suno, Notion AI, Google Flow.
- Practical Ops: Agile Project Management, Retail Franchise Operations, Inventory Control, E-commerce storefront conversion.

11 VERIFIED CERTIFICATES & CREDENTIALS:
- Google AI Essentials (5-Course Specialization): Coursera verified (Prompting, AI Productivity, Responsible AI, Staying Ahead of the AI Curve).
- IBM: Introduction to Web Development (HTML, CSS, JS) & Data Analytics Foundations.
- University of California, Irvine (UC Irvine): The Arduino Platform and C Programming.
- Akamai Technologies: Introduction to IT Security & Edge Network Security.
- University of Washington: Guided Website Development Project.

CONTACT INFORMATION:
- Email: andrewgpalaran@gmail.com
- Phone: +63 905 736 1525
- GitHub: https://github.com/Sleepy-Builder
- LinkedIn: https://www.linkedin.com/in/andrew-palaran-30b18844a
- Facebook: https://www.facebook.com/andrew.palaran.5

RESPONSE RULES:
- Answer naturally, concisely, enthusiastically, and with genius-level accuracy.
- Highlight Andrew's strengths, adaptability, high GWA (1.403), leadership in WaterWatch GIS, and practical business experience.
- Use clean formatting (bullet points, bold text, clickable HTML links where relevant). Keep answers friendly and directly helpful.`;

window.PortfolioApp.config.getDrewBotFallbackAnswer = function(query) {
  const q = (query || '').toLowerCase().trim();

  // WaterWatch & GIS
  if (q.includes('waterwatch') || q.includes('gis') || q.includes('monitoring') || q.includes('water') || q.includes('forecasting') || q.includes('maasin')) {
    return `<strong>WaterWatch &middot; Web-Based GIS Water Monitoring &amp; Forecasting</strong><br>
    Andrew G. Palaran serves as the <strong>Project Manager</strong> for WaterWatch, leading the system planning, GIS mapping integration, and platform delivery.<br><br>
    Key Highlights:
    <ul>
      <li><strong>Purpose:</strong> Ensuring clean, monitored, and safe water supply across households in Southern Leyte.</li>
      <li><strong>Core Features:</strong> Interactive GIS mapping, real-time water quality and supply telemetry, and predictive forecasting models.</li>
      <li><strong>Live Demo:</strong> <a href="https://waterwatch.tortor.org" target="_blank" rel="noopener noreferrer">waterwatch.tortor.org &#x2197;</a></li>
    </ul>`;
  }

  // Apex Horizon Motors
  if (q.includes('apex') || q.includes('car') || q.includes('dealership') || q.includes('motors') || q.includes('vehicle')) {
    return `<strong>Apex Horizon Motors &middot; Modern Virtual Car Dealership</strong><br>
    A sophisticated automotive platform crafted by Andrew using <strong>Vue 3</strong> and <strong>Tailwind CSS</strong>.<br><br>
    Key Features:
    <ul>
      <li>Curated real-world luxury &amp; sports car inventory with verified VINs.</li>
      <li>Interactive loan/financing payment estimator &amp; amortization calculator.</li>
      <li>Side-by-side vehicle comparison engine &amp; integrated 24/7 virtual concierge.</li>
      <li><strong>Live Demo:</strong> <a href="https://sleepy-builder.github.io/car_dealership/" target="_blank" rel="noopener noreferrer">sleepy-builder.github.io/car_dealership &#x2197;</a></li>
    </ul>`;
  }

  // EaseStay Resort
  if (q.includes('easestay') || q.includes('hotel') || q.includes('resort') || q.includes('booking') || q.includes('room')) {
    return `<strong>EaseStay &middot; Accessible Luxury Hotel &amp; Resort</strong><br>
    A responsive hospitality platform designed and built by Andrew to deliver a five-star booking experience.<br><br>
    Key Features:
    <ul>
      <li>Room &amp; oceanfront suite reservation portal with real-time rate calculations.</li>
      <li>Interactive resort amenities showcase, wellness spa, and gourmet dining galleries.</li>
      <li>Mobile-first architecture built for seamless guest discovery and reservation.</li>
      <li><strong>Live Demo:</strong> <a href="https://sleepy-builder.github.io/hotel/" target="_blank" rel="noopener noreferrer">sleepy-builder.github.io/hotel &#x2197;</a></li>
    </ul>`;
  }

  // House of Franchise (HOF) & Franchising
  if (q.includes('hof') || q.includes('house of franchise') || q.includes('franchis')) {
    return `<strong>House of Franchise (HOF) &middot; Commercial Franchising Experience</strong><br>
    Andrew operates a commercial franchise with <strong>House of Franchise (HOF)</strong>.<br><br>
    Key Highlights:
    <ul>
      <li><strong>Franchise Operations:</strong> Practical management of franchise workflows, inventory tracking, and distribution logistics.</li>
      <li><strong>Digital Sales:</strong> Managing online sales funnels, digital storefronts, and customer inquiries.</li>
      <li><strong>Distinction:</strong> Andrew's actual franchise business is <strong>House of Franchise (HOF)</strong>. (<em>Uncle Brew</em> and <em>Big Daddy's Cup</em> are interactive web applications he engineered as frontend development showcase projects).</li>
    </ul>`;
  }

  // Uncle Brew
  if (q.includes('uncle brew') || q.includes('coffee') || q.includes('cafe')) {
    return `<strong>Uncle Brew PH &middot; Specialty Coffee &amp; Franchise Portal</strong><br>
    A specialty coffee shop web application created by Andrew featuring:
    <ul>
      <li>Interactive drinks menu with dynamic categories and pricing.</li>
      <li>Branch listings with geographic availability across the Philippines.</li>
      <li>Prospective franchisee inquiry and digital onboarding funnel.</li>
      <li><strong>Live Demo:</strong> <a href="https://sleepy-builder.github.io/unclebrew-website/" target="_blank" rel="noopener noreferrer">sleepy-builder.github.io/unclebrew-website &#x2197;</a></li>
    </ul>`;
  }

  // Big Daddy's Cup
  if (q.includes('big daddy') || q.includes('cup') || q.includes('food') || q.includes('restaurant') || q.includes('silog')) {
    return `<strong>Big Daddy's Cup (BDC) &middot; Cheesy Silog &amp; Orders Portal</strong><br>
    A high-energy fast-casual restaurant web app featuring:
    <ul>
      <li>Interactive custom comfort food cup builder configurator.</li>
      <li>Live menu filtering and branch location finder.</li>
      <li>Franchise ROI calculator and customer portal with simulated order tracking.</li>
      <li><strong>Live Demo:</strong> <a href="https://sleepy-builder.github.io/bigdaddycup_website/" target="_blank" rel="noopener noreferrer">sleepy-builder.github.io/bigdaddycup_website &#x2197;</a></li>
    </ul>`;
  }

  // Projects General
  if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('portfolio') || q.includes('demo')) {
    return `Andrew has delivered several live platforms and business systems:
    <ul>
      <li><strong>WaterWatch GIS:</strong> Web-based GIS water monitoring &amp; predictive forecasting (<a href="https://waterwatch.tortor.org" target="_blank" rel="noopener noreferrer">waterwatch.tortor.org &#x2197;</a>).</li>
      <li><strong>Apex Horizon Motors:</strong> Modern Vue 3 &amp; Tailwind car dealership platform (<a href="https://sleepy-builder.github.io/car_dealership/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
      <li><strong>EaseStay Resort:</strong> Luxury hotel booking and hospitality showcase (<a href="https://sleepy-builder.github.io/hotel/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
      <li><strong>Uncle Brew:</strong> Coffee brand experience and franchising portal (<a href="https://sleepy-builder.github.io/unclebrew-website/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
      <li><strong>Big Daddy's Cup:</strong> Food e-commerce with custom cup configurator (<a href="https://sleepy-builder.github.io/bigdaddycup_website/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
      <li><strong>E-Commerce &amp; Inventory:</strong> Hands-on operational experience with digital goods sales and practical stock tracking.</li>
    </ul>`;
  }

  // Tech Stack & Skills
  if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('tech') || q.includes('framework') || q.includes('program') || q.includes('vue') || q.includes('react') || q.includes('python') || q.includes('php') || q.includes('javascript') || q.includes('c#') || q.includes('java')) {
    return `Andrew's technical toolkit spans modern full-stack development, GIS, and hardware integration:
    <ul>
      <li><strong>Frontend:</strong> Vue 3, React, Tailwind CSS, Bootstrap, JavaScript (ES6+), Modern CSS3 &amp; HTML5.</li>
      <li><strong>Backend:</strong> Laravel, PHP, Node.js, Python, C#, Java, RESTful API architecture.</li>
      <li><strong>Database &amp; Data:</strong> MySQL, Supabase, Data Analytics Foundations (IBM certified).</li>
      <li><strong>Specialized:</strong> GIS spatial mapping, Arduino platform &amp; C programming (UC Irvine certified), Network Security (Akamai certified).</li>
      <li><strong>Leadership:</strong> Agile project management (University of Washington certified), stakeholder communications, franchising workflows.</li>
    </ul>`;
  }

  // Education & SLSU & GWA
  if (q.includes('education') || q.includes('study') || q.includes('school') || q.includes('university') || q.includes('slsu') || q.includes('college') || q.includes('gwa') || q.includes('grade') || q.includes('degree') || q.includes('bachelor') || q.includes('graduate')) {
    return `<strong>Academic Background &middot; Southern Leyte State University (SLSU)</strong>
    <ul>
      <li><strong>Degree:</strong> Bachelor of Science in Information Technology (BSIT).</li>
      <li><strong>Current Year:</strong> Fourth Year &middot; Expected Graduation in <strong>2027</strong>.</li>
      <li><strong>Verified Standing:</strong> Outstanding General Weighted Average (GWA) of <strong>1.403</strong> (Honor / Dean's List standing).</li>
      <li><strong>Campus / Location:</strong> Southern Leyte State University, Bontoc, Southern Leyte, Philippines.</li>
    </ul>`;
  }

  // Certifications
  if (q.includes('cert') || q.includes('course') || q.includes('credential') || q.includes('google ai') || q.includes('ibm') || q.includes('uci') || q.includes('akamai')) {
    return `Andrew holds <strong>11 verified industry credentials</strong> from world-class institutions:
    <ul>
      <li><strong>Google AI Essentials:</strong> 5-Course Specialization (Prompting, Productivity with AI, Responsible AI, Staying Ahead of the AI Curve).</li>
      <li><strong>IBM:</strong> Introduction to Web Development (HTML, CSS, JS) &amp; Data Analytics Foundations.</li>
      <li><strong>University of California, Irvine (UC Irvine):</strong> The Arduino Platform and C Programming.</li>
      <li><strong>Akamai:</strong> Network Security &amp; Edge Delivery.</li>
      <li><strong>University of Washington:</strong> Web Project Management.</li>
    </ul>`;
  }

  // Contact & Hire
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('social') || q.includes('github') || q.includes('linkedin') || q.includes('facebook') || q.includes('call') || q.includes('message')) {
    return `Here is how you can get in touch with Andrew G. Palaran:
    <ul>
      <li><strong>Email:</strong> <a href="mailto:andrewgpalaran@gmail.com">andrewgpalaran@gmail.com</a></li>
      <li><strong>Phone:</strong> <a href="tel:+639057361525">+63 905 736 1525</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/Sleepy-Builder" target="_blank" rel="noopener noreferrer">github.com/Sleepy-Builder &#x2197;</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andrew-palaran-30b18844a" target="_blank" rel="noopener noreferrer">linkedin.com/in/andrew-palaran &#x2197;</a></li>
      <li><strong>Facebook:</strong> <a href="https://www.facebook.com/andrew.palaran.5" target="_blank" rel="noopener noreferrer">facebook.com/andrew.palaran.5 &#x2197;</a></li>
      <li><strong>Location:</strong> Bontoc, Southern Leyte (open to remote, hybrid, and on-site opportunities).</li>
    </ul>`;
  }

  // Greetings / Casual
  if (q.startsWith('hi') || q.startsWith('hello') || q.startsWith('hey') || q === 'sup' || q.includes('good morning') || q.includes('good afternoon')) {
    return `Hello there! 🤖 Welcome to Andrew G. Palaran's portfolio. I'm <strong>DrewBot</strong>, his live AI representative. How can I assist you today? You can ask me about his WaterWatch GIS project, his latest web apps (Apex Motors, EaseStay), his skills, or his academic standing!`;
  }

  // Who is Andrew / Bio / Background
  if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('andrew') || q.includes('background') || q.includes('summary')) {
    return `<strong>Andrew G. Palaran</strong> is a 4th-year BS Information Technology student at Southern Leyte State University (SLSU Class of '27) and the <strong>Project Manager for WaterWatch</strong>, a web-based GIS water monitoring and predictive forecasting initiative.<br><br>
    He combines hands-on engineering in modern frontend frameworks (Vue 3, Tailwind) and full-stack systems with strong project delivery and commercial business operations experience (franchising, e-commerce, inventory systems).<br><br>
    He maintains an exceptional <strong>1.403 GWA</strong> and holds 11 verified certifications in AI, web development, data analytics, and IoT.`;
  }

  // Default comprehensive response
  return `Thanks for asking! Andrew G. Palaran is a <strong>Full-Stack Web Developer and Project Manager</strong> based in Southern Leyte, currently leading the <strong>WaterWatch GIS</strong> monitoring platform.<br><br>
  Here are key areas you can ask me more about:
  <ul>
    <li>His leadership on <strong>WaterWatch GIS</strong> water monitoring (<a href="https://waterwatch.tortor.org" target="_blank" rel="noopener noreferrer">waterwatch.tortor.org &#x2197;</a>).</li>
    <li>His recent projects like <strong>Apex Horizon Motors</strong> (Vue 3) and <strong>EaseStay Resort</strong>.</li>
    <li>His <strong>BSIT studies at SLSU</strong> (1.403 GWA).</li>
    <li>His <strong>11 verified certifications</strong> from Google, IBM, UC Irvine, and UW.</li>
    <li>How to get in touch via <a href="mailto:andrewgpalaran@gmail.com">andrewgpalaran@gmail.com</a>.</li>
  </ul>`;
};
