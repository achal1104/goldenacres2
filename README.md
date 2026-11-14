# Goldenacres: React (Vite) frontend, luxury light-theme redesign

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

Stack unchanged: React 18, Vite, React Router, Framer Motion, lucide-react. New: self-hosted fonts via `@fontsource` (Cormorant Garamond + Manrope), so no Google Fonts request.

## Structure
- `src/sections/`: one component per homepage section (Hero, About, Offer, GoldTimeline, Referral, Calculator, HowItWorks, Gallery, Trust, Faq, Contact)
- `src/components/`: Navbar, Footer, Reveal, Counter, Coin, Particles, Photo, SectionHead, Logo
- `src/styles/`: `tokens.css` (palette, type, shadows), `base.css`, then nav / hero / sections / tools / footer
- `src/data.js`: **all copy and programme facts** (prices, grams, FAQ, steps, legal text). Edit here, not in components
- Routes: `/` (single-page site with anchors), `/privacy-policy`, `/terms-and-conditions`, `/disclaimer`. Old URLs (`/about`, `/faqs`, `/contact` …) redirect to the matching section

## Enquiry form
- Set `VITE_API_URL` in `.env` (POST JSON: `name, mobile, email, interest, msg`). **Note:** the old `city` and `pref` fields were replaced by `interest`; adjust your backend if it requires them.
- With no `VITE_API_URL`, the form validates, then tells the visitor the enquiry was **not** sent and offers WhatsApp / email instead. It never reports a fake success.
- Optional contact details (`VITE_PHONE`, `VITE_EMAIL`, `VITE_ADDRESS`, `VITE_WHATSAPP_NUMBER`) appear in the contact section and footer only when set.

## Content still to be confirmed (shown as "To be confirmed" in "Project information")
Project location, survey number/plot, taxes and charges, possession details. Edit `DETAILS` in `src/data.js`. Legal pages hold honest placeholders until the official documents are supplied (`LEGAL` in `data.js`).

## Imagery
Photos live in `public/images/` (jpg + webp). The supplied images are 572×1024, so they are used in portrait frames and moderate crops. Replace with higher-resolution drone photography for a full-bleed cinematic hero.
