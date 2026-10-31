import { site, services } from './config.mjs';

// Cache-busting suffix for CSS/JS (they are served with a long cache lifetime).
const v = Date.now().toString(36);

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const icons = {
  phone: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
  clock: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>',
  mail: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>',
  pin: '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>',
  check: '<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>',
  menu: '<path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>',
  close: '<path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/>',
  chevron: '<path d="M7 10l5 5 5-5z"/>',
  star: '<path d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.4 14l-1.6 7z"/>',
  team: '<path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 2 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"/>',
  timer: '<path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8-6.6 1.4-1.4c-.4-.5-.9-1-1.4-1.4L17.6 6A9 9 0 1 0 21 13a9 9 0 0 0-2-5.6zM12 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>',
  medal: '<path d="M12 7a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm2.4 10.6L12 16.2l-2.4 1.4.6-2.7-2.1-1.8 2.8-.3L12 10.3l1.1 2.5 2.8.3-2.1 1.8.6 2.7zM8 2h8l-2 4h-4z"/>',
  heart: '<path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>',
  facebook: '<path d="M14 8V6c0-.8.2-1.3 1.4-1.3H17V1.2C16.6 1.1 15.4 1 14 1c-2.9 0-4.9 1.8-4.9 5V8H6v3.9h3.1V23H14V11.9h3l.5-3.9z"/>',
  instagram: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1C5.3 20 4 18.7 3.9 16c-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1zM12 2C9.3 2 8.9 2 7.9 2.1 4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.1 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2z"/>',
  tiktok: '<path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.6a2.9 2.9 0 1 1-2-2.7V9.4a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 4.8 1.5V6.8z"/>',
  youtube: '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.7 15.5v-7l6 3.5z"/>',
};

export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name]}</svg>`;

export const telLink = (cls, label, track = 'phone_click') =>
  `<a class="${cls}" href="tel:${site.phone.tel}" data-track="${track}">${label}</a>`;

export const socials = (cls = 'socials') => `
<ul class="${cls}">
  ${Object.entries(site.social).map(([k, url]) => `<li><a href="${url}" target="_blank" rel="noopener" aria-label="${k}">${icon(k)}</a></li>`).join('')}
</ul>`;

// UCO wordmark (white letters with an orange edge, "CONSTRUCTION" underneath).
export const logo = (cls = 'logo') => `
<a class="${cls}" href="/" aria-label="${esc(site.company)} home">
  <span class="logo-mark">UCO</span>
  <span class="logo-sub">Construction</span>
</a>`;

export const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

const gtmHead = () =>
  site.gtmId
    ? `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');</script>`
    : '<script>window.dataLayer=window.dataLayer||[];</script>';

const gtagHead = () =>
  site.googleAdsId
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.googleAdsId}');</script>`
    : '';

const navLinks = () => `
  <li><a href="/">Home</a></li>
  <li><a href="/#about">About us</a></li>
  <li class="has-drop">
    <a href="/#services">Services ${icon('chevron', 'icon drop-caret')}</a>
    <ul class="drop">
      ${services.map((s) => `<li><a href="/#${s.id}">${esc(s.title)}</a></li>`).join('')}
    </ul>
  </li>
  <li><a href="/#projects">Projects</a></li>
  <li><a href="#quote">Contact us</a></li>`;

const header = () => `
<header class="site-header">
  <div class="header-bar">
    ${logo()}
    <nav class="main-nav" aria-label="Main menu"><ul>${navLinks()}</ul></nav>
    ${telLink('header-phone', `${icon('phone')}<span>${site.phone.display}</span>`)}
    <a class="btn btn-white header-cta" href="#quote" data-track="quote_click">Get a free quote now</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu"><span></span><span></span></button>
  </div>
  <nav id="site-menu" class="site-menu" hidden aria-label="Mobile menu">
    <div class="menu-panel">
      <button class="menu-close" type="button" aria-label="Close menu">${icon('close')}</button>
      <ul class="menu-list">
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#footer">Contact us</a></li>
      </ul>
      ${telLink('menu-phone', `${icon('phone')} ${site.phone.display}`)}
      <a class="btn btn-accent btn-block" href="#quote" data-track="quote_click">Get a free quote ${arrow}</a>
    </div>
  </nav>
</header>`;

const quoteModal = () => `
<div id="quote" class="modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">
  <a class="modal-backdrop" href="#" aria-label="Close"></a>
  <div class="modal-box">
    <a class="modal-close" href="#" aria-label="Close">${icon('close')}</a>
    <form class="lead-form" action="/api/lead" method="post" novalidate>
      <p id="quote-title" class="form-title">Get a free estimate</p>
      <p class="form-note">Leave your details and we\u2019ll call you within 15 minutes during business hours (Mon\u2013Sat, 8am\u20136pm) to book a free on-site visit. No obligation.</p>
      <label><span class="sr-only">Name</span><input name="name" autocomplete="name" required maxlength="80" placeholder="Name*"></label>
      <label class="phone-field"><span class="sr-only">Phone</span><span class="phone-prefix" aria-hidden="true">\ud83c\udde8\ud83c\udde6 +1</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel" required maxlength="30" placeholder="Phone*"></label>
      <label><span class="sr-only">Email address</span><input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="Email Address*"></label>
      <label><span class="sr-only">Postal code</span><input name="postal" autocomplete="postal-code" required maxlength="10" placeholder="Postal Code*"></label>
      <input type="hidden" name="service" value="Snow removal \u2013 free estimate">
      <input class="hp" name="company_website" tabindex="-1" autocomplete="off" aria-hidden="true">
      <input type="hidden" name="utm_source"><input type="hidden" name="utm_medium"><input type="hidden" name="utm_campaign">
      <input type="hidden" name="utm_term"><input type="hidden" name="gclid"><input type="hidden" name="page">
      <button class="btn btn-accent btn-block" type="submit">Get a free quote</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</div>`;

const footer = () => `
<footer id="footer" class="site-footer">
  <div class="footer-panel">
    ${logo('logo footer-logo')}
    <ul class="footer-links">
      <li><a href="/">Home</a></li>
      <li><a href="/#about">About us</a></li>
    </ul>
    <ul class="footer-links">
      <li><a href="/#services">Services</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="#quote">Contact us</a></li>
    </ul>
    <ul class="footer-contacts">
      <li><a href="mailto:${site.email}">${icon('mail')}${site.email}</a></li>
      <li>${telLink('', `${icon('phone')}${site.phone.display}`)}</li>
    </ul>
    <div class="footer-right">
      <p>Mon-Sat: 8:00am-6:00pm</p>
      <p>${esc(site.address)}</p>
      ${socials()}
    </div>
    <p class="footer-copy">\u00a9 ${new Date().getFullYear()} ${esc(site.company.toUpperCase())}. All rights reserved \u00b7 <a href="/privacy/">Privacy policy</a></p>
  </div>
</footer>
<div class="sticky-cta" role="region" aria-label="Contact us">
  ${telLink('sticky-call', `${icon('phone')}<span>${site.phone.display}</span>`)}
  <a class="sticky-quote" href="#quote" data-track="quote_click">Get a free quote ${arrow}</a>
</div>
${quoteModal()}`;

const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.brand,
  parentOrganization: { '@type': 'Organization', name: site.company },
  description: 'Residential and commercial snow removal, salting and roof snow removal in Toronto & the GTA',
  url: site.url,
  telephone: site.phone.tel,
  email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: '199 Roehampton Ave', addressLocality: 'Toronto', addressRegion: 'ON', postalCode: 'M4P 1R5', addressCountry: 'CA' },
  openingHours: 'Mo-Sa 08:00-18:00',
  areaServed: { '@type': 'City', name: 'Toronto' },
  sameAs: Object.values(site.social),
});

export function page({ path, title, description, body, schema = [], noindex = false }) {
  const canonical = site.url + path;
  const ld = [orgSchema(), ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('');
  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${gtagHead()}
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}/assets/img/hero.jpg">
<meta name="theme-color" content="#06446b">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,600;125,700;125,800&family=Montserrat:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/css/main.css?v=${v}">
${gtmHead()}
${ld}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header()}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js?v=${v}" defer></script>
</body>
</html>
`;
}
