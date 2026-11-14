/**
 * Andrew G. Palaran — Motion & Ambient Particle Engine Component
 * Controls interactive canvas particle network, 3D portrait tilt, dynamic spotlight cards, and scroll reveal.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, utils) {
  'use strict';

  components.initMotionEngine = function() {
    const root = document.documentElement;
    const motionToggle = utils.$('motion-toggle');
    let motionEnabled = true;

    // Spotlight cursor effect on cards
    document.addEventListener('pointermove', (e) => {
      if (!motionEnabled) return;
      document.querySelectorAll('.studio-card, .bento-card, .project-showcase-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });

    // 3D Portrait tilt
    const portrait = utils.$('tilt-portrait');
    if (portrait) {
      portrait.addEventListener('pointermove', (e) => {
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

    // Scroll reveal
    const revealItems = document.querySelectorAll(
      '.hero-shell, .metrics-strip, .section-head, .service-card, .projects-carousel-shell, .bento-card, .edu-card, .contact-box'
    );
    revealItems.forEach((el, i) => {
      el.classList.add('motion-reveal');
      el.style.setProperty('--reveal-delay', `${(i % 4) * 65}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });

    root.classList.add('motion-ready');
    revealItems.forEach(el => observer.observe(el));

    // Scroll progress & nav link spy
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

    // Subtle Ambient Floating Orbs Canvas
    const canvas = utils.$('ambient-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let width = 0;
      let height = 0;
      let nodes = [];

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
  };
})(window.PortfolioApp.components, window.PortfolioApp.utils);
