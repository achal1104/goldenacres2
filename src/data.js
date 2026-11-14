import { LandPlot, IndianRupee, FileCheck2, Stamp, Coins, UserPlus, Share2, Users, Landmark, ShieldCheck, Headset, ScrollText } from 'lucide-react';

const env = import.meta.env;
const B = env.BASE_URL;

/* ---------- Contact (all optional, set in .env) ---------- */
export const CONTACT = {
  phone: env.VITE_PHONE || '',
  email: env.VITE_EMAIL || '',
  address: env.VITE_ADDRESS || '',
  whatsapp: (env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
};
export const waLink = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

/* ---------- Navigation ---------- */
export const NAV = [
  ['Home', 'home'], ['About Us', 'about'], ['Land Ownership', 'ownership'], ['Gold Benefits', 'gold'],
  ['Referral Programme', 'referral'], ['How It Works', 'how'], ['Contact Us', 'contact'],
];

/* ---------- Photography (supplied project visuals) ---------- */
export const PHOTO = {
  aerial: { src: `${B}images/aerial.jpg`, webp: `${B}images/aerial.webp` },
  layout: { src: `${B}images/layout.jpg`, webp: `${B}images/layout.webp` },
  road: { src: `${B}images/road.jpg`, webp: `${B}images/road.webp` },
};

/* ---------- Programme facts (single source of truth) ---------- */
export const PROGRAMME = { price: 200000, guntha: 1, monthlyGold: 2.5, months: 6, referralGold: 1 };
export const SALE_DEED_NOTE = 'Sale deed is scheduled within 14 days of payment, subject to title verification, documentation and registration requirements.';
export const CALC_NOTE = 'Calculations are illustrative and assume all referral rewards are eligible and run concurrently for six months, according to the programme terms.';

export const ABOUT_CARDS = [
  ['Secure Land Ownership', 'Purchase 1 Guntha through a documented process: title verification, documentation and sale deed registration.'],
  ['Monthly Gold Benefits', 'Become eligible for 2.5 grams of gold every month for six months, subject to programme terms.'],
  ['Rewarding Referrals', 'Every customer receives a unique Referral ID to share with friends, family and business contacts.'],
];

export const REFERRAL_STEPS = [
  [LandPlot, 'You purchase land', 'Complete your purchase of 1 Guntha for ₹2,00,000.'],
  [UserPlus, 'Receive your Referral ID', 'Every customer receives a unique Referral ID.'],
  [Share2, 'Share with friends & family', 'Share your ID with people you know who may want to own land.'],
  [Users, 'They complete a land purchase', 'Your referral successfully purchases land using your Referral ID.'],
  [Coins, 'You earn additional gold', 'Each successful referral adds gold to your monthly benefit.'],
];

export const HOW_STEPS = [
  [LandPlot, 'Choose Your Land', 'Explore the available land ownership opportunity.'],
  [IndianRupee, 'Complete ₹2,00,000 Payment', 'Complete the purchase payment for 1 Guntha of land.'],
  [FileCheck2, 'Land Documentation Process', 'Goldenacres begins title verification and documentation.'],
  [Stamp, 'Sale Deed Registration', 'Scheduled within 14 days of payment, subject to documentation and registration requirements.'],
  [Coins, 'Receive Monthly Gold Benefits', 'Become eligible for 2.5 grams of gold every month for six months, per programme terms.'],
];

export const TRUST = [
  [FileCheck2, 'Land documentation', 'Title verification and documentation come before registration. The document checklist is confirmed by Goldenacres on request.'],
  [Landmark, 'Ownership process', 'You purchase 1 Guntha for ₹2,00,000. The sale deed is scheduled within 14 days of payment, subject to title verification, documentation and registration requirements.'],
  [Coins, 'Gold bonus eligibility', '2.5 grams of gold every month for six months. Eligibility, delivery schedule and fulfilment follow the official programme terms.'],
  [ScrollText, 'Referral reward conditions', 'A referral counts when the person successfully purchases land using your Referral ID. Limits, tracking and timing are set out in the programme terms.'],
  [Headset, 'Customer support', 'Request project details or a consultation through the enquiry form or WhatsApp, and our team will get in touch.'],
];

export const DETAILS = [
  ['Land area', '1 Guntha'], ['Land price', '₹2,00,000'], ['Sale deed', 'Within 14 days of payment*'], ['Project location', 'To be confirmed'],
  ['Survey number / plot', 'To be confirmed'], ['Taxes and charges', 'To be confirmed'], ['Possession details', 'To be confirmed'],
];

export const FAQ = [
  ['What is the Goldenacres Land Ownership Programme?', 'Goldenacres offers a land ownership opportunity combined with a monthly gold bonus and a referral reward programme. You purchase 1 Guntha of land and, subject to the programme terms, become eligible for gold benefits.'],
  ['What is the price of 1 Guntha land?', '1 Guntha is priced at ₹2,00,000. Applicable taxes and charges will be confirmed by Goldenacres before purchase.'],
  ['How much gold will I receive?', 'You become eligible for 2.5 grams of gold every month, which is 15 grams in total over six months, subject to the programme terms.'],
  ['For how many months will I receive gold?', 'Six months. The monthly bonus of 2.5 grams runs for six consecutive months. Referral rewards also run for six months per successful referral.'],
  ['When will my sale deed be completed?', 'The sale deed is scheduled within 14 days of payment, subject to title verification, documentation and registration requirements.'],
  ['How does the referral programme work?', 'Every customer receives a unique Referral ID. When someone successfully purchases land using your ID, you become eligible for an additional gold reward under the programme terms.'],
  ['How much gold can I earn through referrals?', 'Each successful referral earns 1 gram of gold per month for six months, which is 6 grams per referral. For example, 3 referrals add 3 grams a month, so 33 grams over six months including your own 15 grams. This assumes all rewards run concurrently, per programme terms.'],
  ['Can I refer multiple customers?', 'The same process applies to every additional successful referral. Any limits or conditions are stated in the official programme terms, which are available on request.'],
  ['What happens if a referred customer cancels their purchase?', 'This is governed by the official programme terms, which are not reproduced on this page. Please request the terms through the enquiry form and read them before you decide.'],
  ['What are the terms and conditions of the programme?', 'Eligibility, delivery schedule, gold form and fulfilment are covered by the official Goldenacres programme terms, available on request through the enquiry form.'],
];

export const NEXT_STEPS = [
  ['We get in touch', 'Our team contacts you by phone, WhatsApp or email.'],
  ['Project walkthrough', 'We explain the project, the ownership documentation and the gold programme.'],
  ['You decide', 'Review the details and programme terms before making any decision.'],
];

export const LEGAL = {
  privacy: { title: 'Privacy Policy', body: ['The official Goldenacres Privacy Policy will be published on this page.', 'Details you submit through the enquiry form are used only to respond to your enquiry. Until the full policy is published, you can request a copy through the enquiry form.'] },
  terms: { title: 'Terms & Conditions', body: ['The official programme terms govern land purchase, gold bonus eligibility, delivery schedule, gold form and fulfilment, and referral rewards, including limits, tracking and cancellation.', 'The full Terms & Conditions are available on request through the enquiry form. Please read them before making any decision.'] },
  disclaimer: { title: 'Disclaimer', body: ['Gold bonus and referral rewards are subject to the official programme terms, including eligibility, timing and fulfilment.', 'Gold calculations on this website are illustrative. Goldenacres does not promise returns, appreciation or investment growth.', 'The sale deed is scheduled within 14 days of payment, subject to title verification, documentation and registration requirements.', 'Images on this website are illustrative visuals; actual project photographs and documents are shared during the consultation.'] },
};
export const LEGAL_ICON = ShieldCheck;

/* ---------- Page routes (each nav item opens its own page) ---------- */
export const PATHS = { home: '/', about: '/about', ownership: '/land-ownership', gold: '/gold-benefits', referral: '/referral-programme', calculator: '/referral-programme', how: '/how-it-works', experience: '/about', trust: '/how-it-works', faq: '/how-it-works', contact: '/contact' };

