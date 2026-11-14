/**
 * Andrew G. Palaran — Skills Bento Grid Component
 * Renders the 6 interactive Bento cards matching user specifications:
 * 01 Languages & Frameworks
 * 02 Databases & Dev Tools
 * 03 Artificial Intelligence & Generative Tools
 * 04 Design & Media Tools
 * 05 Experience & Operations
 * 06 Core Competencies & Execution
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, config, utils) {
  'use strict';

  function renderCardItem(item) {
    const iconContent = item.svg
      ? item.svg
      : `<i class="${item.icon}" aria-hidden="true"></i>`;
    const accent = item.accentClass ? ` ${item.accentClass}` : '';

    return `
      <div class="skill-icon-card">
        <div class="skill-icon-box${accent}">
          ${iconContent}
        </div>
        <div class="skill-icon-meta">
          <span class="skill-icon-name">${item.name}</span>
          <span class="skill-icon-level">${item.level}</span>
        </div>
      </div>
    `;
  }

  function renderList(items) {
    if (!Array.isArray(items)) return '';
    return items.map(renderCardItem).join('');
  }

  components.renderSkills = function(containerId) {
    const container = utils.$(containerId || 'skills-bento');
    if (!container) return;

    const data = config.skillsData || {};
    const aiTools = config.aiTools || [];

    const html = `
      <!-- 01 // LANGUAGES & FRAMEWORKS -->
      <div class="bento-card bento-languages">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">01</span>
            <span>PROGRAMMING &amp; RUNTIME</span>
          </div>
          <h3 class="bento-title">Languages &amp; Frameworks</h3>
          <p class="bento-desc">Core programming languages and modern frameworks powering frontend interfaces, backend architectures, and desktop applications.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(data.languages)}
        </div>
      </div>

      <!-- 02 // DATABASES & DEV TOOLS -->
      <div class="bento-card bento-tools">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">02</span>
            <span>DATA &amp; INFRASTRUCTURE</span>
          </div>
          <h3 class="bento-title">Databases &amp; Dev Tools</h3>
          <p class="bento-desc">Relational databases, spatial GIS layers, cloud backends, and engineering environments.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(data.databasesAndTools)}
        </div>
      </div>

      <!-- 03 // AI MODELS & GENERATIVE TOOLS -->
      <div class="bento-card bento-ai">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">03</span>
            <span>AI MODELS, AGENTS &amp; GENERATIVE SUITE</span>
          </div>
          <h3 class="bento-title">Artificial Intelligence &amp; Generative Tools</h3>
          <p class="bento-desc">Advanced reasoning models, multimodal intelligence, generative design, AI video, code synthesis, and automated workflows.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(aiTools)}
        </div>
      </div>

      <!-- 04 // DESIGN & MEDIA TOOLS -->
      <div class="bento-card bento-creative">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">04</span>
            <span>CREATIVE &amp; MEDIA SUITE</span>
          </div>
          <h3 class="bento-title">Design &amp; Media Tools</h3>
          <p class="bento-desc">Digital content creation, photo editing, video production, and cloud workflows.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(data.creative)}
        </div>
      </div>

      <!-- 05 // EXPERIENCE & OPERATIONS -->
      <div class="bento-card bento-experience">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">05</span>
            <span>PRACTICAL &amp; ENTERPRISE</span>
          </div>
          <h3 class="bento-title">Experience &amp; Operations</h3>
          <p class="bento-desc">Hands-on leadership, retail franchise operations, inventory management, and digital product distribution.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(data.operations)}
        </div>
      </div>

      <!-- 06 // CORE COMPETENCIES & EXECUTION -->
      <div class="bento-card bento-competencies">
        <div class="bento-card-header">
          <div class="bento-badge">
            <span class="bento-num">06</span>
            <span>METHODOLOGY &amp; WORKFLOW</span>
          </div>
          <h3 class="bento-title">Core Competencies &amp; Execution</h3>
          <p class="bento-desc">Modern cognitive workflows, AI-accelerated engineering, and cross-functional team execution methods.</p>
        </div>
        <div class="bento-icon-grid">
          ${renderList(data.competencies)}
        </div>
      </div>
    `;

    container.innerHTML = html;
  };
})(window.PortfolioApp.components, window.PortfolioApp.config, window.PortfolioApp.utils);
