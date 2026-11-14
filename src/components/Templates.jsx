import { Link } from 'react-router-dom';
import { Check, LandPlot, Coins, CalendarRange, Gem, ArrowRight, Users as Users2, FileCheck2 as FileCheck, Headset as Support, IdCard, Share2 as Share } from 'lucide-react';
import Reveal from './Reveal';
import Photo from './Photo';
import SectionHead from './SectionHead';
import { PROGRAMME } from '../data';

const inr = (n) => '₹' + n.toLocaleString('en-IN');

export function Marquee({ items = ['Land Ownership', 'Monthly Gold Bonus', 'Referral Rewards', 'Clear Documentation', 'Dedicated Support'] }) {
  const row = [...items, ...items];
  return (
    <div className="marq" aria-hidden="true"><div className="marq__t">{row.map((t, i) => <span key={i}>{t}<i /></span>)}</div></div>
  );
}

export function Split({ photo = 'aerial', pos, label, title, text, points = [], flip = false, cta }) {
  return (
    <section className="section bg-white">
      <div className={`wrap split ${flip ? 'split--flip' : ''}`}>
        <Reveal className="split__img"><Photo name={photo} pos={pos} ratio="4/5" zoom alt="" /><span className="split__tag">{label}</span></Reveal>
        <div className="split__txt">
          <SectionHead title={title}>{text}</SectionHead>
          <ul className="ticks">{points.map((p) => <Reveal as="li" key={p}><Check size={16} strokeWidth={2.4} />{p}</Reveal>)}</ul>
          {cta && <Link className="btn btn--primary" to={cta[1]}>{cta[0]} <ArrowRight size={16} /></Link>}
        </div>
      </div>
    </section>
  );
}

export function ImageBanner({ photo = 'aerial', pos = '50% 60%', title, text, primary = ['Explore Land Ownership', '/land-ownership'], secondary = ['Talk to Our Team', '/contact'] }) {
  return (
    <section className="ibanner">
      <Photo name={photo} pos={pos} className="ibanner__img" alt="" />
      <div className="ibanner__veil" />
      <Reveal className="wrap ibanner__in">
        <h2>{title}</h2><p>{text}</p>
        <div><Link className="btn btn--primary" to={primary[1]}>{primary[0]}</Link><Link className="btn btn--ghost btn--light" to={secondary[1]}>{secondary[0]}</Link></div>
      </Reveal>
    </section>
  );
}

export function Showcase() {
  const rows = [[LandPlot, '1 Guntha', 'Land allocation'], [Coins, `${PROGRAMME.monthlyGold} g`, 'Gold every month'], [CalendarRange, `${PROGRAMME.months} months`, 'Reward period'], [Gem, `${PROGRAMME.monthlyGold * PROGRAMME.months} g`, 'Total gold bonus']];
  return (
    <section className="section bg-ivory">
      <div className="wrap">
        <SectionHead center title="The Goldenacres Ownership Offer">One clear offer. Everything you receive, at a glance.</SectionHead>
        <Reveal y={36} className="show">
          <div className="show__price"><small>Land ownership</small><strong>{inr(PROGRAMME.price)}</strong><span>for 1 Guntha, subject to programme terms</span>
            <Link className="btn btn--primary" to="/contact">Enquire Now</Link></div>
          <ul className="show__list">{rows.map(([Icon, v, l]) => <li key={l}><Icon size={26} strokeWidth={1.3} /><b>{v}</b><span>{l}</span></li>)}</ul>
        </Reveal>
      </div>
    </section>
  );
}

export function HTimeline({ title = 'A Simple Journey to Ownership', steps }) {
  return (
    <section className="section bg-beige">
      <div className="wrap">
        <SectionHead center title={title} />
        <ol className="htl">{steps.map(([t, d], i) => <Reveal as="li" key={t} delay={i * 0.08}><span className="htl__n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</ol>
      </div>
    </section>
  );
}

export function ValueBand({ items }) {
  return (
    <section className="vband"><div className="wrap"><ul>{items.map(([v, l]) => <Reveal as="li" key={l}><strong>{v}</strong><span>{l}</span></Reveal>)}</ul></div></section>
  );
}

export function Statement({ label = 'The Goldenacres promise', children }) {
  return (
    <section className="stmt"><div className="wrap"><Reveal><span className="stmt__l">{label}</span><blockquote>{children}</blockquote><i className="stmt__line" /></Reveal></div></section>
  );
}

export function Bento() {
  const { LandPlot: L, Users: U, FileCheck2: F, Headset: H } = { LandPlot, Users: Users2, FileCheck2: FileCheck, Headset: Support };
  return (
    <section className="section bg-ivory">
      <div className="wrap">
        <SectionHead center title="Why Goldenacres">Land, gold and clarity, brought together in one considered programme.</SectionHead>
        <div className="bento">
          <Reveal className="bt bt--dark bt--a"><L size={34} strokeWidth={1.2} /><small>Land ownership</small><strong>{inr(PROGRAMME.price)}</strong><p>Own 1 Guntha of land, documented and registered, with a gold programme layered on top.</p></Reveal>
          <Reveal delay={0.08} className="bt bt--photo"><Photo name="aerial" pos="50% 70%" alt="" /><span>Planned plots. Green surroundings.</span></Reveal>
          <Reveal delay={0.12} className="bt bt--gold"><small>Monthly gold</small><strong>{PROGRAMME.monthlyGold} g</strong><p>Every month for {PROGRAMME.months} months</p></Reveal>
          <Reveal delay={0.16} className="bt bt--light"><U size={28} strokeWidth={1.3} /><strong>{PROGRAMME.referralGold} g</strong><p>Gold per successful referral</p></Reveal>
          <Reveal delay={0.2} className="bt bt--light bt--w"><F size={28} strokeWidth={1.3} /><h3>Documented ownership</h3><p>Title verification and sale deed registration, explained up front.</p></Reveal>
          <Reveal delay={0.24} className="bt bt--dark bt--w"><H size={28} strokeWidth={1.3} /><h3>Human support</h3><p>A real team to answer your questions before and after you buy.</p></Reveal>
        </div>
      </div>
    </section>
  );
}

export function Milestones() {
  return (
    <section className="section dk">
      <div className="wrap">
        <SectionHead center title="Six Months. Six Golden Rewards.">{PROGRAMME.monthlyGold} grams of gold each month, according to programme terms.</SectionHead>
        <ol className="ms">
          {Array.from({ length: PROGRAMME.months }, (_, i) => (
            <Reveal as="li" key={i} delay={i * 0.09}><span className="coin3d">{PROGRAMME.monthlyGold}g</span><h3>Month {i + 1}</h3><p>{Math.round((i + 1) * PROGRAMME.monthlyGold * 10) / 10} g so far</p></Reveal>
          ))}
        </ol>
        <p className="ms__total">Total monthly gold bonus: <b>{PROGRAMME.monthlyGold * PROGRAMME.months} grams</b></p>
      </div>
    </section>
  );
}

export function ReferralFlow() {
  const steps = [[LandPlot, 'Purchase', 'Own 1 Guntha'], [IdCard, 'Referral ID', 'Issued to you'], [Share, 'Invite', 'Share your ID'], [Users2, 'Successful purchase', 'A friend buys'], [Coins, 'Gold reward', `${PROGRAMME.referralGold} g, subject to terms`]];
  return (
    <section className="section bg-white">
      <div className="wrap">
        <SectionHead center title="The Referral Journey">Five simple steps from your purchase to your gold reward.</SectionHead>
        <ol className="rf">{steps.map(([Icon, t, d], i) => <Reveal as="li" key={t} delay={i * 0.1}><span className="rf__i"><Icon size={26} strokeWidth={1.4} /></span><h3>{t}</h3><p>{d}</p></Reveal>)}</ol>
      </div>
    </section>
  );
}
