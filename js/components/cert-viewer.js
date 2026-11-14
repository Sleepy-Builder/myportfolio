/**
 * Andrew G. Palaran — Certificate Lightbox Viewer Component
 * Controls high-resolution certificate previews, verification links, and quick file upload.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.components = window.PortfolioApp.components || {};

(function(components, services, utils) {
  'use strict';

  let currentCertIndex = 0;
  let certsRef = [];

  function ensureModalMounted() {
    if (utils.$('cert-viewer')) return;
    const root = utils.$('cert-viewer-root') || document.body;
    const dialog = document.createElement('dialog');
    dialog.id = 'cert-viewer';
    dialog.setAttribute('aria-labelledby', 'cert-viewer-title');
    dialog.innerHTML = `
      <div class="editor-head">
        <div>
          <h2 id="cert-viewer-title" style="font-size:20px">Certificate Preview</h2>
          <p id="cert-viewer-sub" style="margin:4px 0 0;font-size:13px;color:var(--text-secondary)">Credential</p>
        </div>
        <button type="button" class="close-editor" id="close-cert-viewer" aria-label="Close preview">&times;</button>
      </div>
      <div class="cert-viewer-body">
        <div class="cert-viewer-stage" id="cert-viewer-stage"></div>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;align-items:center">
          <a class="btn btn-primary" id="cert-verify-link" hidden target="_blank" rel="noopener noreferrer">Verify Credential &nearr;</a>
          <a class="btn btn-outline" id="cert-pdf-link" hidden target="_blank" rel="noopener noreferrer">Open Official PDF &nearr;</a>
        </div>
      </div>
    `;
    root.appendChild(dialog);
  }

  components.certViewer = {
    init: function(certificates) {
      ensureModalMounted();
      certsRef = certificates || [];

      utils.$('close-cert-viewer')?.addEventListener('click', () => {
        utils.$('cert-viewer')?.close();
      });

      utils.$('cert-viewer')?.addEventListener('click', (e) => {
        if (e.target === utils.$('cert-viewer')) {
          utils.$('cert-viewer').close();
        }
      });

      utils.$('quick-cert-upload')?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (certsRef[currentCertIndex]) {
            certsRef[currentCertIndex].image = String(reader.result);
            const currentData = services.storage.loadData();
            currentData.certificates = certsRef;
            services.storage.saveData(currentData);
            if (components.certsCarousel) {
              components.certsCarousel.render(certsRef);
            }
            components.certViewer.open(currentCertIndex);
            utils.notify('Certificate image uploaded and saved!');
          }
        };
        reader.readAsDataURL(file);
      });
    },

    open: function(index) {
      ensureModalMounted();
      currentCertIndex = index;
      const cert = certsRef[index];
      if (!cert) return;

      const viewer = utils.$('cert-viewer');
      if (!viewer) return;

      if (utils.$('viewer-title')) utils.$('viewer-title').textContent = cert.title;
      if (utils.$('viewer-meta')) utils.$('viewer-meta').textContent = `${cert.issuer} · Issued ${cert.date}`;

      const stage = utils.$('viewer-stage');
      if (stage) {
        if (utils.hasValidImage(cert.image)) {
          stage.innerHTML = `<img src="${cert.image}" alt="${cert.title}" style="max-height:68vh;max-width:100%;object-fit:contain;border-radius:12px;box-shadow:var(--shadow-md);" />`;
        } else {
          stage.innerHTML = `
            <div class="cert-placeholder" style="height:260px;">
              <div class="cert-seal">✦</div>
              <span style="font:600 13px var(--font-mono);color:#fdba74">OFFICIALLY VERIFIED CREDENTIAL</span>
              <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:12px">${cert.issuer}</p>
            </div>
          `;
        }
      }

      const verifyBtn = utils.$('cert-verify-link');
      if (verifyBtn) {
        if (cert.verifyUrl) {
          verifyBtn.href = cert.verifyUrl;
          verifyBtn.hidden = false;
        } else {
          verifyBtn.hidden = true;
        }
      }

      const pdfBtn = utils.$('cert-pdf-link');
      if (pdfBtn) {
        if (cert.pdf) {
          pdfBtn.href = cert.pdf;
          pdfBtn.hidden = false;
        } else {
          pdfBtn.hidden = true;
        }
      }

      viewer.showModal();
    },

    close: function() {
      utils.$('cert-viewer')?.close();
    }
  };
})(window.PortfolioApp.components, window.PortfolioApp.services, window.PortfolioApp.utils);
