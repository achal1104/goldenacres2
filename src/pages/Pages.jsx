import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import SectionHead from '../components/SectionHead';
import Contact from '../sections/Contact';
import useGoTo from '../hooks/useGoTo';
import { ABOUT_CARDS, DETAILS, HOW_STEPS, REFERRAL_STEPS, TRUST, NEXT_STEPS, FAQ, PROGRAMME, SALE_DEED_NOTE, CALC_NOTE } from '../data';

const fmt = (n) => (Number.isInteger(n) ? n : n.toFixed(1));
function Hero({ label, title, text, photo, pos, chips = [], badge }) {
  return (
    <header className="ip__hero"><div className="wrap ip__hin">
      <div className="ip__txt">
        <p className="ip__lab">{label}</p><h1>{title}</h1><p>{text}</p>
        {chips.length > 0 && <ul className="ip__chips">{chips.map((c) => <li key={c}>{c}</li>)}</ul>}
      </div>
      <div className="ip__art">
        <Photo name={photo} pos={pos} eager className="ip__img" alt="" />
        {badge && <div className="ip__badge"><b>{badge[0]}</b><span>{badge[1]}</span></div>}
      </div>
    </div></header>
  );
}
const Block = ({ title, lead, alt, children }) => (
  <section className={`section ip__sec ${alt ? 'is-alt' : ''}`}><div className="wrap"><SectionHead center title={title}>{lead}</SectionHead>{children}</div></section>
);
const Acc = ({ idx }) => (
  <div className="ip__acc">{idx.map((i) => <details key={i}><summary>{FAQ[i][0]}</summary><p>{FAQ[i][1]}</p></details>)}</div>
);
const Steps = ({ items }) => (
  <ol className="ip__steps">{items.map(([Icon, t, d], i) => (
    <Reveal key={t} delay={i * 0.06}><li><span className="ip__n">{i + 1}</span><div><Icon size={22} /><h3>{t}</h3><p>{d}</p></div></li></Reveal>
  ))}</ol>
);
function Cta() {
  const goTo = useGoTo();
  return (
    <section className="section ip__cta"><div className="wrap">
      <h2>Ready to begin your Goldenacres journey?</h2><p>Share your details and our team will walk you through the project, documentation and gold programme.</p>
      <a className="btn btn--primary" href="/contact" onClick={goTo('contact')}>Enquire now <ArrowRight size={17} /></a>
    </div></section>
  );
}

export function AboutPage() {
  return (<>
    <Hero label="About Goldenacres" title="Land ownership with a golden perspective." text="A land ownership programme built around clear documentation, a monthly gold bonus and rewards for successful referrals." photo="aerial" pos="50% 30%" chips={['Clear documentation', 'Monthly gold bonus', 'Referral rewards']} badge={['1 Guntha', 'Documented land ownership']} />
    <Block title="What we offer">
      <div className="ip__rows">{ABOUT_CARDS.map(([t, d], i) => <Reveal key={t} className="ip__row"><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
    </Block>
    <Block alt title="Our commitments" lead="How every enquiry and purchase is handled.">
      <div className="ip__two">{TRUST.map(([Icon, t, d]) => <Reveal key={t} className="ip__item"><Icon size={24} /><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
    </Block>
    <Cta />
  </>);
}

export function OwnershipPage() {
  return (<>
    <Hero label="Land ownership" title="1 Guntha. Clearly documented." text="Everything about the land you purchase, from price and allocation to the documentation and sale deed." photo="layout" pos="50% 40%" chips={[`${PROGRAMME.guntha} Guntha`, 'Title verification', 'Sale deed registration']} badge={['₹2,00,000', 'Land price, subject to terms']} />
    <Block title="The ownership offer">
      <div className="ip__price"><Reveal className="ip__big"><small>Land price</small><b>₹2,00,000</b><span>for {PROGRAMME.guntha} Guntha</span></Reveal>
        <Reveal delay={0.1}><dl className="ip__dl">{DETAILS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Reveal></div>
    </Block>
    <Block alt title="Documentation and registration" lead={SALE_DEED_NOTE}><Steps items={HOW_STEPS.slice(1, 4)} /></Block>
    <Cta />
  </>);
}

export function GoldPage() {
  const rows = Array.from({ length: PROGRAMME.months }, (_, i) => i + 1);
  return (<>
    <Hero label="Gold benefits" title="2.5 grams of gold. Every month." text="Become eligible for a monthly gold bonus for six months after your land purchase, subject to programme terms." photo="road" pos="50% 55%" chips={[`${PROGRAMME.monthlyGold} g per month`, `${PROGRAMME.months} months`, `${PROGRAMME.monthlyGold * PROGRAMME.months} g total`]} badge={[`${PROGRAMME.monthlyGold * PROGRAMME.months} g`, 'Total personal gold bonus']} />
    <Block title="Month-by-month reward">
      <div className="ip__months">{rows.map((m) => <Reveal key={m} className="ip__mo"><b>Month {m}</b><span className="ip__bar"><i style={{ width: `${(m / PROGRAMME.months) * 100}%` }} /></span><em>{fmt(PROGRAMME.monthlyGold * m)} g</em></Reveal>)}</div>
      <p className="ip__total"><b>{PROGRAMME.monthlyGold * PROGRAMME.months} grams</b> total personal bonus ({PROGRAMME.monthlyGold} g × {PROGRAMME.months} months)</p>
    </Block>
    <Block alt title="Eligibility and terms"><Acc idx={[2, 3, 9]} /></Block>
    <Cta />
  </>);
}

export function ReferralPage() {
  const n = 3, month = PROGRAMME.monthlyGold + n * PROGRAMME.referralGold;
  return (<>
    <Hero label="Referral programme" title="Every successful referral adds more gold." text="Each customer receives a unique Referral ID. Each successful referral adds 1 gram of gold per month for six months." photo="aerial" pos="50% 75%" chips={['Unique Referral ID', `${PROGRAMME.referralGold} g per referral`, `${PROGRAMME.months} months`]} badge={[`+${PROGRAMME.referralGold} g`, 'Per referral, every month']} />
    <Block title="How referrals work"><Steps items={REFERRAL_STEPS} /></Block>
    <Block alt title="Example: three referrals">
      <div className="ip__ex">
        <Reveal><small>Own purchase</small><b>{PROGRAMME.monthlyGold} g</b><span>per month</span></Reveal>
        <Reveal delay={0.06}><small>3 referrals</small><b>+{n} g</b><span>per month</span></Reveal>
        <Reveal delay={0.12} className="is-hi"><small>Six-month total</small><b>{fmt(month * PROGRAMME.months)} g</b><span>{fmt(month)} g × {PROGRAMME.months} months</span></Reveal>
      </div>
      <p className="ip__note">{CALC_NOTE}</p>
    </Block>
    <Block title="Referral conditions"><Acc idx={[5, 6, 7, 8]} /></Block>
    <Cta />
  </>);
}

export function HowPage() {
  return (<>
    <Hero label="How it works" title="A simple path to ownership." text="Five clear steps, from choosing your land to receiving eligible gold benefits." photo="layout" pos="50% 15%" chips={['5 clear steps', 'Documented', 'Human support']} badge={['5 steps', 'From enquiry to ownership']} />
    <Block title="Step by step"><Steps items={HOW_STEPS} /></Block>
    <Block alt title="What happens after you enquire"><div className="ip__two">{NEXT_STEPS.map(([t, d]) => <Reveal key={t} className="ip__item"><h3>{t}</h3><p>{d}</p></Reveal>)}</div></Block>
    <Block title="Common questions"><Acc idx={[0, 1, 4, 9]} /></Block>
    <Cta />
  </>);
}

export function ContactPage() {
  return (<>
    <Hero label="Contact us" title="Talk to the Goldenacres team." text="Request project details or a consultation. We will get in touch by phone, WhatsApp or email." photo="road" pos="50% 30%" chips={['Phone', 'WhatsApp', 'Email']} />
    <Contact />
  </>);
}
