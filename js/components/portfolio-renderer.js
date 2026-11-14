/**
 * Andrew G. Palaran — Portfolio Renderer Component
 * Synchronizes DOM elements (hero text, navigation name, about copy, contact links) with active state.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  components.populatePortfolio = function(data) {
    if (!data) return;

    if (utils.$('role-label')) utils.$('role-label').textContent = data.role;
    if (utils.$('hero-copy')) utils.$('hero-copy').textContent = data.intro;
    if (utils.$('about-copy')) utils.$('about-copy').textContent = data.about;
    if (utils.$('nav-name')) utils.$('nav-name').textContent = data.name;
    if (utils.$('footer-name')) utils.$('footer-name').textContent = data.name + '.';
    document.title = data.name + ' — ' + data.role;

    const parts = (data.name || '').trim().split(/\s+/);
    if (utils.$('hero-first')) {
      utils.$('hero-first').textContent = parts.length > 1 ? parts.slice(0, -1).join(' ') : data.name;
    }
    if (utils.$('hero-last')) {
      utils.$('hero-last').textContent = parts.length > 1 ? parts[parts.length - 1] : '';
    }

    if (Array.isArray(data.projects)) {
      data.projects.forEach((p, i) => {
        if (utils.$('p' + i + '-title')) utils.$('p' + i + '-title').textContent = p.title;
        if (utils.$('p' + i + '-description')) utils.$('p' + i + '-description').textContent = p.description;
        if (utils.$('p' + i + '-tag')) utils.$('p' + i + '-tag').textContent = p.tag;
        const link = utils.$('p' + i + '-link');
        if (link && link.tagName === 'A') {
          const url = utils.safeUrl(p.url);
          if (url && url !== '#') {
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
    }

    if (utils.$('contact-email')) {
      utils.$('contact-email').textContent = data.email;
      utils.$('contact-email').href = 'mailto:' + data.email;
    }
    if (utils.$('contact-button')) {
      utils.$('contact-button').href = 'mailto:' + data.email;
    }
    if (utils.$('contact-phone')) {
      utils.$('contact-phone').textContent = data.phone;
      utils.$('contact-phone').href = 'tel:' + data.phone.replace(/[^+0-9]/g, '');
    }

    if (utils.$('facebook-link') && utils.safeUrl(data.facebook)) {
      utils.$('facebook-link').href = utils.safeUrl(data.facebook);
      utils.$('facebook-link').hidden = false;
    }
    if (utils.$('github-link') && utils.safeUrl(data.github)) {
      utils.$('github-link').href = utils.safeUrl(data.github);
      utils.$('github-link').hidden = false;
    }
    if (utils.$('linkedin-link')) {
      if (utils.safeUrl(data.linkedin)) {
        utils.$('linkedin-link').href = utils.safeUrl(data.linkedin);
        utils.$('linkedin-link').hidden = false;
      } else {
        utils.$('linkedin-link').hidden = true;
      }
    }
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
