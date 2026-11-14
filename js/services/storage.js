/**
 * Andrew G. Palaran — Storage Service
 * Manages localStorage persistence for portfolio state, custom certificates, and DrewBot AI provider settings.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.services = window.PortfolioApp.services || {};

(function(services, config, utils) {
  'use strict';

  const STORAGE_KEY = config.STORAGE_KEY || 'andrew-editorial-portfolio-v14';
  const AI_STORAGE_KEY = 'drewbot_ai_settings_v3';

  function normalize(value) {
    const defaults = config.defaultData;
    const result = utils.copy(defaults);
    if (!value || typeof value !== 'object') return result;

    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      if (typeof value[k] === 'string' && value[k].trim()) result[k] = value[k];
    }

    if (Array.isArray(value.projects)) {
      result.projects = result.projects.map((p, i) => {
        if (!value.projects[i]) return p;
        for (const k of ['title', 'subtitle', 'badge', 'visualClass', 'image', 'description', 'tag', 'url', 'actionText']) {
          if (typeof value.projects[i]?.[k] === 'string') p[k] = value.projects[i][k];
        }
        return p;
      });
    }

    if (Array.isArray(value.certificates)) {
      const validCustomCerts = value.certificates.filter(c => c && (utils.hasValidImage(c.image) || c.pdf || (c.title && !c.title.includes('Slot'))));
      if (validCustomCerts.length > 0) {
        result.certificates = result.certificates.map((c, i) => {
          if (!validCustomCerts[i]) return c;
          const userC = validCustomCerts[i];
          return {
            title: userC.title || c.title,
            issuer: userC.issuer || c.issuer,
            date: userC.date || c.date,
            category: userC.category || c.category,
            image: userC.image || c.image,
            pdf: userC.pdf || c.pdf,
            verifyUrl: userC.verifyUrl || c.verifyUrl
          };
        });
      }
    }
    return result;
  }

  services.storage = {
    loadData: function() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return utils.copy(config.defaultData);
        return normalize(JSON.parse(raw));
      } catch (err) {
        console.warn('Storage read failed, falling back to defaults', err);
        return utils.copy(config.defaultData);
      }
    },

    saveData: function(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
      } catch (err) {
        console.error('Storage write failed', err);
        return false;
      }
    },

    resetData: function() {
      try {
        localStorage.removeItem(STORAGE_KEY);
        return utils.copy(config.defaultData);
      } catch (err) {
        console.error('Storage reset failed', err);
        return utils.copy(config.defaultData);
      }
    },

    getAISettings: function() {
      try {
        const raw = localStorage.getItem(AI_STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('Failed to parse AI settings', e);
      }
      return {
        provider: 'gemini',
        apiKey: '',
        model: 'gemini-1.5-flash',
        endpoint: ''
      };
    },

    saveAISettings: function(settings) {
      try {
        localStorage.setItem(AI_STORAGE_KEY, JSON.stringify(settings));
        return true;
      } catch (e) {
        console.error('Failed to save AI settings', e);
        return false;
      }
    }
  };
})(window.PortfolioApp.services, window.PortfolioApp.config, window.PortfolioApp.utils);
