import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { PROGRAMME } from '../data';

const MONTHS = Array.from({ length: PROGRAMME.months }, (_, i) => i + 1);

export default function GoldRoad() {
  const reduce = useReducedMotion();
  const total = PROGRAMME.monthlyGold * PROGRAMME.months;
  return (
    <section id="gold" className="section gr" aria-labelledby="gr-title">
      <div className="wrap">
        <SectionHead title="Six months. Six golden milestones." id="gr-title">Once your purchase is complete you become eligible for {PROGRAMME.monthlyGold} grams of gold each month, per programme terms.</SectionHead>
        <div className="gr__track">
          <div className="gr__line" aria-hidden="true"><motion.i initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} /></div>
          <ol className="gr__list">
            {MONTHS.map((m) => (
              <li key={m}><Reveal delay={m * 0.08} className="gr__m">
                <span className="gr__coin"><b>{PROGRAMME.monthlyGold}</b><small>grams</small></span>
                <h3>Month {m}</h3>
                <p>{(PROGRAMME.monthlyGold * m).toFixed(1)} g so far</p>
                <span className="gr__pg"><i style={{ width: `${(m / PROGRAMME.months) * 100}%` }} /></span>
              </Reveal></li>
            ))}
          </ol>
        </div>
        <Reveal className="gr__total">
          <p className="gr__big">{total} <span>Grams</span></p>
          <p className="gr__txt"><b>Total personal gold bonus</b>{PROGRAMME.monthlyGold} grams × {PROGRAMME.months} months. Eligibility, delivery schedule and fulfilment follow the official programme terms.</p>
        </Reveal>
      </div>
    </section>
  );
}
