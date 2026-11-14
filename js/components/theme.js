/**
 * Andrew G. Palaran — Theme Switcher & Mobile Menu Component
 * Toggles Editorial Light vs Soft Slate Studio theme and controls mobile navigation drawer.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  components.initTheme = function() {
    const themeBtn = utils.$('theme-toggle');
    const html = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem('andrew_portfolio_theme');
    if (savedTheme === 'slate') {
      html.setAttribute('data-theme', 'slate');
      if (themeBtn) themeBtn.textContent = '☀ Editorial Light';
    }

    themeBtn?.addEventListener('click', () => {
      const isSlate = html.getAttribute('data-theme') === 'slate';
      if (isSlate) {
        html.removeAttribute('data-theme');
        themeBtn.textContent = '◐ Slate Mode';
        localStorage.setItem('andrew_portfolio_theme', 'light');
      } else {
        html.setAttribute('data-theme', 'slate');
        themeBtn.textContent = '☀ Editorial Light';
        localStorage.setItem('andrew_portfolio_theme', 'slate');
      }
    });

    // Mobile Menu
    const menuBtn = utils.$('menu-toggle');
    const nav = utils.$('navigation');

    menuBtn?.addEventListener('click', () => {
      const open = nav?.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });

    nav?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
      });
    });
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
