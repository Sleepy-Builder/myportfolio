/**
 * Andrew G. Palaran — Hero Typewriter Animation Component
 * Types and cycles through professional specialization phrases with realistic cadence.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  const phrases = [
    'GIS Water Monitoring & Forecasting',
    'Full-Stack Web Applications',
    'E-Commerce & Franchise Systems',
    'Inventory & Business Software'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  components.initTypewriter = function() {
    const typeEl = utils.$('typewriter-text');
    if (!typeEl) return;

    function tick() {
      if (!typeEl) return;
      const current = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        typeEl.textContent = current.slice(0, charIdx);
        if (charIdx >= current.length) {
          deleting = true;
          setTimeout(tick, 2100);
          return;
        }
        setTimeout(tick, 52);
      } else {
        charIdx--;
        typeEl.textContent = current.slice(0, charIdx);
        if (charIdx <= 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 300);
          return;
        }
        setTimeout(tick, 26);
      }
    }

    setTimeout(tick, 1200);
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
