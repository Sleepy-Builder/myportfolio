/**
 * Andrew G. Palaran — Profile & Credentials Editor Modal Component
 * Manages the customize dialog, live form updates, custom certificate file uploads, and resets.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, services, utils) {
  'use strict';

  let currentData = null;

  function ensureEditorMounted() {
    if (utils.$('editor')) return;
    const root = utils.$('editor-modal-root') || document.body;
    const dialog = document.createElement('dialog');
    dialog.id = 'editor';
    dialog.setAttribute('aria-labelledby', 'editor-title');

    dialog.innerHTML = `
      <form id="editor-form">
        <div class="editor-head">
          <div>
            <h2 id="editor-title" style="font-size:20px">Edit Profile &amp; Certificates</h2>
            <p style="margin:4px 0 0;font-size:13px;color:var(--text-secondary)">Customize your details and attach certificate images.</p>
          </div>
          <button type="button" class="close-editor" id="close-editor" aria-label="Close editor">&times;</button>
        </div>

        <div class="editor-content">
          <div class="field-grid">
            <label class="field">Your Name<input name="name" required maxlength="100"></label>
            <label class="field">Role / Title<input name="role" required maxlength="120"></label>
            <label class="field full">Short Introduction<textarea name="intro" required maxlength="900"></textarea></label>
            <label class="field full">Profile Summary<textarea name="about" required maxlength="1500"></textarea></label>
            <label class="field">Email<input name="email" type="email"></label>
            <label class="field">Phone<input name="phone" type="tel"></label>
            <label class="field">Facebook URL<input name="facebook" type="url"></label>
            <label class="field">GitHub URL<input name="github" type="url"></label>
            <label class="field full">LinkedIn URL (optional)<input name="linkedin" type="url"></label>
          </div>

          <h3>Projects</h3>
          <div class="field-grid">
            <label class="field">Project 1 Title<input name="p0title" maxlength="100"></label>
            <label class="field">Project 1 Tags<input name="p0tag" maxlength="100"></label>
            <label class="field full">Project 1 Description<textarea name="p0description" maxlength="700"></textarea></label>
            <label class="field full">Project 1 URL<input name="p0url" type="url"></label>

            <label class="field">Project 2 Title<input name="p1title" maxlength="100"></label>
            <label class="field">Project 2 Tags<input name="p1tag" maxlength="100"></label>
            <label class="field full">Project 2 Description<textarea name="p1description" maxlength="700"></textarea></label>
            <label class="field full">Project 2 URL<input name="p1url" type="url"></label>

            <label class="field">Project 3 Title<input name="p2title" maxlength="100"></label>
            <label class="field">Project 3 Tags<input name="p2tag" maxlength="100"></label>
            <label class="field full">Project 3 Description<textarea name="p2description" maxlength="700"></textarea></label>
            <label class="field full">Project 3 URL<input name="p2url" type="url"></label>

            <label class="field">Project 4 Title<input name="p3title" maxlength="100"></label>
            <label class="field">Project 4 Tags<input name="p3tag" maxlength="100"></label>
            <label class="field full">Project 4 Description<textarea name="p3description" maxlength="700"></textarea></label>
            <label class="field full">Project 4 URL<input name="p3url" type="url"></label>

            <label class="field">Project 5 Title<input name="p4title" maxlength="100"></label>
            <label class="field">Project 5 Tags<input name="p4tag" maxlength="100"></label>
            <label class="field full">Project 5 Description<textarea name="p4description" maxlength="700"></textarea></label>
            <label class="field full">Project 5 URL<input name="p4url" type="url"></label>

            <label class="field">Project 6 Title<input name="p5title" maxlength="100"></label>
            <label class="field">Project 6 Tags<input name="p5tag" maxlength="100"></label>
            <label class="field full">Project 6 Description<textarea name="p5description" maxlength="700"></textarea></label>
            <label class="field full">Project 6 URL<input name="p5url" type="url"></label>
          </div>

          <h3>Certificates Vault</h3>
          <div id="cert-editor-fields" class="field-grid"></div>
        </div>

        <div class="editor-actions">
          <button type="submit" class="btn btn-primary">Save Changes</button>
          <button type="button" class="reset" id="reset">Reset to Defaults</button>
        </div>
      </form>
    `;
    root.appendChild(dialog);
  }

  function buildCertInputs(certFieldsWrap, certificates) {
    if (!certFieldsWrap) return;
    certFieldsWrap.innerHTML = '';

    certificates.forEach((_, i) => {
      const block = document.createElement('div');
      block.className = 'field full';
      block.style.cssText = 'padding:14px;border:1px solid var(--border-strong);border-radius:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px';
      block.innerHTML = `
        <label class="field">Certificate ${i + 1} Title<input name="c${i}title" maxlength="100"></label>
        <label class="field">Issuer / Organization<input name="c${i}issuer" maxlength="100"></label>
        <label class="field">Year / Date<input name="c${i}date" maxlength="40"></label>
        <label class="field">Category
          <select name="c${i}category">
            <option value="ai">Google AI &amp; Prompting</option>
            <option value="technical">Web, Data &amp; Security</option>
          </select>
        </label>
        <label class="field full">Upload Certificate Photo (optional)<input type="file" accept="image/*" data-cert-upload="${i}"></label>
      `;
      certFieldsWrap.appendChild(block);
    });

    certFieldsWrap.querySelectorAll('input[data-cert-upload]').forEach(input => {
      input.addEventListener('change', e => {
        const idx = Number(input.dataset.certUpload);
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (currentData && currentData.certificates[idx]) {
            currentData.certificates[idx].image = String(reader.result);
            utils.notify(`Certificate ${idx + 1} image attached.`);
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function populate(form, data) {
    if (!form || !data) return;
    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      if (form.elements.namedItem(k)) form.elements.namedItem(k).value = data[k] || '';
    }
    if (Array.isArray(data.projects)) {
      data.projects.forEach((p, i) => {
        for (const k of ['title', 'description', 'tag', 'url']) {
          if (form.elements.namedItem('p' + i + k)) form.elements.namedItem('p' + i + k).value = p[k] || '';
        }
      });
    }
    if (Array.isArray(data.certificates)) {
      data.certificates.forEach((c, i) => {
        for (const k of ['title', 'issuer', 'date', 'category']) {
          if (form.elements.namedItem('c' + i + k)) form.elements.namedItem('c' + i + k).value = c[k] || '';
        }
      });
    }
  }

  function readForm(form, baseData) {
    const result = utils.copy(baseData);
    for (const k of ['name', 'role', 'intro', 'about', 'email', 'phone', 'facebook', 'github', 'linkedin']) {
      if (form.elements.namedItem(k)) result[k] = form.elements.namedItem(k).value.trim();
    }
    result.projects = result.projects.map((p, i) => {
      for (const k of ['title', 'description', 'tag', 'url']) {
        if (form.elements.namedItem('p' + i + k)) p[k] = form.elements.namedItem('p' + i + k).value.trim();
      }
      return p;
    });
    result.certificates = result.certificates.map((c, i) => {
      for (const k of ['title', 'issuer', 'date', 'category']) {
        if (form.elements.namedItem('c' + i + k)) c[k] = form.elements.namedItem('c' + i + k).value.trim();
      }
      return c;
    });
    return result;
  }

  components.editorModal = {
    init: function(data, onSaveCallback) {
      ensureEditorMounted();
      currentData = data;
      const form = utils.$('editor-form');
      const dialog = utils.$('editor');
      const certFieldsWrap = utils.$('cert-editor-fields');

      buildCertInputs(certFieldsWrap, currentData.certificates);

      utils.$('edit-toggle')?.addEventListener('click', () => {
        populate(form, currentData);
        dialog.showModal();
      });

      utils.$('manage-certs-btn')?.addEventListener('click', () => {
        populate(form, currentData);
        dialog.showModal();
      });

      utils.$('close-editor')?.addEventListener('click', () => dialog.close());

      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        currentData = readForm(form, currentData);
        services.storage.saveData(currentData);
        if (typeof onSaveCallback === 'function') onSaveCallback(currentData);
        utils.notify('Portfolio & certificates saved!');
        dialog.close();
      });

      utils.$('reset')?.addEventListener('click', () => {
        if (!confirm('Reset portfolio and certificates to defaults?')) return;
        currentData = services.storage.resetData();
        populate(form, currentData);
        if (typeof onSaveCallback === 'function') onSaveCallback(currentData);
        utils.notify('Defaults restored.');
      });
    }
  };
})(window.PortfolioApp.components, window.PortfolioApp.services, window.PortfolioApp.utils);
