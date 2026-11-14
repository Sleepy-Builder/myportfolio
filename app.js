/**
 * Andrew G. Palaran — Executive Editorial Portfolio Root Coordinator
 * Connects modular configuration, services, utilities, and UI components into a cohesive application lifecycle.
 */

window.PortfolioApp = window.PortfolioApp || {};

(function(app) {
  'use strict';

  function init() {
    const { config, services, components } = app;
    if (!services?.storage || !components) {
      console.error('PortfolioApp modules failed to load in proper order.');
      return;
    }

    // 1. Load active portfolio state from storage
    const data = services.storage.loadData();

    // 2. Populate core portfolio text, roles, and contacts
    components.populatePortfolio(data);

    // 3. Render dynamic Bento Skills Grid
    components.renderSkills('skills-bento');

    // 4. Render and initialize 3D Coverflow Projects Carousel
    components.projectsCarousel.render('projects-stage', data.projects);
    components.projectsCarousel.init();

    // 5. Render and initialize Infinite Momentum Certificates Carousel
    components.certsCarousel.render(data.certificates);

    // 6. Initialize Certificate Lightbox Viewer
    components.certViewer.init(data.certificates);

    // 7. Initialize Profile & Credentials Editor Modal
    components.editorModal.init(data, (updatedData) => {
      components.populatePortfolio(updatedData);
      components.projectsCarousel.render('projects-stage', updatedData.projects);
      components.projectsCarousel.init();
      components.certsCarousel.render(updatedData.certificates);
      components.certViewer.init(updatedData.certificates);
    });

    // 8. Initialize DrewBot Live AI Messenger
    components.drewbotWidget.init();

    // 9. Initialize Editorial / Slate Theme & Mobile Drawer
    components.initTheme();

    // 10. Initialize Hero Typewriter Cycling
    components.initTypewriter();

    // 11. Initialize Interactive Motion & Ambient Canvas Particles
    components.initMotionEngine();
  }

  // Auto-boot when DOM is interactive
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  app.init = init;
})(window.PortfolioApp);
