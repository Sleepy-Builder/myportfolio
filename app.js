/* ==========================================================================
   Andrew G. Palaran \u2014 Portfolio State, Certificates Vault & Motion Engine
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
    github: 'https://github.com/Sleepy-Builder',
    linkedin: 'https://www.linkedin.com/in/andrew-palaran-30b18844a',
    projects: [
      {
        title: 'WaterWatch | GIS Water Monitoring & Forecasting',
        description: 'Web-based project combining GIS mapping, real-time water monitoring, and predictive forecasting. Served as Project Manager leading system planning and delivery.',
        tag: 'GIS \u00B7 Water Monitoring \u00B7 Forecasting \u00B7 Project Manager',
        url: 'https://waterwatch.tortor.org'
      },
      {
        title: 'Apex Horizon Motors | Virtual Showroom & Concierge',
        description: 'Modern automotive dealership platform built with Vue 3 and Tailwind CSS featuring authentic vehicle inventories, verified VINs, live finance calculation, side-by-side vehicle comparisons, and an AI virtual concierge.',
        tag: 'Vue 3 \u00B7 Tailwind CSS \u00B7 Automotive E-Commerce \u00B7 Interactive Concierge',
        url: 'https://sleepy-builder.github.io/car_dealership/'
      },
      {
        title: 'EaseStay | Luxury Hotel & Resort',
        description: 'Modern luxury hotel and resort web application featuring room & suite bookings, interactive amenities showcases, fine dining galleries, and mobile-optimized guest hospitality UI.',
        tag: 'Web Development \u00B7 Hospitality UI \u00B7 Booking System \u00B7 Responsive Design',
        url: 'https://sleepy-builder.github.io/hotel/'
      },
      {
        title: 'Uncle Brew | Sample Coffee Shop Website',
        description: 'Created a sample coffee-shop website featuring an interactive drinks menu, branch listings, and franchising content.',
        tag: 'Web Development \u00B7 Brand UI \u00B7 Franchising',
        url: 'https://sleepy-builder.github.io/unclebrew-website/'
      },
      {
        title: 'Big Daddy\'s Cup | Cheesy Silog & Orders Portal',
        description: 'Interactive fast-casual restaurant web app featuring dynamic menu filtering, custom cup builder configurator, branch locator, franchise ROI calculator, and an authenticated customer portal with simulated real-time order tracking.',
        tag: 'Web Development \u00B7 Brand UI \u00B7 Food E-Commerce \u00B7 Order Tracking',
        url: 'https://sleepy-builder.github.io/bigdaddycup_website/'
      },
      {
        title: 'E-Commerce, Franchising & Inventory',
        description: 'Experience in online selling and digital product sales, paired with hands-on experience in franchising and inventory management.',
        tag: 'E-Commerce \u00B7 Digital Sales \u00B7 Franchising \u00B7 Inventory',
        url: ''
      }
    ],
    certificates: [
      {
        title: 'Google AI Essentials (5-Course Specialization)',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-ai.png',
        pdf: 'assets/cert-google-ai.pdf',
        verifyUrl: 'https://coursera.org/verify/specialization/VJZ30B6IIG8K'
      },
      {
        title: 'Introduction to Web Development with HTML, CSS, JavaScript',
        issuer: 'IBM \u00B7 Coursera',
        date: 'Apr 1, 2026',
        category: 'technical',
        image: 'assets/cert-ibm-web.png',
        pdf: 'assets/cert-ibm-web.pdf',
        verifyUrl: 'https://coursera.org/verify/TPWZOE7G3R73'
      },
      {
        title: 'The Arduino Platform and C Programming',
        issuer: 'University of California, Irvine (UC Irvine) \u00B7 Coursera',
        date: 'Mar 16, 2026',
        category: 'technical',
        image: 'assets/cert-uci-arduino.png',
        pdf: 'assets/cert-uci-arduino.pdf',
        verifyUrl: 'https://coursera.org/verify/P289W2Y88QT8'
      },
      {
        title: 'Introduction to AI',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-intro-ai.png',
        pdf: 'assets/cert-google-intro-ai.pdf',
        verifyUrl: 'https://coursera.org/verify/HBN6K6VNFH3U'
      },
      {
        title: 'Maximize Productivity With AI Tools',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-productivity.png',
        pdf: 'assets/cert-google-productivity.pdf',
        verifyUrl: 'https://coursera.org/verify/R26V8BUCZLY7'
      },
      {
        title: 'Discover the Art of Prompting',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-prompting.png',
        pdf: 'assets/cert-google-prompting.pdf',
        verifyUrl: 'https://coursera.org/verify/Q4U8GQ1F6TQ7'
      },
      {
        title: 'Use AI Responsibly',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-responsible-ai.png',
        pdf: 'assets/cert-google-responsible-ai.pdf',
        verifyUrl: 'https://coursera.org/verify/8Q7DVDR4A1XM'
      },
      {
        title: 'Stay Ahead of the AI Curve',
        issuer: 'Google \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'ai',
        image: 'assets/cert-google-ai-curve.png',
        pdf: 'assets/cert-google-ai-curve.pdf',
        verifyUrl: 'https://coursera.org/verify/CH19GKWDIUXO'
      },
      {
        title: 'Data Analytics Foundations: Turn Data into Insights',
        issuer: 'IBM \u00B7 Coursera',
        date: 'Apr 8, 2026',
        category: 'technical',
        image: 'assets/cert-ibm-data-analytics.png',
        pdf: 'assets/cert-ibm-data-analytics.pdf',
        verifyUrl: 'https://coursera.org/verify/QUM433ZCUD9Y'
      },
      {
        title: 'Introduction to IT Security',
        issuer: 'Akamai Technologies, Inc. \u00B7 Coursera',
        date: 'Apr 23, 2026',
        category: 'technical',
        image: 'assets/cert-akamai-security.png',
        pdf: 'assets/cert-akamai-security.pdf',
        verifyUrl: 'https://coursera.org/verify/VYZLK7HEK2FH'
      },
      {
        title: 'Guided Website Development Project',
        issuer: 'University of Washington \u00B7 Coursera',
        date: 'May 7, 2026',
        category: 'technical',
        image: 'assets/cert-uw-web-project.png',
        pdf: 'assets/cert-uw-web-project.pdf',
        verifyUrl: 'https://coursera.org/verify/C53M79XNXGFQ'
      }
    ]
  };

  const storageKey = 'andrew-editorial-portfolio-v14';
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
      const validCustomCerts = value.certificates.filter(c => c && (hasValidImage(c.image) || c.pdf || (c.title && !c.title.includes('Slot'))));
      if (validCustomCerts.length > 0) {
        result.certificates = result.certificates.map((c, i) => {
          if (!validCustomCerts[i]) return c;
          for (const k of ['title', 'issuer', 'date', 'category', 'image', 'pdf', 'verifyUrl']) {
            if (typeof validCustomCerts[i][k] === 'string' && validCustomCerts[i][k]) {
              c[k] = validCustomCerts[i][k];
            }
          }
          return c;
        });
      }
    }
    result.certificates = result.certificates.filter(c => hasValidImage(c.image) || c.pdf || (c.title && !c.title.includes('Slot')));
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

  function updateCarouselNav() {
    const track = $('certs-grid');
    if (!track) return;
    const certCounter = $('cert-counter');
    // Only count real cards (not clones)
    const cards = track.querySelectorAll('.cert-card:not(.cert-clone)');

    if (certCounter) {
      certCounter.textContent = cards.length > 0 ? `${cards.length} certs` : '\u2014';
    }
  }

  function renderCertificates() {
    const grid = $('certs-grid');
    if (!grid) return;
    grid.innerHTML = '';

    data.certificates.forEach((cert, index) => {
      if (!hasValidImage(cert.image) && !cert.pdf) return;
      if (activeCertFilter !== 'all' && cert.category !== activeCertFilter) return;

      const article = document.createElement('article');
      article.className = 'studio-card cert-card';
      article.setAttribute('tabindex', '0');
      article.setAttribute('role', 'button');
      article.setAttribute('aria-label', 'View certificate: ' + cert.title);
      article.dataset.certIdx = index;

      const hasImg = hasValidImage(cert.image);
      const previewHtml = hasImg
        ? `<img src="${cert.image}" alt="${cert.title}" loading="lazy">`
        : `<div class="cert-placeholder">
             <div class="cert-seal">\u2726</div>
             <span style="font:600 11.5px var(--font-mono);color:#fdba74">VERIFIED CREDENTIAL</span>
             <small style="color:rgba(255,255,255,0.68);font-size:11px">${cert.issuer}</small>
           </div>`;

      article.innerHTML = `
        <div class="cert-preview">
          <span class="cert-slot-badge">VERIFIED CREDENTIAL</span>
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
            <span class="cert-action">View Certificate \u2197</span>
          </div>
        </div>
      `;
      article.querySelector('h3').textContent = cert.title;
      article.querySelector('.cert-issuer').textContent = cert.issuer;
      article.querySelector('.cert-date').textContent = 'ISSUED \u00B7 ' + cert.date;

      article.addEventListener('click', (e) => handleCertCardClick(index, e));
      article.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCertViewer(index);
        }
      });
      grid.appendChild(article);
    });

    updateCarouselNav();
    // Init the infinite belt after cards are rendered
    setTimeout(initCertBelt, 60);
  }

  function openCertViewer(index) {
    activeCertIndex = index;
    const cert = data.certificates[index];
    $('cert-viewer-title').textContent = cert.title;
    $('cert-viewer-sub').textContent = `${cert.issuer} \u00B7 ${cert.date}`;
    const stage = $('cert-viewer-stage');
    if (hasValidImage(cert.image)) {
      stage.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;
    } else {
      stage.innerHTML = `
        <div class="cert-placeholder" style="min-height:220px">
          <div class="cert-seal">0${index + 1}</div>
          <strong style="font-family:var(--font-display);font-size:18px">${cert.title}</strong>
          <span style="color:rgba(255,255,255,0.75);font-size:13px">${cert.issuer}</span>
          <small style="color:#fdba74;font-family:var(--font-mono)">No certificate image attached yet \u2014 upload below</small>
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

  // ── Certificates Carousel Navigation Engine ──────────────────────
  let currentPos     = 0;
  let targetPos      = 0;
  let beltSpeed      = 0.28;   // Smooth ambient drift (~16px/s)
  let isHovered      = false;
  let isPointerDown  = false;
  let isDragging     = false;
  let wasDragging    = false;
  let startX         = 0;
  let lastX          = 0;
  let dragStartPos   = 0;
  let velocity       = 0;
  let beltRafId      = null;
  let beltHalfW      = 0;
  let resumeTimer    = null;
  let certEventsInit = false;

  function getCardStep() {
    const track = $('certs-grid');
    const firstCard = track?.querySelector('.cert-card');
    if (firstCard) {
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || '24') || 24;
      return firstCard.offsetWidth + gap;
    }
    return 344;
  }

  function handleCertCardClick(index, e) {
    if (wasDragging) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }
    openCertViewer(index);
  }

  function slideNextCert() {
    const step = getCardStep();
    targetPos += step;
    isHovered = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { isHovered = false; }, 3500);
  }

  function slidePrevCert() {
    const step = getCardStep();
    targetPos -= step;
    isHovered = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { isHovered = false; }, 3500);
  }

  function initCertBelt() {
    const track = $('certs-grid');
    if (!track) return;

    // Remove any old clones
    track.querySelectorAll('.cert-clone').forEach(el => el.remove());

    const realCards = Array.from(track.querySelectorAll('.cert-card'));
    if (realCards.length === 0) return;

    // Clone all real cards for infinite seamless wrap
    realCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('cert-clone');
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('tabindex', '-1');
      const idx = parseInt(card.dataset.certIdx || 0, 10);
      clone.addEventListener('click', (e) => handleCertCardClick(idx, e));
      track.appendChild(clone);
    });

    const step = getCardStep();
    beltHalfW = realCards.length * step;
    if (beltHalfW <= 0) beltHalfW = track.scrollWidth / 2;

    currentPos = 0;
    targetPos = 0;
    track.style.transform = 'translate3d(0px, 0, 0)';

    if (beltRafId) cancelAnimationFrame(beltRafId);
    beltRafId = requestAnimationFrame(beltTick);

    updateCarouselNav();
    if (!certEventsInit) {
      setupCertInteraction();
      certEventsInit = true;
    }
  }

  function isCarouselHovered() {
    const track = $('certs-grid');
    const windowEl = document.querySelector('.certs-carousel-window');
    const shellEl = $('cert-carousel-shell');
    try {
      if (track?.matches(':hover')) return true;
      if (windowEl?.matches(':hover')) return true;
      if (shellEl?.matches(':hover')) return true;
    } catch (e) {}
    return isHovered;
  }

  function beltTick() {
    const track = $('certs-grid');
    if (!track) return;
    const viewer = $('cert-viewer');
    const isModalOpen = Boolean(viewer && viewer.open);

    if (beltHalfW > 0) {
      if (!isPointerDown) {
        const diff = targetPos - currentPos;
        if (Math.abs(diff) > 0.25) {
          currentPos += diff * 0.14;
        } else {
          currentPos = targetPos;
          if (!isCarouselHovered() && !isModalOpen) {
            targetPos += beltSpeed;
            currentPos = targetPos;
          }
        }

        while (targetPos >= beltHalfW) {
          targetPos -= beltHalfW;
          currentPos -= beltHalfW;
        }
        while (targetPos < 0) {
          targetPos += beltHalfW;
          currentPos += beltHalfW;
        }
      }

      const renderOffset = ((currentPos % beltHalfW) + beltHalfW) % beltHalfW;
      track.style.transform = `translate3d(${-renderOffset}px, 0, 0)`;
    }

    beltRafId = requestAnimationFrame(beltTick);
  }

  // ── Drag, Touch Swipe, Wheel & Keyboard Navigation ───────────────
  function setupCertInteraction() {
    const track = $('certs-grid');
    const shell = $('cert-carousel-shell');
    const windowEl = document.querySelector('.certs-carousel-window');
    if (!track || !shell) return;

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
      isPointerDown = true;
      isDragging = false;
      startX = e.clientX;
      lastX = e.clientX;
      dragStartPos = currentPos;
      velocity = 0;
      track.classList.add('is-dragging');
      try { track.setPointerCapture(e.pointerId); } catch (err) {}
    };

    const onPointerMove = (e) => {
      if (!isPointerDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 6) {
        isDragging = true;
      }
      velocity = e.clientX - lastX;
      lastX = e.clientX;
      currentPos = dragStartPos - dx;
      targetPos = currentPos;
    };

    const onPointerUp = (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      track.classList.remove('is-dragging');
      try {
        if (e?.pointerId && track.hasPointerCapture?.(e.pointerId)) {
          track.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}

      if (isDragging) {
        wasDragging = true;
        setTimeout(() => { wasDragging = false; }, 120);
        targetPos = currentPos - velocity * 9;
      }
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { isHovered = false; }, 2500);
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);

    // Mouse wheel / trackpad horizontal scrolling
    shell.addEventListener('wheel', (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontal || e.shiftKey) {
        e.preventDefault();
        const delta = isHorizontal ? e.deltaX : e.deltaY;
        targetPos += delta * 1.1;
        isHovered = true;
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => { isHovered = false; }, 2000);
      }
    }, { passive: false });

    // Hover listeners to pause drift on hover
    [shell, windowEl, track].forEach(el => {
      if (!el) return;
      el.addEventListener('mouseenter', () => { isHovered = true; });
      el.addEventListener('mouseleave', () => { isHovered = false; });
      el.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
      el.addEventListener('touchend', () => {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => { isHovered = false; }, 2500);
      }, { passive: true });
    });

    // Keyboard arrow keys (ArrowLeft / ArrowRight)
    window.addEventListener('keydown', (e) => {
      if ($('cert-viewer')?.open) return;
      const isFocused = document.activeElement === track || track.contains(document.activeElement);
      if (isFocused || isCarouselHovered()) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          slideNextCert();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          slidePrevCert();
        }
      }
    });

    // Manual navigation buttons (floating side chevrons & toolbar buttons)
    $('cert-side-prev')?.addEventListener('click', slidePrevCert);
    $('cert-side-next')?.addEventListener('click', slideNextCert);
    $('cert-prev-btn')?.addEventListener('click', slidePrevCert);
    $('cert-next-btn')?.addEventListener('click', slideNextCert);
  }

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCertFilter = btn.dataset.filter;
      isHovered = false;
      renderCertificates();
      setTimeout(initCertBelt, 60);
    });
  });

  // ── Projects 3D Coverflow Carousel Engine ────────────────────────
  let activeProjIndex = 0;

  function updateProjectsCoverflow(newIndex) {
    const projCards = document.querySelectorAll('.project-showcase-card');
    const projDots = document.querySelectorAll('.proj-dot');
    const totalProjects = projCards.length;
    if (totalProjects === 0) return;

    activeProjIndex = (newIndex + totalProjects) % totalProjects;

    projCards.forEach((card, idx) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      if (idx === activeProjIndex) {
        card.classList.add('is-active');
        card.setAttribute('aria-hidden', 'false');
      } else if (idx === (activeProjIndex - 1 + totalProjects) % totalProjects) {
        card.classList.add('is-prev');
        card.setAttribute('aria-hidden', 'true');
      } else if (idx === (activeProjIndex + 1) % totalProjects) {
        card.classList.add('is-next');
        card.setAttribute('aria-hidden', 'true');
      } else {
        card.classList.add('is-hidden');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    projDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeProjIndex);
      dot.setAttribute('aria-selected', String(idx === activeProjIndex));
    });
  }

  function initProjectsCoverflow() {
    const projCards = document.querySelectorAll('.project-showcase-card');
    const projDots = document.querySelectorAll('.proj-dot');

    projCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        if (card.classList.contains('is-prev')) {
          updateProjectsCoverflow(activeProjIndex - 1);
        } else if (card.classList.contains('is-next')) {
          updateProjectsCoverflow(activeProjIndex + 1);
        }
      });
    });

    $('proj-prev')?.addEventListener('click', () => updateProjectsCoverflow(activeProjIndex - 1));
    $('proj-next')?.addEventListener('click', () => updateProjectsCoverflow(activeProjIndex + 1));

    projDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIdx = parseInt(dot.dataset.slide, 10);
        updateProjectsCoverflow(targetIdx);
      });
    });

    // Touch swipe support
    const stageEl = $('projects-stage');
    if (stageEl) {
      let touchStartX = 0;
      stageEl.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      stageEl.addEventListener('touchend', (e) => {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diffX) > 40) {
          if (diffX > 0) {
            updateProjectsCoverflow(activeProjIndex - 1);
          } else {
            updateProjectsCoverflow(activeProjIndex + 1);
          }
        }
      }, { passive: true });
    }

    updateProjectsCoverflow(0);
  }

  initProjectsCoverflow();

  function render() {
    if ($('role-label')) $('role-label').textContent = data.role;
    if ($('hero-copy')) $('hero-copy').textContent = data.intro;
    if ($('about-copy')) $('about-copy').textContent = data.about;
    if ($('nav-name')) $('nav-name').textContent = data.name;
    if ($('footer-name')) $('footer-name').textContent = data.name + '.';
    document.title = data.name + ' \u2014 ' + data.role;

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
        } else if (!p.url) {
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
        <label class="field">Certificate ${i + 1} Title<input name="c${i}title" maxlength="100"></label>
        <label class="field">Issuer / Organization<input name="c${i}issuer" maxlength="100"></label>
        <label class="field">Year / Date<input name="c${i}date" maxlength="40"></label>
        <label class="field">Category
          <select name="c${i}category">
            <option value="ai">Google AI &amp; Prompting</option>
            <option value="technical">Web, Data &amp; Security</option>
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
          notify(`Certificate ${idx + 1} image attached.`);
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
    if (!confirm('Reset portfolio and certificates to defaults?')) return;
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
      themeBtn.textContent = '\u25D0 Slate Mode';
    } else {
      html.setAttribute('data-theme', 'slate');
      themeBtn.textContent = '\u2600 Editorial Light';
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

  const revealItems = document.querySelectorAll('.hero-shell, .metrics-strip, .section-head, .service-card, .project-card, .bento-card, .skill-row, .edu-card, .contact-box');
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

  const sections = [...document.querySelectorAll('#services, #skills, #work, #certificates, #about, #contact')];
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
      motionToggle.textContent = motionEnabled ? '\u26A1 Motion: ON' : '\u26A1 Motion: OFF';
      root.classList.toggle('motion-ready', motionEnabled);
      if (!motionEnabled) {
        ctx.clearRect(0, 0, width, height);
        revealItems.forEach(el => el.classList.add('is-visible'));
      }
    });
  }

  // ── DrewBot AI Profile Bot Engine ─────────────────────────────────
  function initDrewBot() {
    const form = $('drewbot-chat-form');
    const input = $('drewbot-input');
    const windowEl = $('drewbot-chat-window');
    const clearBtn = $('drewbot-clear-btn');
    const closeBtn = $('drewbot-close-btn');
    const popup = $('drewbot-chat-popup');
    const trigger = $('drewbot-chat-trigger');
    const heroTrigger = $('hero-drewbot-trigger');
    const profileTrigger = $('drewbot-profile-trigger');
    const chips = document.querySelectorAll('.drewbot-chip');
    if (!form || !input || !windowEl) return;

    let isTyping = false;

    // Messenger Pop-up Toggle Logic
    function openDrewBotChat() {
      if (!popup) return;
      popup.classList.remove('is-closed');
      popup.setAttribute('aria-hidden', 'false');
      trigger?.classList.add('is-active');
      setTimeout(() => {
        input?.focus();
        windowEl.scrollTop = windowEl.scrollHeight;
      }, 180);
    }

    function closeDrewBotChat() {
      if (!popup) return;
      popup.classList.add('is-closed');
      popup.setAttribute('aria-hidden', 'true');
      trigger?.classList.remove('is-active');
    }

    function toggleDrewBotChat() {
      if (!popup) return;
      if (popup.classList.contains('is-closed')) {
        openDrewBotChat();
      } else {
        closeDrewBotChat();
      }
    }

    trigger?.addEventListener('click', toggleDrewBotChat);
    closeBtn?.addEventListener('click', closeDrewBotChat);
    heroTrigger?.addEventListener('click', (e) => { e.preventDefault(); openDrewBotChat(); });
    profileTrigger?.addEventListener('click', (e) => { e.preventDefault(); openDrewBotChat(); });

    // Close when pressing Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popup && !popup.classList.contains('is-closed')) {
        closeDrewBotChat();
      }
    });

    // Knowledge Base responses generator
    function getDrewBotAnswer(query) {
      const q = query.toLowerCase().trim();

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

      // Recent Projects & Specific Projects
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

      if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('portfolio') || q.includes('demo')) {
        return `Andrew has delivered several live platforms and business systems:
        <ul>
          <li><strong>WaterWatch GIS:</strong> Web-based GIS water monitoring &amp; predictive forecasting (<a href="https://waterwatch.tortor.org" target="_blank" rel="noopener noreferrer">waterwatch.tortor.org &#x2197;</a>).</li>
          <li><strong>Apex Horizon Motors:</strong> Modern Vue 3 &amp; Tailwind car dealership platform (<a href="https://sleepy-builder.github.io/car_dealership/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
          <li><strong>EaseStay Resort:</strong> Luxury hotel booking and hospitality showcase (<a href="https://sleepy-builder.github.io/hotel/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
          <li><strong>Uncle Brew:</strong> Coffee brand experience and franchising portal (<a href="https://sleepy-builder.github.io/unclebrew-website/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
          <li><strong>Big Daddy's Cup:</strong> Food e-commerce with custom cup configurator (<a href="https://sleepy-builder.github.io/bigdaddycup_website/" target="_blank" rel="noopener noreferrer">Live Demo &#x2197;</a>).</li>
          <li><strong>E-Commerce &amp; Inventory:</strong> Hands-on operational experience with digital goods sales and practical stock tracking.</li>
        </ul>
        You can explore the interactive 3D Coverflow carousel in the <strong>Recent Projects</strong> section above!`;
      }

      // Tech Stack & Skills
      if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('tech') || q.includes('framework') || q.includes('program') || q.includes('vue') || q.includes('react') || q.includes('python') || q.includes('php') || q.includes('javascript') || q.includes('c++')) {
        return `Andrew's technical toolkit spans modern full-stack development, GIS, and hardware integration:
        <ul>
          <li><strong>Frontend:</strong> Vue 3, React, Tailwind CSS, Bootstrap, JavaScript (ES6+), Modern CSS3 &amp; HTML5.</li>
          <li><strong>Backend:</strong> Laravel, PHP, Node.js, Python, RESTful API architecture.</li>
          <li><strong>Database &amp; Data:</strong> MySQL, SQL, Data Analytics Foundations (IBM certified).</li>
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
        </ul>
        You can inspect every official certificate and verification link in the <strong>Certificates Vault</strong> carousel above!`;
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
        return `Hello there! 🤖 Welcome to Andrew G. Palaran's portfolio. I'm <strong>DrewBot</strong>, his virtual AI representative. How can I assist you today? You can ask me about his WaterWatch GIS project, his latest web apps (Apex Motors, EaseStay), his skills, or his academic standing!`;
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
        <li>His leadership on <strong>WaterWatch GIS</strong> water monitoring.</li>
        <li>His recent projects like <strong>Apex Horizon Motors</strong> (Vue 3) and <strong>EaseStay Resort</strong>.</li>
        <li>His <strong>BSIT studies at SLSU</strong> (1.403 GWA).</li>
        <li>His <strong>11 verified certifications</strong> from Google, IBM, UC Irvine, and UW.</li>
        <li>How to get in touch via <a href="mailto:andrewgpalaran@gmail.com">andrewgpalaran@gmail.com</a>.</li>
      </ul>`;
    }

    // Append a message to the chat window
    function appendMessage(sender, htmlContent, isBot = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `drewbot-msg ${isBot ? 'bot-msg' : 'user-msg'}`;
      msgDiv.innerHTML = `
        <div class="drewbot-msg-avatar">${isBot ? '🤖' : 'You'}</div>
        <div class="drewbot-msg-body">${htmlContent}</div>
      `;
      windowEl.appendChild(msgDiv);
      windowEl.scrollTop = windowEl.scrollHeight;
      return msgDiv;
    }

    // Streaming typing animation for bot replies
    function streamBotReply(htmlAnswer) {
      isTyping = true;
      const indicator = document.createElement('div');
      indicator.className = 'drewbot-msg bot-msg';
      indicator.id = 'drewbot-indicator';
      indicator.innerHTML = `
        <div class="drewbot-msg-avatar">🤖</div>
        <div class="drewbot-msg-body">
          <div class="drewbot-typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
      `;
      windowEl.appendChild(indicator);
      windowEl.scrollTop = windowEl.scrollHeight;

      setTimeout(() => {
        indicator.remove();
        appendMessage('DrewBot', htmlAnswer, true);
        isTyping = false;
      }, 400);
    }

    // Send question handler
    function handleSend(questionText) {
      const cleanQ = questionText.trim();
      if (!cleanQ || isTyping) return;

      appendMessage('You', `<p>${cleanQ.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`, false);
      input.value = '';

      const answer = getDrewBotAnswer(cleanQ);
      streamBotReply(answer);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSend(input.value);
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.dataset.prompt;
        if (prompt) handleSend(prompt);
      });
    });

    clearBtn?.addEventListener('click', () => {
      windowEl.innerHTML = `
        <div class="drewbot-msg bot-msg">
          <div class="drewbot-msg-avatar">🤖</div>
          <div class="drewbot-msg-body">
            <p>Chat cleared! I'm <strong>DrewBot</strong>, standing by in Andrew's profile. Ask me anything about his projects, technical skills, SLSU studies, or credentials! 🤖</p>
          </div>
        </div>
      `;
    });
  }

  initDrewBot();
  render();
})();
