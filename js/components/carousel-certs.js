/**
 * Andrew G. Palaran — Infinite Momentum Certificates Carousel Component
 * Continuous rAF belt with drag momentum, trackpad/wheel support, hover pause, and category filters.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  let currentPos     = 0;
  let targetPos      = 0;
  let beltSpeed      = 0.28;
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
  let activeFilter   = 'all';
  let certsData      = [];

  function getCardStep() {
    const track = utils.$('certs-grid');
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
    if (components.certViewer && typeof components.certViewer.open === 'function') {
      components.certViewer.open(index);
    }
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

  function updateCarouselNav() {
    const track = utils.$('certs-grid');
    if (!track) return;
    const certCounter = utils.$('cert-counter');
    const cards = track.querySelectorAll('.cert-card:not(.cert-clone)');
    if (certCounter) {
      certCounter.textContent = cards.length > 0 ? `${cards.length} certs` : '—';
    }
  }

  function isCarouselHovered() {
    const track = utils.$('certs-grid');
    const windowEl = document.querySelector('.certs-carousel-window');
    const shellEl = utils.$('cert-carousel-shell');
    try {
      if (track?.matches(':hover')) return true;
      if (windowEl?.matches(':hover')) return true;
      if (shellEl?.matches(':hover')) return true;
    } catch (e) {}
    return isHovered;
  }

  function beltTick() {
    const track = utils.$('certs-grid');
    if (!track) return;
    const viewer = utils.$('cert-viewer');
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

  function setupCertInteraction() {
    const track = utils.$('certs-grid');
    const shell = utils.$('cert-carousel-shell');
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
      if (Math.abs(dx) > 6) isDragging = true;
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

    window.addEventListener('keydown', (e) => {
      if (utils.$('cert-viewer')?.open) return;
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

    utils.$('cert-side-prev')?.addEventListener('click', slidePrevCert);
    utils.$('cert-side-next')?.addEventListener('click', slideNextCert);
    utils.$('cert-prev-btn')?.addEventListener('click', slidePrevCert);
    utils.$('cert-next-btn')?.addEventListener('click', slideNextCert);
  }

  function renderCards() {
    const grid = utils.$('certs-grid');
    if (!grid) return;
    grid.innerHTML = '';

    certsData.forEach((cert, index) => {
      if (!utils.hasValidImage(cert.image) && !cert.pdf) return;
      if (activeFilter !== 'all' && cert.category !== activeFilter) return;

      const article = document.createElement('article');
      article.className = 'studio-card cert-card';
      article.setAttribute('tabindex', '0');
      article.setAttribute('role', 'button');
      article.setAttribute('aria-label', 'View certificate: ' + cert.title);
      article.dataset.certIdx = index;

      const hasImg = utils.hasValidImage(cert.image);
      const previewHtml = hasImg
        ? `<img src="${cert.image}" alt="${cert.title}" loading="lazy">`
        : `<div class="cert-placeholder">
             <div class="cert-seal">✦</div>
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
            <div class="cert-cat">${(cert.category || 'TECHNICAL').toUpperCase()} CREDENTIAL</div>
            <h3></h3>
            <p class="cert-issuer"></p>
          </div>
          <div class="cert-footer">
            <span class="cert-date"></span>
            <span class="cert-action">View Certificate ↗</span>
          </div>
        </div>
      `;
      article.querySelector('h3').textContent = cert.title;
      article.querySelector('.cert-issuer').textContent = cert.issuer;
      article.querySelector('.cert-date').textContent = 'ISSUED · ' + cert.date;

      article.addEventListener('click', (e) => handleCertCardClick(index, e));
      article.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCertCardClick(index, e);
        }
      });

      grid.appendChild(article);
    });
  }

  function initBelt() {
    const track = utils.$('certs-grid');
    if (!track) return;

    track.querySelectorAll('.cert-clone').forEach(el => el.remove());
    const realCards = Array.from(track.querySelectorAll('.cert-card'));
    if (realCards.length === 0) return;

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

  components.certsCarousel = {
    render: function(certificates) {
      certsData = certificates || [];
      renderCards();
      setTimeout(initBelt, 60);

      utils.$$('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          utils.$$('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeFilter = btn.dataset.filter;
          isHovered = false;
          renderCards();
          setTimeout(initBelt, 60);
        });
      });
    },

    next: slideNextCert,
    prev: slidePrevCert
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
