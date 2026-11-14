import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { PROGRAMME, CALC_NOTE } from '../data';

const MAX = 10, EXAMPLES = [0, 1, 2, 3, 5, 10];
const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
const Stat = ({ label, value, unit, tone }) => (
  <div className={`rw__s ${tone || ''}`}><span>{label}</span><motion.b key={value} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>{fmt(value)}<small>{unit}</small></motion.b></div>
);

export default function Rewards() {
  const [n, setN] = useState(3);
  const own = PROGRAMME.monthlyGold, ref = n * PROGRAMME.referralGold, month = own + ref, six = month * PROGRAMME.months;
  const top = own + MAX * PROGRAMME.referralGold;
  return (
    <section id="calculator" className="section rw" aria-labelledby="rw-title">
      <div className="wrap">
        <SectionHead title="See how your gold rewards grow." id="rw-title">Each successful referral adds {PROGRAMME.referralGold} gram of gold per month for {PROGRAMME.months} months.</SectionHead>
        <div className="rw__grid">
          <Reveal className="rw__in">
            <p className="rw__lab">Successful referrals</p>
            <div className="rw__ctl">
              <button type="button" onClick={() => setN(Math.max(0, n - 1))} aria-label="Fewer referrals"><Minus size={18} /></button>
              <output aria-live="polite">{n}</output>
              <button type="button" onClick={() => setN(Math.min(MAX, n + 1))} aria-label="More referrals"><Plus size={18} /></button>
            </div>
            <input type="range" min="0" max={MAX} value={n} onChange={(e) => setN(+e.target.value)} aria-label="Number of successful referrals" />
            <p className="rw__help">Drag the slider or use the buttons. Each referral must complete a land purchase using your Referral ID.</p>
          </Reveal>
          <Reveal delay={0.1} className="rw__out">
            <div className="rw__stats">
              <Stat label="Personal gold" value={own} unit=" g / month" />
              <Stat label="Referral gold" value={ref} unit=" g / month" />
              <Stat label="Total monthly gold" value={month} unit=" g" tone="is-hi" />
              <Stat label="Total six-month gold" value={six} unit=" g" tone="is-hi" />
            </div>
            <div className="rw__bar" aria-hidden="true"><i style={{ width: `${(own / top) * 100}%` }} /><motion.i animate={{ width: `${(ref / top) * 100}%` }} transition={{ duration: 0.5 }} /></div>
            <p className="rw__key"><span className="a" />Personal <span className="b" />Referral</p>
          </Reveal>
        </div>
        <Reveal className="rw__tbl">
          <table>
            <caption className="sr">Gold by number of successful referrals</caption>
            <thead><tr><th>Referrals</th><th>Monthly gold</th><th>Six-month gold</th></tr></thead>
            <tbody>{EXAMPLES.map((r) => { const m = own + r; return (
              <tr key={r} className={r === n ? 'is-on' : ''}><td>{r}</td><td>{fmt(m)} g</td><td><span className="rw__t"><i style={{ width: `${(m / top) * 100}%` }} /></span>{fmt(m * PROGRAMME.months)} g</td></tr>); })}</tbody>
          </table>
        </Reveal>
        <p className="rw__note">{CALC_NOTE}</p>
      </div>
    </section>
  );
}
