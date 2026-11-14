/**
 * Andrew G. Palaran — DrewBot AI Messenger Widget Component
 * Controls the messenger popup, live chat stream, prompt chips, settings panel, and provider status.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, services, utils) {
  'use strict';

  const chatHistory = [];
  let isTyping = false;

  function ensureWidgetMounted() {
    if (utils.$('drewbot-chat-popup')) return;
    const root = utils.$('drewbot-root') || document.body;
    const widget = document.createElement('div');
    widget.className = 'drewbot-messenger-widget';
    widget.id = 'drewbot-messenger-widget';

    widget.innerHTML = `
      <div class="drewbot-chat-popup is-closed" id="drewbot-chat-popup" role="dialog" aria-label="DrewBot AI Assistant Chat" aria-hidden="true">
        <div class="drewbot-popup-header">
          <div class="drewbot-popup-profile">
            <div class="drewbot-avatar-wrapper small">
              <div class="drewbot-avatar-glow" aria-hidden="true"></div>
              <div class="drewbot-avatar-badge">🤖</div>
              <span class="drewbot-status-dot online" aria-label="Online"></span>
            </div>
            <div>
              <div class="drewbot-popup-title">DrewBot <span class="drewbot-popup-verified">&#10003;</span></div>
              <span class="drewbot-popup-status" id="drewbot-engine-status">&#9679; Live AI API &middot; Genius Mode</span>
            </div>
          </div>
          <div class="drewbot-popup-actions">
            <button class="drewbot-icon-btn" id="drewbot-settings-btn" type="button" title="Configure AI Provider" aria-label="Settings">⚙️</button>
            <button class="drewbot-icon-btn" id="drewbot-clear-btn" type="button" title="Clear chat history" aria-label="Clear chat">🗑️</button>
            <button class="drewbot-icon-btn" id="drewbot-close-btn" type="button" title="Close chat" aria-label="Close chat">&times;</button>
          </div>
        </div>

        <!-- Settings Panel -->
        <div class="drewbot-settings-panel is-closed" id="drewbot-settings-panel" aria-hidden="true">
          <div class="drewbot-settings-header">
            <span>⚙️ DrewBot AI Provider Configuration</span>
            <button type="button" id="drewbot-close-settings" class="drewbot-icon-btn" aria-label="Close settings">&times;</button>
          </div>
          <div class="drewbot-settings-body">
            <p class="drewbot-settings-tip">
              DrewBot is powered by a live AI completion API and trained on comprehensive facts about Andrew G. Palaran.
            </p>
            <label class="drewbot-setting-label">AI Engine Provider:
              <select id="drewbot-provider-select" class="drewbot-select">
                <option value="auto">⚡ Free AI Cloud API (Instant, No Key Required)</option>
                <option value="gemini">✨ Google Gemini API (Use your Gemini Key)</option>
                <option value="openai">🚀 OpenAI / Groq / OpenRouter API</option>
              </select>
            </label>
            <div id="drewbot-custom-key-row" class="drewbot-custom-key-row" style="display:none;">
              <label class="drewbot-setting-label">API Key:
                <input type="password" id="drewbot-api-key" class="drewbot-setting-input" placeholder="Paste your API key here...">
              </label>
              <small style="color:#94a3b8;font-size:11px;display:block;margin-top:2px;">Stored privately in your browser's localStorage.</small>
            </div>
            <div style="display:flex;gap:8px;margin-top:6px;">
              <button type="button" id="drewbot-save-settings" class="btn btn-primary" style="padding:6px 14px;font-size:12px;border-radius:8px;">Save Settings</button>
              <button type="button" id="drewbot-test-api" class="btn btn-outline" style="padding:6px 14px;font-size:12px;border-radius:8px;">Test API</button>
            </div>
            <div id="drewbot-api-test-status" style="font-size:11.5px;min-height:16px;"></div>
          </div>
        </div>

        <!-- Messages Window -->
        <div class="drewbot-chat-window" id="drewbot-chat-window" role="log" aria-live="polite">
          <div class="drewbot-msg bot-msg">
            <div class="drewbot-msg-avatar">🤖</div>
            <div class="drewbot-msg-body">
              <p>Hi! I'm <strong>DrewBot</strong>, Andrew G. Palaran's virtual AI representative &mdash; now powered by a <strong>live AI completion engine</strong>! ⚡</p>
              <p>Ask me anything about his work as <strong>Project Manager for WaterWatch GIS</strong>, his <strong>recent projects</strong> (Apex Motors, EaseStay Resort, Uncle Brew), his <strong>BSIT studies at SLSU</strong>, or his technical skills!</p>
            </div>
          </div>
        </div>

        <!-- Quick Suggested Chips -->
        <div class="drewbot-prompts-tray" id="drewbot-prompts-tray" aria-label="Suggested questions">
          <button class="drewbot-chip" type="button" data-prompt="What is Andrew's role in the WaterWatch GIS project?">⚡ WaterWatch GIS</button>
          <button class="drewbot-chip" type="button" data-prompt="Tell me about his recent projects: Apex Motors and EaseStay.">⚡ Recent Projects</button>
          <button class="drewbot-chip" type="button" data-prompt="What are Andrew's technical skills and programming languages?">⚡ Skills &amp; Stack</button>
          <button class="drewbot-chip" type="button" data-prompt="Where does Andrew study and what is his academic standing?">⚡ SLSU &amp; GWA</button>
          <button class="drewbot-chip" type="button" data-prompt="What certifications does Andrew hold?">⚡ Certifications</button>
          <button class="drewbot-chip" type="button" data-prompt="How can I contact or hire Andrew?">⚡ Contact Info</button>
        </div>

        <!-- Input Bar -->
        <form class="drewbot-input-form" id="drewbot-chat-form">
          <div class="drewbot-input-shell">
            <input type="text" id="drewbot-input" class="drewbot-input-field" placeholder="Ask DrewBot anything about Andrew..." autocomplete="off" maxlength="300" required>
            <button type="submit" id="drewbot-send-btn" class="drewbot-send-btn" aria-label="Send message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </form>
      </div>

      <!-- Floating Messenger Chat Head Button -->
      <button class="drewbot-messenger-trigger" id="drewbot-chat-trigger" type="button" aria-label="Open DrewBot chat" title="Chat with DrewBot AI">
        <span class="drewbot-trigger-badge" aria-hidden="true">🤖</span>
        <span class="drewbot-trigger-label">Ask DrewBot AI</span>
        <span class="drewbot-status-dot online" aria-hidden="true"></span>
      </button>
    `;
    root.appendChild(widget);
  }

  function updateStatusBadge() {
    const badge = utils.$('drewbot-engine-status') || utils.$('drewbot-status-indicator');
    if (!badge) return;
    const settings = services.storage.getAISettings();
    if (settings.provider === 'gemini' && settings.apiKey) {
      badge.innerHTML = '● Gemini 1.5 Flash · Genius Mode';
    } else if (settings.provider === 'openai' && settings.apiKey) {
      badge.innerHTML = '● OpenAI API · Genius Mode';
    } else {
      badge.innerHTML = '● Live AI API · Genius Mode';
    }
  }

  function appendMessage(windowEl, htmlContent, isBot = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `drewbot-msg ${isBot ? 'bot-msg' : 'user-msg'}`;
    msgDiv.innerHTML = `
      <div class="drewbot-msg-avatar">${isBot ? '🤖' : 'You'}</div>
      <div class="drewbot-msg-body">${htmlContent}</div>
    `;
    windowEl.appendChild(msgDiv);
    windowEl.scrollTop = windowEl.scrollHeight;
    return msgDiv;
  }

  async function processAndReply(windowEl, query) {
    isTyping = true;
    const indicator = document.createElement('div');
    indicator.className = 'drewbot-msg bot-msg';
    indicator.id = 'drewbot-indicator';
    indicator.innerHTML = `
      <div class="drewbot-msg-avatar">🤖</div>
      <div class="drewbot-msg-body">
        <div class="drewbot-typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    windowEl.appendChild(indicator);
    windowEl.scrollTop = windowEl.scrollHeight;

    let rawAnswer = '';
    let isAiGenerated = false;

    try {
      rawAnswer = await services.drewbotAPI.requestAnswer(query, chatHistory);
      isAiGenerated = true;
    } catch (err) {
      console.warn('Live AI fallback used:', err);
      rawAnswer = window.PortfolioApp.config.getDrewBotFallbackAnswer(query);
    }

    indicator.remove();

    const formattedHtml = isAiGenerated ? utils.markdownToHtml(rawAnswer) : rawAnswer;
    appendMessage(windowEl, formattedHtml, true);

    chatHistory.push({ role: 'user', content: query });
    chatHistory.push({ role: 'assistant', content: rawAnswer });

    isTyping = false;
  }

  components.drewbotWidget = {
    init: function() {
      ensureWidgetMounted();

      const trigger = utils.$('drewbot-chat-trigger') || utils.$('drewbot-messenger-trigger');
      const popup = utils.$('drewbot-chat-popup');
      const closeBtn = utils.$('drewbot-close-btn');
      const clearBtn = utils.$('drewbot-clear-btn');
      const settingsBtn = utils.$('drewbot-settings-btn') || utils.$('drewbot-settings-toggle');
      const settingsPanel = utils.$('drewbot-settings-panel');
      const closeSettingsBtn = utils.$('drewbot-close-settings');
      const saveSettingsBtn = utils.$('drewbot-save-settings');
      const testApiBtn = utils.$('drewbot-test-api') || utils.$('drewbot-test-key-btn');
      const providerSelect = utils.$('drewbot-provider-select');
      const apiKeyInput = utils.$('drewbot-api-key') || utils.$('drewbot-api-key-input');
      const customKeyRow = utils.$('drewbot-custom-key-row');
      const testStatusEl = utils.$('drewbot-api-test-status') || utils.$('drewbot-test-status');
      const windowEl = utils.$('drewbot-chat-window');
      const form = utils.$('drewbot-chat-form') || utils.$('drewbot-input-form');
      const input = utils.$('drewbot-input') || utils.$('drewbot-input-field');
      const chips = utils.$$('.drewbot-chip');
      const heroTrigger = utils.$('hero-drewbot-trigger');
      const profileTrigger = utils.$('drewbot-profile-trigger') || utils.$('profile-drewbot-trigger');

      if (!popup || !windowEl) return;

      function openChat() {
        popup.classList.remove('is-closed');
        popup.setAttribute('aria-hidden', 'false');
        trigger?.classList.add('is-active');
        setTimeout(() => {
          input?.focus();
          windowEl.scrollTop = windowEl.scrollHeight;
        }, 180);
      }

      function closeChat() {
        popup.classList.add('is-closed');
        popup.setAttribute('aria-hidden', 'true');
        trigger?.classList.remove('is-active');
        closeSettings();
      }

      function toggleChat() {
        if (popup.classList.contains('is-closed')) {
          openChat();
        } else {
          closeChat();
        }
      }

      function openSettings() {
        if (!settingsPanel) return;
        const current = services.storage.getAISettings();
        if (providerSelect) providerSelect.value = current.provider;
        if (apiKeyInput) apiKeyInput.value = current.apiKey;
        if (customKeyRow) customKeyRow.style.display = current.provider === 'auto' ? 'none' : 'block';
        if (testStatusEl) testStatusEl.textContent = '';
        settingsPanel.classList.remove('is-closed');
        settingsPanel.setAttribute('aria-hidden', 'false');
      }

      function closeSettings() {
        if (!settingsPanel) return;
        settingsPanel.classList.add('is-closed');
        settingsPanel.setAttribute('aria-hidden', 'true');
      }

      trigger?.addEventListener('click', toggleChat);
      closeBtn?.addEventListener('click', closeChat);
      heroTrigger?.addEventListener('click', (e) => { e.preventDefault(); openChat(); });
      profileTrigger?.addEventListener('click', (e) => { e.preventDefault(); openChat(); });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popup.classList.contains('is-closed')) {
          closeChat();
        }
      });

      settingsBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (settingsPanel?.classList.contains('is-closed')) {
          openSettings();
        } else {
          closeSettings();
        }
      });

      closeSettingsBtn?.addEventListener('click', closeSettings);

      providerSelect?.addEventListener('change', () => {
        const isCustom = providerSelect.value !== 'auto';
        if (customKeyRow) customKeyRow.style.display = isCustom ? 'block' : 'none';
        if (apiKeyInput && isCustom && !apiKeyInput.value) apiKeyInput.focus();
      });

      saveSettingsBtn?.addEventListener('click', () => {
        const chosenProvider = providerSelect?.value || 'gemini';
        const chosenKey = apiKeyInput?.value.trim() || '';
        services.storage.saveAISettings({
          provider: chosenProvider,
          apiKey: chosenKey
        });
        updateStatusBadge();
        if (testStatusEl) {
          testStatusEl.style.color = '#38bdf8';
          testStatusEl.textContent = '✓ Settings saved successfully!';
        }
        setTimeout(closeSettings, 900);
        utils.notify('DrewBot AI settings updated!');
      });

      testApiBtn?.addEventListener('click', async () => {
        if (!testStatusEl) return;
        testStatusEl.style.color = '#c7d2fe';
        testStatusEl.textContent = '⏳ Testing connection to AI API...';
        try {
          const res = await services.drewbotAPI.testConnection(providerSelect?.value, apiKeyInput?.value.trim());
          testStatusEl.style.color = '#34d399';
          testStatusEl.textContent = `✓ ${res}`;
        } catch (err) {
          testStatusEl.style.color = '#f87171';
          testStatusEl.textContent = `⚠ API Test failed: ${err.message || 'Check key or network'}`;
        }
      });

      function handleSend(text) {
        const clean = text.trim();
        if (!clean || isTyping) return;
        appendMessage(windowEl, `<p>${clean.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`, false);
        if (input) input.value = '';
        processAndReply(windowEl, clean);
      }

      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input) handleSend(input.value);
      });

      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.dataset.prompt;
          if (prompt) handleSend(prompt);
        });
      });

      clearBtn?.addEventListener('click', () => {
        chatHistory.length = 0;
        windowEl.innerHTML = `
          <div class="drewbot-msg bot-msg">
            <div class="drewbot-msg-avatar">🤖</div>
            <div class="drewbot-msg-body">
              <p>Chat cleared! I'm <strong>DrewBot</strong>, standing by in Andrew's profile &mdash; powered by a <strong>live AI completion engine</strong>! Ask me anything about his projects, skills, education, or credentials! ⚡</p>
            </div>
          </div>
        `;
      });

      utils.$('drewbot-profile-chip-btn')?.addEventListener('click', () => {
        utils.$('edit-toggle')?.click();
      });

      updateStatusBadge();
    },

    open: function() {
      ensureWidgetMounted();
      const popup = utils.$('drewbot-chat-popup');
      if (popup) {
        popup.classList.remove('is-closed');
        popup.setAttribute('aria-hidden', 'false');
      }
    }
  };
})(window.PortfolioApp.components, window.PortfolioApp.services, window.PortfolioApp.utils);
