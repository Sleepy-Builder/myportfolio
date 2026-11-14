/**
 * Andrew G. Palaran — 3D Coverflow Projects Carousel Component
 * Renders project showcase cards and manages 3D perspective coverflow transitions, swipe gestures, and keyboard navigation.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  let activeIndex = 0;

  function renderProjects(stage, projects) {
    stage.innerHTML = '';

    projects.forEach((proj, idx) => {
      const article = document.createElement('article');
      article.className = 'project-showcase-card' + (idx === 0 ? ' is-active' : idx === 1 ? ' is-next' : ' is-hidden');
      article.dataset.index = idx;

      let visualMarkup = '';
      if (proj.image) {
        visualMarkup = `
          <div class="project-visual-frame ${proj.visualClass || ''}">
            <span class="project-top-badge" id="p${idx}-badge">${proj.badge || 'PROJECT SHOWCASE'}</span>
            <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          </div>
        `;
      } else {
        // Special commerce dashboard mockup for project 5 (matching reference design)
        visualMarkup = `
          <div class="project-visual-frame visual-commerce">
            <span class="project-top-badge" id="p${idx}-badge">${proj.badge || 'BUSINESS OPERATIONS · DIGITAL SALES'}</span>
            <div class="commerce-mockup">
              <div style="font:700 11px var(--font-mono);color:#fdba74;margin-bottom:10px;letter-spacing:0.8px;">DIGITAL SALES &amp; INVENTORY</div>
              <div class="commerce-stat-grid" style="grid-template-columns:1fr 1fr;">
                <div class="commerce-stat-box">
                  <span class="c-stat-label">Total Orders</span>
                  <span class="c-stat-val">1,420+</span>
                  <span class="c-stat-sub">+9.1% growth</span>
                </div>
                <div class="commerce-stat-box">
                  <span class="c-stat-label">Inventory SKUs</span>
                  <span class="c-stat-val">850</span>
                  <span class="c-stat-sub">Tracked Live</span>
                </div>
              </div>
              <div class="gis-chart">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
        `;
      }

      const isExternal = proj.url && proj.url.startsWith('http');
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      const actionBtnMarkup = `
        <a class="project-action-btn" id="p${idx}-link" href="${proj.url || '#contact'}" ${targetAttr}>
          ${proj.actionText || 'View Live Demo ↗'}
        </a>
      `;

      article.innerHTML = `
        ${visualMarkup}
        <div class="project-card-details">
          <h3 id="p${idx}-title">${proj.title}</h3>
          <span class="project-card-subtitle">${proj.subtitle || ''}</span>
          <p class="project-desc" id="p${idx}-description">${proj.description}</p>
          <div class="tag-row">
            <span class="tag" id="p${idx}-tag">${proj.tag}</span>
          </div>
          <div class="project-card-footer">
            ${actionBtnMarkup}
          </div>
        </div>
      `;

      stage.appendChild(article);
    });
  }

  function updateCoverflow(newIndex) {
    const cards = utils.$$('.project-showcase-card');
    const dots = utils.$$('.proj-dot');
    const total = cards.length;
    if (total === 0) return;

    activeIndex = (newIndex + total) % total;

    cards.forEach((card, idx) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      if (idx === activeIndex) {
        card.classList.add('is-active');
        card.setAttribute('aria-hidden', 'false');
      } else if (idx === (activeIndex - 1 + total) % total) {
        card.classList.add('is-prev');
        card.setAttribute('aria-hidden', 'true');
      } else if (idx === (activeIndex + 1) % total) {
        card.classList.add('is-next');
        card.setAttribute('aria-hidden', 'true');
      } else {
        card.classList.add('is-hidden');
        card.setAttribute('aria-hidden', 'true');
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
      dot.setAttribute('aria-selected', String(idx === activeIndex));
    });
  }

  components.projectsCarousel = {
    render: function(stageId, projects) {
      const stage = utils.$(stageId || 'projects-stage');
      if (!stage) return;
      renderProjects(stage, projects);
    },

    init: function() {
      const cards = utils.$$('.project-showcase-card');
      const dots = utils.$$('.proj-dot');

      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('a')) return;
          if (card.classList.contains('is-prev')) {
            updateCoverflow(activeIndex - 1);
          } else if (card.classList.contains('is-next')) {
            updateCoverflow(activeIndex + 1);
          }
        });
      });

      utils.$('proj-prev')?.addEventListener('click', () => updateCoverflow(activeIndex - 1));
      utils.$('proj-next')?.addEventListener('click', () => updateCoverflow(activeIndex + 1));

      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          const target = parseInt(dot.dataset.slide, 10);
          if (!isNaN(target)) updateCoverflow(target);
        });
      });

      // Keyboard arrow keys when interacting with carousel
      const shell = utils.$('projects-carousel-shell');
      if (shell) {
        shell.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            updateCoverflow(activeIndex - 1);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            updateCoverflow(activeIndex + 1);
          }
        });

        // Swipe support
        let touchStartX = 0;
        shell.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        shell.addEventListener('touchend', (e) => {
          const deltaX = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(deltaX) > 45) {
            updateCoverflow(deltaX > 0 ? activeIndex - 1 : activeIndex + 1);
          }
        }, { passive: true });
      }

      updateCoverflow(0);
    },

    goTo: function(index) {
      updateCoverflow(index);
    }
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
