// Site-wide settings. Change values here and rebuild (`npm run build`).
export const site = {
  brand: 'UCO Snow Removal',
  company: 'UCO Construction Group',
  // Production URL, used for canonical links, sitemap and structured data.
  // While it is a workers.dev address the www/workers.dev redirects in src/worker.js stay off.
  url: 'https://uco-snow-removal.unknwn-creation.workers.dev',
  phone: { display: '(416) 779-0055', tel: '+14167790055' },
  email: 'info@ucogroup.ca',
  address: '199 Roehampton Ave, Toronto, ON M4P 1R5',
  hours: 'Mon-Sat, 8:00am-6:00pm',
  area: 'Toronto & the GTA',
  // Sister sites promoted on the "You may be interested" page.
  lightsUrl: 'https://lights-toronto.unknwn-creation.workers.dev/',
  guttersUrl: 'https://gutters-toronto.unknwn-creation.workers.dev/',
  social: {
    facebook: 'https://www.facebook.com/ucogroup.ca',
    instagram: 'https://www.instagram.com/ucogroup.ca',
    tiktok: 'https://www.tiktok.com/@ucogroup.ca',
    youtube: 'https://youtube.com/@ucogroup',
  },
  homestars: 'https://www.homestars.com/profile/2985799-uco-construction-group/reviews',
  // Google Tag Manager container ID, e.g. 'GTM-XXXXXXX'. Empty = no GTM.
  gtmId: '',
  // Google Ads tag (gtag.js) on every page. Empty = no tag.
  googleAdsId: '',
};

// Service cards: photo name in public/assets/img/work/ (without extension).
export const services = [
  { id: 'driveways', title: 'Driveway snow clearing', img: 'job-garage-drive', text: 'Driveways cleared edge to edge down to the pavement, from single pads to long shared laneways.' },
  { id: 'walkways', title: 'Walkways, steps & porches', img: 'job-porch-shovel', text: 'Front walks, porches, stairs and the city sidewalk shovelled by hand and left safe to walk on.' },
  { id: 'salting', title: 'Salting & de-icing', img: 'job-driveway', text: 'Rock salt or pet-friendly ice melt spread after clearing, so refreeze does not turn it into a rink.' },
  { id: 'ice', title: 'Ice removal', img: 'job-stone-walk', text: 'Packed snow and ice scraped off driveways and walkways, then treated so nobody slips.' },
  { id: 'flat-roofs', title: 'Flat roof snow removal', img: 'job-flat-roof', text: 'Heavy snow shovelled off flat and garage roofs by hand, without damaging the membrane.' },
  { id: 'decks', title: 'Decks & balconies', img: 'job-roof-deck', text: 'Rooftop decks, balconies and terraces cleared before the weight and meltwater cause damage.' },
  { id: 'roof', title: 'Roof snow & ice dams', img: 'job-low-roof', text: 'Snow raked off sloped roofs, icicles knocked down and ice dams opened so water can drain.' },
  { id: 'icicles', title: 'Icicle removal', img: 'job-carport-icicles', text: 'Dangerous icicles removed from eaves, carports and gutters above doors and walkways.' },
  { id: 'windrow', title: 'Windrow clearing', img: 'job-semi-driveway', text: 'The heavy ridge the city plow leaves at the end of your driveway cleared, so the car gets out.' },
  { id: 'lanes', title: 'Laneways & garages', img: 'job-garage-lane', text: 'Rear lanes and garage aprons dug out so doors open and cars can get in and out.' },
  { id: 'commercial', title: 'Commercial properties', img: 'job-side-lane', text: 'Storefronts, plazas, condos and townhouse complexes cleared and salted all season.' },
];

// Value points under the services grid.
export const values = [
  { title: 'Experienced team', text: 'Our crews are skilled, insured professionals who clear snow in Toronto every winter.' },
  { title: 'Timely completion', text: 'We plan routes around every storm, so your property is cleared on time, every time.' },
  { title: 'Quality equipment', text: 'Proper shovels, blowers and salt spreaders, and pet-friendly ice melt on request.' },
  { title: 'Client focus', text: 'We listen to how you want your property cleared and make sure it is done that way.' },
];

// Review sites shown as a logo strip (text wordmarks).
export const badges = ['HomeService', 'HomeStars', 'Home Depot Pro', "Lowe's", 'Bark', 'Google', 'Three Best Rated', 'Houzz'];

// Short excerpts from UCO Construction Group client reviews.
export const reviews = [
  { name: 'Seema Mehta', date: 'July 23, 2026', text: 'Vadym’s team was wonderful. They worked around the clock.' },
  { name: 'Jenn H', date: 'August 10, 2026', text: 'The team was respectful, efficient, hard-working.' },
  { name: 'Athena Felekides', date: 'July 20, 2026', text: 'Very professional from start to finish.' },
  { name: 'Helen', date: 'August 2, 2026', text: 'Yuri and his team did an amazing job.' },
  { name: 'Harvey Stein', date: 'July 13, 2026', text: 'Competitive quote, close attention to detail. Highly recommended.' },
  { name: 'Valene Polson', date: 'August 1, 2026', text: 'They showed up on time and didn’t need much from us.' },
];

// Photos from real jobs in Toronto. Images live in public/assets/img/work/
// as .jpg + .webp with the same name; pass the name without extension.
export const gallery = [
  { img: 'job-stone-house', alt: 'Wide driveway of a stone house in Toronto cleared after a heavy snowfall' },
  { img: 'job-car-dig', alt: 'Car dug out of deep snow on a Toronto street' },
  { img: 'job-roof-ledge', alt: 'Flat roof ledge shovelled clear of snow' },
  { img: 'job-backyard', alt: 'Backyard path shovelled through deep snow' },
  { img: 'job-night-drive', alt: 'Driveway cleared at night after a snowstorm' },
  { img: 'job-walkway', alt: 'Front walkway to a brick house shovelled clear between snowbanks' },
  { img: 'job-bungalow', alt: 'Driveway of a Toronto bungalow cleared after the street was plowed' },
  { img: 'winter-icicles', alt: 'Snow and icicles on the roof of a backyard garage' },
];

// Before / after pairs. Files: public/assets/img/work/ba-<name>.(jpg|webp).
export const beforeAfter = [
  { before: 'lane-before', after: 'lane-after', alt: 'laneway in front of two garage doors, buried in snow and then cleared' },
  { before: 'porch-before', after: 'porch-after', alt: 'front porch and steps covered in snow, then shovelled clear' },
  { before: 'stone-drive-before', after: 'stone-drive-after', alt: 'driveway of a stone house under snow, then cleared' },
  { before: 'garage-before', after: 'garage-after', alt: 'garage apron blocked by snow, then dug out' },
];
