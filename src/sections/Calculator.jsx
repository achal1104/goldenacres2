import { useState } from 'react';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import SectionHead from '../components/SectionHead';
import { CALC_NOTE, PROGRAMME } from '../data';

const MAX = 20;
const PRESETS = [0, 1, 3, 5, 10];

export default function Calculator() {
  const [n, setN] = useState(3);
  const personal = PROGRAMME.monthlyGold;
  const referral = n * PROGRAMME.referralGold;
  const monthly = personal + referral;
  const total = monthly * PROGRAMME.months;
  const personalTotal = personal * PROGRAMME.months;
  const refTotal = referral * PROGRAMME.months;
  const share = total ? (personalTotal / total) * 100 : 100;

  return (
    <section id="calculator" className="section bg-ivory" aria-labelledby="calc-title">
      <div className="wrap">
        <SectionHead center title="Discover Your Potential Gold Rewards." id="calc-title">
          Choose how many successful referrals you may make and see your gold benefit update instantly.
        </SectionHead>
        <Reveal className="calc" y={30}>
          <div className="calc__in">
            <label htmlFor="refs" className="calc__lab">Number of successful referrals</label>
            <p className="calc__big num" aria-hidden="true">{n}</p>
            <input id="refs" className="range" type="range" min="0" max={MAX} step="1" value={n} onChange={(e) => setN(+e.target.value)} style={{ '--p': `${(n / MAX) * 100}%` }} aria-valuetext={`${n} ${n === 1 ? 'referral' : 'referrals'}`} />
            <div className="range__ends" aria-hidden="true"><span>0</span><span>{MAX}</span></div>
            <div className="chips" role="group" aria-label="Quick select">
              {PRESETS.map((p) => (
                <button key={p} type="button" className={`chip ${n === p ? 'is-on' : ''}`} aria-pressed={n === p} onClick={() => setN(p)}>{p}</button>
              ))}
            </div>
            <p className="calc__help">Each successful referral adds {PROGRAMME.referralGold * PROGRAMME.months} grams of gold over six months.</p>
          </div>

          <div className="calc__out">
            <dl className="rows">
              <div><dt>Personal monthly gold</dt><dd><Counter value={personal} decimals={1} trim suffix=" g" /></dd></div>
              <div><dt>Referral monthly gold <small>({n} × 1 g)</small></dt><dd><Counter value={referral} decimals={1} trim suffix=" g" /></dd></div>
              <div><dt>Total monthly gold</dt><dd><Counter value={monthly} decimals={1} trim suffix=" g" /></dd></div>
            </dl>
            <div className="calc__total">
              <p>Total six-month gold</p>
              <p className="calc__tn num"><Counter value={total} decimals={1} trim /><small> grams</small></p>
              <p className="sr-only" aria-live="polite">With {n} successful {n === 1 ? 'referral' : 'referrals'}, total six-month gold is {total} grams.</p>
              <div className="bar" aria-hidden="true"><i style={{ width: `${share}%` }} /><b style={{ width: `${100 - share}%` }} /></div>
              <div className="bar__k" aria-hidden="true"><span><i /> Personal {personalTotal} g</span><span><b /> Referrals {refTotal} g</span></div>
            </div>
          </div>
        </Reveal>
        <p className="calc__note">{CALC_NOTE}</p>
      </div>
    </section>
  );
}
