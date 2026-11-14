import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Coin from '../components/Coin';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import SectionHead from '../components/SectionHead';

const MONTHS = [1, 2, 3, 4, 5, 6];

export default function GoldTimeline() {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.25 });
  return (
    <section id="gold" className="section bg-beige" aria-labelledby="gold-title">
      <div className="wrap">
        <SectionHead center title="Six Months. Six Golden Rewards." id="gold-title">
          Become eligible for 2.5 grams of gold every month, for six consecutive months, subject to programme terms.
        </SectionHead>
        <ol className={`tl ${seen ? 'is-in' : ''}`} ref={ref}>
          <span className="tl__line" aria-hidden="true" />
          {MONTHS.map((m, i) => (
            <li key={m} style={{ '--i': i }}>
              <Coin size={92} label="2.5g" sub="GOLD" className="tl__coin" />
              <h3>Month 0{m}</h3>
              <p className="tl__g"><span className="num">2.5</span> grams</p>
              <p className="tl__sum">{(2.5 * m).toString()} g so far</p>
            </li>
          ))}
        </ol>
        <Reveal className="total" y={30}>
          <Coin size={84} label="15g" sub="TOTAL" />
          <div>
            <p className="total__n num"><Counter value={15} /> <small>grams</small></p>
            <p className="total__l">15 grams total gold bonus</p>
          </div>
          <p className="total__t">2.5 grams × 6 months. Eligibility, delivery schedule and fulfilment follow the official Goldenacres programme terms.</p>
        </Reveal>
      </div>
    </section>
  );
}
