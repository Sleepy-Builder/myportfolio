/**
 * Andrew G. Palaran — AI Models & Generative Suite Data
 * SVG vectors, accent styling, and metadata for the 14 AI tools.
 */

window.PortfolioApp = window.PortfolioApp || {};
window.PortfolioApp.config = window.PortfolioApp.config || {};

window.PortfolioApp.config.aiTools = [
  {
    name: 'ChatGPT',
    level: 'OpenAI · Reasoning',
    accentClass: 'icon-accent-openai',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.28 10.42a6.45 6.45 0 0 0-.52-4.93 6.64 6.64 0 0 0-4.04-3.32 6.55 6.55 0 0 0-6.17 1.15 6.5 6.5 0 0 0-4.37-.2 6.61 6.61 0 0 0-3.62 3.75 6.53 6.53 0 0 0-.82 5 6.47 6.47 0 0 0 .52 4.93 6.64 6.64 0 0 0 4.04 3.32 6.53 6.53 0 0 0 6.17-1.15 6.5 6.5 0 0 0 4.37.2 6.61 6.61 0 0 0 3.62-3.75 6.53 6.53 0 0 0 .82-5zM12 15.2a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2z"/></svg>`
  },
  {
    name: 'Claude',
    level: 'Anthropic · Analysis',
    accentClass: 'icon-accent-terracotta',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m13.8 2.5 1.5 5.2 5.1 1.6-4.5 3 1.3 5.2-4.6-2.8-4.5 3 1.3-5.2-4.6-3 5.2-1.6 1.4-5.2z"/></svg>`
  },
  {
    name: 'Gemini',
    level: 'Google · Multimodal',
    accentClass: '',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini-icon-grad)"/><defs><linearGradient id="gemini-icon-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#1ba0e1"/><stop offset="0.5" stop-color="#6366f1"/><stop offset="1" stop-color="#d946ef"/></linearGradient></defs></svg>`
  },
  {
    name: 'DeepSeek',
    level: 'Reasoning · Code',
    accentClass: 'icon-accent-blue',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.5 13.5C2.5 8.25 6.75 4 12 4c3.87 0 7.21 2.3 8.68 5.62-1.42-.5-3-.76-4.68-.76-5.8 0-10.5 4.7-10.5 10.5 0 .73.08 1.45.23 2.14A9.45 9.45 0 0 1 2.5 13.5zM12 20c4.42 0 8-3.58 8-8 0-.68-.09-1.34-.25-1.97A9.45 9.45 0 0 1 21.5 13.5c0 5.25-4.25 9.5-9.5 9.5-2.2 0-4.22-.75-5.83-2.02.73.02 1.48.02 2.23.02z"/></svg>`
  },
  {
    name: 'GitHub Copilot',
    level: 'Pair Programming',
    accentClass: 'icon-accent-violet',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`
  },
  {
    name: 'MS Copilot',
    level: 'Microsoft · Web AI',
    accentClass: '',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" fill="url(#ms-copilot-grad)"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><defs><linearGradient id="ms-copilot-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#0078d4"/><stop offset="0.5" stop-color="#605dec"/><stop offset="1" stop-color="#00a4ef"/></linearGradient></defs></svg>`
  },
  {
    name: 'Perplexity',
    level: 'AI Search & Research',
    accentClass: 'icon-accent-teal',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`
  },
  {
    name: 'Canva AI',
    level: 'Magic Studio',
    accentClass: 'icon-accent-cyan',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" fill="#00c4cc"/><path d="M17 14L18 17L21 18L18 19L17 22L16 19L13 18L16 17L17 14Z" fill="#7d2ae8"/></svg>`
  },
  {
    name: 'Midjourney',
    level: 'Generative Art',
    accentClass: 'icon-accent-purple',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l9 4 9-4M12 3v18M5 14l7-10 7 10"></path><circle cx="12" cy="11" r="1.5" fill="currentColor"></circle></svg>`
  },
  {
    name: 'Leonardo AI',
    level: 'Asset & Image Gen',
    accentClass: 'icon-accent-rose',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="url(#leo-card-grad)"/><path d="M12 6l2.2 4.5h4.8l-3.8 3 1.4 4.8-4.6-3.3-4.6 3.3 1.4-4.8-3.8-3h4.8z" fill="#fff"/><defs><linearGradient id="leo-card-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#9333ea"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs></svg>`
  },
  {
    name: 'Higgsfield',
    level: 'AI Video Motion',
    accentClass: 'icon-accent-rose',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="3"></rect><path d="M16 10l5-3v10l-5-3"></path><circle cx="9" cy="12" r="2.5" fill="currentColor"></circle></svg>`
  },
  {
    name: 'Suno',
    level: 'Generative Music',
    accentClass: 'icon-accent-amber',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="currentColor"></circle><path d="M6 12a6 6 0 0 1 12 0"></path><path d="M3 12a9 9 0 0 1 18 0"></path><path d="M9 16.5a6 6 0 0 0 6 0"></path></svg>`
  },
  {
    name: 'Notion AI',
    level: 'Docs & Workspace',
    accentClass: 'icon-accent-indigo',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M8 7v10l8-10v10"></path></svg>`
  },
  {
    name: 'Google Flow',
    level: 'Cloud Workflows',
    accentClass: '',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22.5 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h5.9c-.25 1.37-1.03 2.53-2.2 3.31v2.77h3.57c2.08-1.92 3.23-4.74 3.23-8.32z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>`
  }
];
