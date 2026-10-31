import { site, services, values, badges, reviews, gallery, beforeAfter } from './config.mjs';
import { page, esc, icon, telLink, arrow } from './layout.mjs';

const pic = (name, alt, { eager = false, cls = '' } = {}) =>
  `<picture><source type="image/webp" srcset="/assets/img/work/${name}.webp"><img class="${cls}" src="/assets/img/work/${name}.jpg" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;

const stars = () => `<span class="stars" aria-label="5 out of 5 stars">${icon('star').repeat(5)}</span>`;

const badgeStrip = () => `
<div class="badges" aria-label="Find us on">
  <div class="marquee">
    <ul class="marquee-track">${badges.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    <ul class="marquee-track" aria-hidden="true">${badges.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </div>
</div>`;

const valueIcons = ['team', 'timer', 'medal', 'heart'];

const title2 = (first, accent, rest = '') => `${first} <span class="accent">${accent}</span>${rest}`;
const arrows = (target) => `
<div class="slider-arrows">
  <button type="button" class="arrow-btn" data-slide="${target}" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
  <button type="button" class="arrow-btn" data-slide="${target}" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
</div>`;

const home = () => {
  const body = `
<section class="hero">
  <div class="hero-top">
    <h1>Snow removal &amp; salting — done right across Toronto and the GTA</h1>
    <p class="hero-lead">Keep your home or business safe and clear all winter with our professional approach and reliable crews. Whatever the storm brings, our experienced team will deliver great results!</p>
  </div>
  <div class="hero-photo">
    <picture><source srcset="/assets/img/hero.webp" type="image/webp"><img src="/assets/img/hero.jpg" alt="Driveway of a Toronto house cleared after a heavy snowfall" fetchpriority="high"></picture>
    <a class="estimate-blob" href="#quote" data-track="quote_click"><span>Get a free estimate</span>${arrow}</a>
  </div>
</section>

<section id="about" class="section about">
  <div class="container about-inner">
    <div class="about-copy">
      <h2 class="h2">${title2('Clearing the way', 'together', ' with you')}</h2>
      <p>${esc(site.company)} clears driveways, walkways and steps, salts and de-ices, and removes snow from flat roofs, decks and balconies for homeowners and property managers across Toronto and the GTA.</p>
    </div>
    <div class="about-side">
      <a class="link-arrow about-link" href="#services">About us ${arrow}</a>
      <ul class="stats">
        <li><strong>8+</strong><span>years of experience</span></li>
        <li><strong>16</strong><span>qualified employees</span></li>
        <li><strong>9.9</strong><span>customer rating</span></li>
      </ul>
    </div>
  </div>
</section>

<section id="services" class="panel services">
  <div class="panel-head">
    <h2 class="h2 light">${title2('Our snow removal', '<br>services')}</h2>
    ${arrows('services-track')}
  </div>
  <div id="services-track" class="services-track">
    ${services.map((s, i) => `
    <article id="${s.id}" class="service-card${i % 5 === 1 ? ' tall' : ''}">
      <div class="service-text">
        <h3>${esc(s.title)}</h3>
        <a href="#quote" class="link-arrow" data-track="quote_click">Learn more ${arrow}</a>
      </div>
      <div class="service-photo">${pic(s.img, s.title)}</div>
    </article>`).join('')}
  </div>
  <button type="button" class="services-more" aria-label="Show all services"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
</section>

<section class="section why">
  <div class="container why-inner">
    <div class="values-grid">
      ${values.map((v) => `<div class="value"><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></div>`).join('')}
    </div>
    <div class="why-copy">
      <h2 class="h2">${title2('Why', 'choose us', ' for your snow removal')}</h2>
      <p>Choosing us means partnering with a company that shows up after every snowfall. Our experienced crews, proper equipment and salt, respect for schedules and focus on client satisfaction mean your property is cleared with care and professionalism all winter long.</p>
    </div>
  </div>
  ${badgeStrip()}
</section>

<section id="projects" class="section projects">
  <div class="container">
    <h2 class="h2 center">${title2('Our', 'projects')}</h2>
    <div class="work-grid">
      ${gallery.map((g) => `<figure class="work-item">${pic(g.img, g.alt)}</figure>`).join('')}
    </div>
  </div>
  <div class="panel ba-panel">
    <h2 class="h2 light center">${title2('Before', '&amp; after')}</h2>
    <div class="ba-grid">
      ${beforeAfter.map((p) => `
      <div class="ba-pair">
        <figure class="ba-shot">${pic('ba-' + p.before, 'Before: ' + p.alt)}<span class="ba-tag">Before</span></figure>
        <figure class="ba-shot">${pic('ba-' + p.after, 'After: ' + p.alt)}<span class="ba-tag ba-tag-after">After</span></figure>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="section reviews">
  <div class="reviews-inner">
    <div class="reviews-head">
      <h2 class="h2">${title2('Customer', 'testimonials')}</h2>
      <p>We take pride in delivering service that exceeds our clients’ expectations</p>
      ${arrows('reviews-track')}
    </div>
    <div class="reviews-panel">
      <div id="reviews-track" class="reviews-track">
        ${reviews.map((r) => `
        <figure class="review">
          <div class="review-top">${stars()}<span class="review-date">${esc(r.date)}</span></div>
          <figcaption>${esc(r.name)}</figcaption>
          <blockquote>${esc(r.text)}</blockquote>
          <a class="link-arrow" href="${site.homestars}" target="_blank" rel="noopener">Read the review ${arrow}</a>
        </figure>`).join('')}
      </div>
    </div>
  </div>
</section>
${moreSection()}`;

  return page({
    path: '/',
    title: `Snow Removal Contractor Toronto | Driveways, Salting, Roofs | UCO`,
    description: `Snow removal across Toronto and the GTA: driveways, walkways, salting, ice and roof snow. 8+ years, 16 qualified employees. Free estimate: ${site.phone.display}.`,
    body,
  });
};

// "Check out the services we provide": UCO Lights, UCO Gutters and UCO Group. Also shown on the thank-you and post-call pages.
const partnerCards = [
  { url: site.lightsUrl, track: 'lights_click', brand: 'UCO Lights', title: 'Permanent holiday lights', text: 'Slim LED tracks hidden under your roofline, controlled from your phone. No more ladders every winter.', cta: 'See UCO Lights', img: 'lights-holiday-mix', alt: 'House outlined with permanent multicolour holiday lights' },
  { url: site.guttersUrl, track: 'gutters_click', brand: 'UCO Gutters', title: 'Gutter cleaning & repair', text: 'Gutters cleaned and repaired so meltwater drains away instead of freezing into ice dams and icicles.', cta: 'See UCO Gutters', img: 'winter-icicles', alt: 'Icicles hanging from a roof under heavy snow' },
  { url: site.groupUrl, track: 'group_click', brand: 'UCO Group', title: 'Decks, fences, flooring & painting', text: 'Deck building and restoration, fences, hardwood floors and painting across Toronto and the GTA.', cta: 'Visit ucogroup.ca', logo: true },
];

const moreSection = () => `
<section id="partners" class="section partners-section">
  <div class="container">
    <h2 class="h2 center">Check out the <span class="accent">services we provide</span></h2>
    <div class="more-grid">
      ${partnerCards.map((c) => `
      <a class="more-card" href="${c.url}" target="_blank" rel="noopener" data-track="${c.track}">
        <div class="more-photo${c.logo ? ' more-logo' : ''}">${c.logo ? '<span class="logo-mark">UCO</span><span class="logo-sub">Group</span>' : pic(c.img, c.alt)}</div>
        <div class="more-copy">
          <span class="more-brand">${esc(c.brand)}</span>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.text)}</p>
          <span class="btn btn-accent">${esc(c.cta)} →</span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>`;

const thankYou = () =>
  page({
    path: '/thank-you/',
    title: `Thank you | ${site.brand}`,
    description: 'Your submission has been received.',
    noindex: true,
    body: `
<section class="section thanks">
  <div class="container narrow center">
    <span class="thanks-icon">${icon('check')}</span>
    <h1>Thank you! Your submission has been received!</h1>
    <p>We will call you back shortly. Need us sooner?</p>
    ${telLink('btn btn-accent btn-lg', `${icon('phone')} <span>${site.phone.display}</span>`)}
  </div>
</section>
${moreSection()}
<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'generate_lead'});</script>`,
  });

// Shown after a visitor taps a phone number (see main.js).
const interested = () =>
  page({
    path: '/you-may-be-interested/',
    title: `You may be interested | ${site.brand}`,
    description: 'Other home services from our partners in Toronto & the GTA.',
    noindex: true,
    body: `
<section class="section thanks">
  <div class="container narrow center">
    <span class="thanks-icon">${icon('phone')}</span>
    <p class="kicker">Thanks for calling UCO</p>
    <h1>You may be interested</h1>
    <p>While we take care of the snow, here is what our partners do for Toronto homes.</p>
  </div>
</section>
${moreSection()}
<section class="section">
  <div class="container narrow center">
    <h2>Call didn’t go through?</h2>
    <p>Call again or leave a request and we will call you back.</p>
    <div class="hero-ctas center">
      ${telLink('btn btn-accent btn-lg', `${icon('phone')} <span>${site.phone.display}</span>`)}
      <a class="btn btn-outline btn-lg" href="#quote" data-track="quote_click">Get a free quote</a>
    </div>
  </div>
</section>`,
  });

const privacy = () =>
  page({
    path: '/privacy/',
    title: `Privacy Policy | ${site.brand}`,
    description: `How ${site.company} handles information you send through this website.`,
    body: `
<article class="section article">
  <div class="container narrow">
    <h1>Privacy policy</h1>
    <p>This website is operated by ${esc(site.company)}. We handle personal information in line with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
    <h2>What we collect</h2>
    <p>When you request an estimate we collect your name, phone number, email and postal code, and the advertising campaign that brought you to the site.</p>
    <h2>How we use it</h2>
    <p>Only to contact you about your request, prepare an estimate and provide the service. We do not sell or rent your information.</p>
    <h2>Contact</h2>
    <p>To access or delete your information, email <a href="mailto:${site.email}">${site.email}</a> or call <a href="tel:${site.phone.tel}">${site.phone.display}</a>.</p>
  </div>
</article>`,
  });

const notFound = () =>
  page({
    path: '/404',
    title: `Page not found | ${site.brand}`,
    description: 'Page not found.',
    noindex: true,
    body: `
<section class="section">
  <div class="container narrow center">
    <h1>Page not found</h1>
    <p>The page you are looking for doesn’t exist.</p>
    <a class="btn btn-accent" href="/">Go to home page</a>
  </div>
</section>`,
  });

export const pages = () => [
  ['index.html', home()],
  ['thank-you/index.html', thankYou()],
  ['you-may-be-interested/index.html', interested()],
  ['privacy/index.html', privacy()],
  ['404.html', notFound()],
];

export const sitemapPaths = () => ['/', '/privacy/'];
