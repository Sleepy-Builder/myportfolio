/**
 * Andrew G. Palaran — DOM & Formatting Utilities
 * Standard helpers for selector queries, URL validation, notifications, and lightweight markdown parsing.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.utils = window.PortfolioApp.utils || {};

(function(utils) {
  'use strict';

  utils.$ = function(id) {
    return document.getElementById(id);
  };

  utils.$$ = function(selector, context) {
    return Array.from((context || document).querySelectorAll(selector));
  };

  utils.copy = function(val) {
    return JSON.parse(JSON.stringify(val));
  };

  utils.hasValidImage = function(url) {
    if (!url || typeof url !== 'string') return false;
    const clean = url.trim();
    if (!clean || clean.length < 5) return false;
    return /\.(png|jpe?g|webp|svg|gif)$/i.test(clean) || clean.startsWith('data:image/');
  };

  utils.safeUrl = function(url, fallback) {
    if (!url || typeof url !== 'string') return fallback || '#';
    const clean = url.trim();
    if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('mailto:') || clean.startsWith('tel:') || clean.startsWith('#') || clean.startsWith('assets/')) {
      return clean;
    }
    return fallback || '#';
  };

  utils.notify = function(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 420);
    }, 2800);
  };

  utils.markdownToHtml = function(md) {
    if (!md) return '';

    // If input already contains formatted HTML tags, return directly
    if (/<(strong|b|em|i|ul|ol|li|p|a|br|span|div)\b/i.test(md)) {
      return md;
    }

    let html = md
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Links: [text](url)
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 &#x2197;</a>');

    // Bold: **text** or __text__
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Italic: *text* or _text_
    html = html.replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, '$1<em>$2</em>$3');

    // Inline code: `code`
    html = html.replace(/`([^`]+)`/g, '<code style="background:rgba(234,88,12,0.12);padding:2px 6px;border-radius:4px;font-family:var(--font-mono);font-size:12px;">$1</code>');

    // Bullet lists: - item or * item
    const lines = html.split('\n');
    let inList = false;
    const processed = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (/^[-*]\s+/.test(line)) {
        if (!inList) {
          processed.push('<ul style="margin:8px 0;padding-left:20px;">');
          inList = true;
        }
        processed.push(`<li>${line.replace(/^[-*]\s+/, '')}</li>`);
      } else {
        if (inList) {
          processed.push('</ul>');
          inList = false;
        }
        if (line) {
          processed.push(`<p style="margin:6px 0;">${line}</p>`);
        }
      }
    }
    if (inList) processed.push('</ul>');

    return processed.join('');
  };
})(window.PortfolioApp.utils);
