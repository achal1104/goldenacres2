import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Coins } from 'lucide-react';
import Photo from '../components/Photo';
import Counter from '../components/Counter';
import useGoTo from '../hooks/useGoTo';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const goTo = useGoTo();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 70]);
  const up = (d) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } });
  const line = (d, c) => <span className="mask"><motion.span className="mask__in" initial={reduce ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: d, ease }}>{c}</motion.span></span>;

  return (
    <header id="home" className="hx" ref={ref}>
      <div className="wrap hx__in">
        <div className="hx__text">
          <motion.p className="hx__label" {...up(0.05)}>The Goldenacres Experience</motion.p>
          <h1>{line(0.15, 'Own Land.')}{line(0.3, <>Experience <em>Golden</em> <em>Possibilities.</em></>)}</h1>
          <motion.p className="hx__sub" {...up(0.6)}>Discover a distinctive land ownership opportunity complemented by monthly gold benefits and additional rewards through successful referrals.</motion.p>
          <motion.div className="hx__cta" {...up(0.75)}>
            <a className="btn btn--primary" href="/land-ownership" onClick={goTo('ownership')}>Explore Ownership <ArrowRight size={17} /></a>
            <a className="btn btn--ghost" href="/gold-benefits" onClick={goTo('gold')}>Discover Gold Benefits</a>
          </motion.div>
          <motion.ul className="hx__stats" aria-label="Programme highlights" {...up(0.9)}>
            <li><b><Counter value={200000} prefix="₹" indian /></b><span>Land price</span></li>
            <li><b>1 Guntha</b><span>Land allocation</span></li>
            <li><b>15 Grams</b><span>Total gold bonus</span></li>
          </motion.ul>
        </div>
        <motion.div className="hx__art" initial={reduce ? false : { clipPath: 'inset(0 0 100% 0 round 28px)' }} animate={{ clipPath: 'inset(0 0 0% 0 round 28px)' }} transition={{ duration: 1.3, delay: 0.2, ease }}>
          <motion.div className="hx__frame" style={{ y }}><Photo name="aerial" eager pos="50% 40%" className="hx__ph" alt="Aerial view of the Goldenacres layout with landscaped plots" /></motion.div>
          <motion.div className="hx__card" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease }}>
            <Coins size={22} /><p><b>2.5 g gold every month</b><small>for six months, per programme terms</small></p>
          </motion.div>
        </motion.div>
      </div>
      <span className="hx__scroll" aria-hidden="true"><i />Scroll</span>
    </header>
  );
}
