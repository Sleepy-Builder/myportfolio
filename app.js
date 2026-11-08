/* ==========================================================================
   Andrew G. Palaran — Portfolio State, Certificates Vault & Motion Engine
   ========================================================================== */

(() => {
  'use strict';
  const $ = id => document.getElementById(id);

  const defaults = {
    name: 'Andrew G. Palaran',
    role: 'Project Manager & Full-Stack Developer',
    intro: 'Fourth-year BS Information Technology student at Southern Leyte State University (Class of 2027). Project Manager for WaterWatch, a web-based GIS water monitoring and forecasting project, with hands-on experience in web development, e-commerce, franchising, and inventory management.',
    about: 'Fourth-year BS Information Technology student at Southern Leyte State University, expecting to graduate in 2027. Project manager for WaterWatch, a web-based GIS water monitoring and forecasting project. Experience in web development, e-commerce, franchising, and inventory management, with an interest in practical business software.',
    email: 'andrewgpalaran@gmail.com',
    phone: '+63 905 736 1525',
    facebook: 'https://www.facebook.com/andrew.palaran.5',
    github: 'https://github.com/djakshkasj',
    linkedin: '',
    projects: [
      {
        title: 'WaterWatch | GIS Water Monitoring & Forecasting',
        description: 'Web-based project combining GIS mapping, real-time water monitoring, and predictive forecasting. Served as Project Manager leading system planning and delivery.',
        tag: 'GIS · Water Monitoring · Forecasting · Project Manager',
        url: 'https://waterwatch.tortor.org'
      },
      {
        title: 'Uncle Brew | Sample Coffee Shop Website',
        description: 'Created a sample coffee-shop website featuring an interactive drinks menu, branch listings, and franchising content.',
        tag: 'Web Development · Brand UI · Franchising',
        url: 'https://djakshkasj.github.io/unclebrew-website/'
      },
      {
        title: 'E-Commerce, Franchising & Inventory',
        description: 'Experience in online selling and digital product sales, paired with hands-on experience in franchising and inventory management.',
        tag: 'E-Commerce · Digital Sales · Franchising · Inventory',
        url: ''
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
      },
      {
        title: 'Certificate Slot 12 — Academic Honors (GWA 1.403)',
        issuer: 'Southern Leyte State University — BSIT',
        date: '2026',
        category: 'technical',
        image: '',
        pdf: '',
        verifyUrl: ''
      },
      {
        title: 'Certificate Slot 13 — Future Credential',
        issuer: 'Add Issuing Organization / Platform',
        date: '2026',
        category: 'technical',
        image: '',
        pdf: '',
        verifyUrl: ''
      },
      {
        title: 'Certificate Slot 14 — Future Credential',
        issuer: 'Add Issuing Organization / Platform',
        date: '2026',
        category: 'technical',
        image: '',
        pdf: '',
        verifyUrl: ''
      },
      {
        title: 'Certificate Slot 15 — Future Credential',
        issuer: 'Add Issuing Organization / Platform',
        date: '2026',
        category: 'technical',
        image: '',
        pdf: '',
        verifyUrl: ''
      }
    ]
  };

  const storageKey = 'andrew-editorial-portfolio-v8';
  const copy = v => JSON.parse(JSON.stringify(v));

  function normalize(value) {
    const result = copy(defaults);
    if (!value || typeof value !== 'object') return result;
    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      if (typeof value[k] === 'string' && value[k].trim()) result[k] = value[k];
    }
    if (Array.isArray(value.projects)) {
      result.projects = result.projects.map((p, i) => {
        for (const k of ['title', 'description', 'tag', 'url']) {
          if (typeof value.projects[i]?.[k] === 'string') p[k] = value.projects[i][k];
        }
        return p;
      });
    }
    if (Array.isArray(value.certificates)) {
      result.certificates = result.certificates.map((c, i) => {
        for (const k of ['title', 'issuer', 'date', 'category', 'image', 'pdf', 'verifyUrl']) {
          if (typeof value.certificates[i]?.[k] === 'string' && value.certificates[i][k]) {
            c[k] = value.certificates[i][k];
          }
        }
        return c;
      });
    }
    return result;
  }

  let embedded = null;
  try { embedded = JSON.parse($('portfolio-data')?.textContent || 'null'); } catch (e) {}
  let data = normalize(embedded);
  try {
    const stored = localStorage.getItem(storageKey);
    if (!embedded && stored) data = normalize(JSON.parse(stored));
  } catch (e) {}

  let activeCertFilter = 'all';
  let activeCertIndex = 0;

  function safeUrl(value) {
    try {
      const u = new URL(value);
      return ['https:', 'http:'].includes(u.protocol) ? u.href : '';
    } catch (e) {
      return '';
    }
  }

  function hasValidImage(src) {
    return Boolean(src && (src.startsWith('data:image') || src.startsWith('assets/') || src.startsWith('http')));
  }

  function renderCertificates() {
    const grid = $('certs-grid');
    if (!grid) return;
    grid.innerHTML = '';

    data.certificates.forEach((cert, index) => {
      if (activeCertFilter !== 'all' && cert.category !== activeCertFilter) return;

      const article = document.createElement('article');
      article.className = 'studio-card cert-card';
      article.setAttribute('tabindex', '0');
      article.setAttribute('role', 'button');
      article.setAttribute('aria-label', 'View or upload certificate: ' + cert.title);

      const hasImg = hasValidImage(cert.image);
      const previewHtml = hasImg
        ? `<img src="${cert.image}" alt="${cert.title}">`
        : `<div class="cert-placeholder">
             <div class="cert-seal">✦</div>
             <span style="font:600 11.5px var(--font-mono);color:#fdba74">CERTIFICATE SLOT 0${index + 1}</span>
             <small style="color:rgba(255,255,255,0.68);font-size:11px">Click to preview or upload certificate image</small>
           </div>`;

      article.innerHTML = `
        <div class="cert-preview">
          <span class="cert-slot-badge">${hasImg ? 'VERIFIED CREDENTIAL' : 'OPEN SLOT'}</span>
          ${previewHtml}
        </div>
        <div class="cert-body">
          <div>
            <div class="cert-cat">${cert.category.toUpperCase()} CREDENTIAL</div>
            <h3></h3>
            <p class="cert-issuer"></p>
          </div>
          <div class="cert-footer">
            <span class="cert-date"></span>
            <span class="cert-action">${hasImg ? 'View Certificate ↗' : '+ Upload Photo ↗'}</span>
          </div>
        </div>
      `;
      article.querySelector('h3').textContent = cert.title;
      article.querySelector('.cert-issuer').textContent = cert.issuer;
      article.querySelector('.cert-date').textContent = 'ISSUED · ' + cert.date;

      article.addEventListener('click', () => openCertViewer(index));
      article.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCertViewer(index);
        }
      });
      grid.appendChild(article);
    });
  }

  function openCertViewer(index) {
    activeCertIndex = index;
    const cert = data.certificates[index];
    $('cert-viewer-title').textContent = cert.title;
    $('cert-viewer-sub').textContent = `${cert.issuer} · ${cert.date}`;
    const stage = $('cert-viewer-stage');
    if (hasValidImage(cert.image)) {
      stage.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;
    } else {
      stage.innerHTML = `
        <div class="cert-placeholder" style="min-height:220px">
          <div class="cert-seal">0${index + 1}</div>
          <strong style="font-family:var(--font-display);font-size:18px">${cert.title}</strong>
          <span style="color:rgba(255,255,255,0.75);font-size:13px">${cert.issuer}</span>
          <small style="color:#fdba74;font-family:var(--font-mono)">No certificate image attached yet — upload below</small>
        </div>
      `;
    }
    const verifyBtn = $('cert-verify-link');
    if (verifyBtn) {
      if (cert.verifyUrl) {
        verifyBtn.href = cert.verifyUrl;
        verifyBtn.hidden = false;
      } else {
        verifyBtn.hidden = true;
      }
    }
    const pdfBtn = $('cert-pdf-link');
    if (pdfBtn) {
      if (cert.pdf) {
        pdfBtn.href = cert.pdf;
        pdfBtn.hidden = false;
      } else {
        pdfBtn.hidden = true;
      }
    }
    $('cert-viewer').showModal();
  }

  $('close-cert-viewer')?.addEventListener('click', () => $('cert-viewer').close());
  $('quick-cert-upload')?.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      data.certificates[activeCertIndex].image = String(reader.result);
      try { localStorage.setItem(storageKey, JSON.stringify(data)); } catch (err) {}
      renderCertificates();
      openCertViewer(activeCertIndex);
      notify('Certificate image uploaded and saved!');
    };
    reader.readAsDataURL(file);
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCertFilter = btn.dataset.filter;
      renderCertificates();
    });
  });

  function render() {
    if ($('role-label')) $('role-label').textContent = data.role;
    if ($('hero-copy')) $('hero-copy').textContent = data.intro;
    if ($('about-copy')) $('about-copy').textContent = data.about;
    if ($('nav-name')) $('nav-name').textContent = data.name;
    if ($('footer-name')) $('footer-name').textContent = data.name + '.';
    document.title = data.name + ' — ' + data.role;

    const parts = data.name.trim().split(/\s+/);
    if ($('hero-first')) $('hero-first').textContent = parts.length > 1 ? parts.slice(0, -1).join(' ') : data.name;
    if ($('hero-last')) $('hero-last').textContent = parts.length > 1 ? parts[parts.length - 1] : '';

    data.projects.forEach((p, i) => {
      if ($('p' + i + '-title')) $('p' + i + '-title').textContent = p.title || defaults.projects[i].title;
      if ($('p' + i + '-description')) $('p' + i + '-description').textContent = p.description || defaults.projects[i].description;
      if ($('p' + i + '-tag')) $('p' + i + '-tag').textContent = p.tag || defaults.projects[i].tag;
      const link = $('p' + i + '-link');
      if (link) {
        const url = safeUrl(p.url);
        if (url) {
          link.href = url;
          link.hidden = false;
        } else if (i === 2) {
          link.href = '#contact';
          link.hidden = false;
        } else {
          link.hidden = true;
        }
      }
    });

    if ($('contact-email')) {
      $('contact-email').textContent = data.email;
      $('contact-email').href = 'mailto:' + data.email;
    }
    if ($('contact-button')) $('contact-button').href = 'mailto:' + data.email;
    if ($('contact-phone')) {
      $('contact-phone').textContent = data.phone;
      $('contact-phone').href = 'tel:' + data.phone.replace(/[^+0-9]/g, '');
    }

    if ($('facebook-link') && safeUrl(data.facebook)) {
      $('facebook-link').href = safeUrl(data.facebook);
      $('facebook-link').hidden = false;
    }
    if ($('github-link') && safeUrl(data.github)) {
      $('github-link').href = safeUrl(data.github);
      $('github-link').hidden = false;
    }
    if ($('linkedin-link')) {
      if (safeUrl(data.linkedin)) {
        $('linkedin-link').href = safeUrl(data.linkedin);
        $('linkedin-link').hidden = false;
      } else {
        $('linkedin-link').hidden = true;
      }
    }

    renderCertificates();
  }

  // Build Certificate Editor Inputs
  const certFieldsWrap = $('cert-editor-fields');
  if (certFieldsWrap) {
    data.certificates.forEach((_, i) => {
      const block = document.createElement('div');
      block.className = 'field full';
      block.style.cssText = 'padding:14px;border:1px solid var(--border-strong);border-radius:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px';
      block.innerHTML = `
        <label class="field">Slot 0${i + 1} Title<input name="c${i}title" maxlength="100"></label>
        <label class="field">Issuer / Organization<input name="c${i}issuer" maxlength="100"></label>
        <label class="field">Year / Date<input name="c${i}date" maxlength="40"></label>
        <label class="field">Category
          <select name="c${i}category">
            <option value="ai">Google AI &amp; Prompting</option>
            <option value="technical">Web &amp; C Programming</option>
          </select>
        </label>
        <label class="field full">Upload Certificate Photo (optional)<input type="file" accept="image/*" data-cert-upload="${i}"></label>
      `;
      certFieldsWrap.appendChild(block);
    });

    certFieldsWrap.querySelectorAll('input[data-cert-upload]').forEach(input => {
      input.addEventListener('change', e => {
        const idx = Number(input.dataset.certUpload);
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          data.certificates[idx].image = String(reader.result);
          notify(`Slot 0${idx + 1} image attached.`);
        };
        reader.readAsDataURL(file);
      });
    });
  }

  const form = $('editor-form'), dialog = $('editor');
  function populate() {
    if (!form) return;
    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      if (form.elements.namedItem(k)) form.elements.namedItem(k).value = data[k] || '';
    }
    data.projects.forEach((p, i) => {
      for (const k of ['title', 'description', 'tag', 'url']) {
        if (form.elements.namedItem('p' + i + k)) form.elements.namedItem('p' + i + k).value = p[k] || '';
      }
    });
    data.certificates.forEach((c, i) => {
      for (const k of ['title', 'issuer', 'date', 'category']) {
        if (form.elements.namedItem('c' + i + k)) form.elements.namedItem('c' + i + k).value = c[k] || '';
      }
    });
  }

  function readForm() {
    const result = copy(data);
    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      result[k] = form.elements.namedItem(k).value.trim();
    }
    result.projects = result.projects.map((p, i) => {
      for (const k of ['title', 'description', 'tag', 'url']) {
        p[k] = form.elements.namedItem('p' + i + k).value.trim();
      }
      return p;
    });
    result.certificates = result.certificates.map((c, i) => {
      for (const k of ['title', 'issuer', 'date', 'category']) {
        c[k] = form.elements.namedItem('c' + i + k).value.trim();
      }
      return c;
    });
    return result;
  }

  let toastTimer;
  function notify(message) {
    const t = $('toast');
    if (!t) return;
    t.textContent = message;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (t.hidden = true), 4200);
  }

  function save(showMessage = true) {
    if (!form.reportValidity()) return false;
    data = readForm();
    render();
    try { localStorage.setItem(storageKey, JSON.stringify(data)); } catch (e) {}
    if (showMessage) notify('Portfolio & certificates saved!');
    return true;
  }

  $('edit-toggle')?.addEventListener('click', () => { populate(); dialog.showModal(); });
  $('manage-certs-btn')?.addEventListener('click', () => { populate(); dialog.showModal(); });
  $('close-editor')?.addEventListener('click', () => dialog.close());
  form?.addEventListener('submit', e => { e.preventDefault(); if (save()) dialog.close(); });

  $('reset')?.addEventListener('click', () => {
    if (!confirm('Reset portfolio and certificate slots to defaults?')) return;
    data = copy(defaults);
    try { localStorage.removeItem(storageKey); } catch (e) {}
    populate();
    render();
    notify('Defaults restored.');
  });

  // Theme Switcher (Warm Editorial Light <-> Soft Slate Studio)
  const themeBtn = $('theme-toggle');
  themeBtn?.addEventListener('click', () => {
    const html = document.documentElement;
    const isSlate = html.getAttribute('data-theme') === 'slate';
    if (isSlate) {
      html.removeAttribute('data-theme');
      themeBtn.textContent = '◐ Slate Mode';
    } else {
      html.setAttribute('data-theme', 'slate');
      themeBtn.textContent = '☀ Editorial Light';
    }
  });

  // Mobile Menu
  const menuBtn = $('menu-toggle'), nav = $('navigation');
  menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

  // Typewriter Effect
  const phrases = [
    'GIS Water Monitoring & Forecasting',
    'Full-Stack Web Applications',
    'E-Commerce & Franchise Systems',
    'Inventory & Business Software'
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const typeEl = $('typewriter-text');
  function tickTypewriter() {
    if (!typeEl) return;
    const current = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      typeEl.textContent = current.slice(0, charIdx);
      if (charIdx >= current.length) {
        deleting = true;
        setTimeout(tickTypewriter, 2100);
        return;
      }
      setTimeout(tickTypewriter, 52);
    } else {
      charIdx--;
      typeEl.textContent = current.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tickTypewriter, 300);
        return;
      }
      setTimeout(tickTypewriter, 26);
    }
  }
  setTimeout(tickTypewriter, 1200);

  // Motion Engine: 3D Tilt, Spotlight Cards, Scroll Reveal & Ambient Particles
  const root = document.documentElement;
  const motionToggle = $('motion-toggle');
  let motionEnabled = true;

  document.addEventListener('pointermove', e => {
    if (!motionEnabled) return;
    document.querySelectorAll('.studio-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  const portrait = $('tilt-portrait');
  if (portrait) {
    portrait.addEventListener('pointermove', e => {
      if (!motionEnabled) return;
      const r = portrait.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      portrait.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    portrait.addEventListener('pointerleave', () => {
      portrait.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
    });
  }

  const revealItems = document.querySelectorAll('.hero-shell, .metrics-strip, .section-head, .service-card, .project-card, .skill-row, .edu-card, .contact-box');
  revealItems.forEach((el, i) => {
    el.classList.add('motion-reveal');
    el.style.setProperty('--reveal-delay', `${(i % 4) * 65}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });

  root.classList.add('motion-ready');
  revealItems.forEach(el => observer.observe(el));

  const sections = [...document.querySelectorAll('#services, #work, #skills, #certificates, #about, #contact')];
  const navLinks = [...document.querySelectorAll('#navigation a')];

  function onScroll() {
    const vh = window.innerHeight || root.clientHeight;
    const max = Math.max(1, root.scrollHeight - vh);
    root.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, window.scrollY / max)).toFixed(4));
    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top < vh * 0.42) current = s.id;
    });
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Subtle Warm Ambient Floating Orbs/Nodes Canvas
  const canvas = $('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, nodes = [];
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.min(36, Math.floor((width * height) / 38000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1
      }));
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
      if (motionEnabled) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(234, 88, 12, 0.28)';
          ctx.fill();

          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j];
            const dist = Math.hypot(n.x - m.x, n.y - m.y);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(m.x, m.y);
              ctx.strokeStyle = `rgba(234, 88, 12, ${(1 - dist / 140) * 0.1})`;
              ctx.stroke();
            }
          }
        }
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    motionToggle?.addEventListener('click', () => {
      motionEnabled = !motionEnabled;
      motionToggle.setAttribute('aria-pressed', String(motionEnabled));
      motionToggle.textContent = motionEnabled ? '⚡ Motion: ON' : '⚡ Motion: OFF';
      root.classList.toggle('motion-ready', motionEnabled);
      if (!motionEnabled) {
        ctx.clearRect(0, 0, width, height);
        revealItems.forEach(el => el.classList.add('is-visible'));
      }
    });
  }

  render();
})();
