import { Coins, CalendarRange, Gem, Info } from 'lucide-react';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import SectionHead from '../components/SectionHead';
import { SALE_DEED_NOTE } from '../data';

export default function Offer() {
  return (
    <section id="ownership" className="section bg-ivory offer-sec" aria-labelledby="offer-title">
      <div className="wrap">
        <SectionHead center title="Your Land. Your Ownership. Your Golden Benefits." id="offer-title" />
        <Reveal y={34} className="offer">
          <span className="corner tl" aria-hidden="true" /><span className="corner tr" aria-hidden="true" />
          <span className="corner bl" aria-hidden="true" /><span className="corner br" aria-hidden="true" />
          <div className="offer__top">
            <p className="label">Land Ownership</p>
            <p className="offer__price num"><span className="rupee">₹</span><Counter value={200000} indian duration={2} /></p>
            <p className="offer__land">1 Guntha Land</p>
          </div>
          <dl className="offer__rail">
            <div><Coins size={26} strokeWidth={1.2} aria-hidden="true" /><dt className="label">Gold Bonus</dt><dd><span className="num"><Counter value={2.5} decimals={1} /></span> <em>grams every month</em></dd></div>
            <div><CalendarRange size={26} strokeWidth={1.2} aria-hidden="true" /><dt className="label">Duration</dt><dd><span className="num"><Counter value={6} /></span> <em>months</em></dd></div>
            <div className="is-total"><Gem size={26} strokeWidth={1.2} aria-hidden="true" /><dt className="label">Total Gold Bonus</dt><dd><span className="num"><Counter value={15} /></span> <em>grams</em></dd></div>
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="note"><Info size={20} strokeWidth={1.5} aria-hidden="true" /><p><strong>Important:</strong> {SALE_DEED_NOTE}</p></Reveal>
      </div>
    </section>
  );
}
