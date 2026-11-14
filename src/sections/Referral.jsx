import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { REFERRAL_STEPS } from '../data';

const PATHS = [
  { d: 'M124 180 C 220 180, 270 60, 372 60', r: 'M372 60 C 270 60, 220 180, 124 180', n: 'Friend', y: 60 },
  { d: 'M124 180 L 372 180', r: 'M372 180 L 124 180', n: 'Family', y: 180 },
  { d: 'M124 180 C 220 180, 270 300, 372 300', r: 'M372 300 C 270 300, 220 180, 124 180', n: 'Contact', y: 300 },
];

function Network() {
  const reduce = useReducedMotion();
  return (
    <svg className="net" viewBox="0 0 520 360" role="img" aria-label="Illustration: you share your Referral ID with friends, family and contacts, and gold flows back to you">
      <defs>
        <radialGradient id="ng" cx=".35" cy=".3" r=".9"><stop offset="0" stopColor="#F4E4BF" /><stop offset=".55" stopColor="#D4AF70" /><stop offset="1" stopColor="#A98543" /></radialGradient>
      </defs>
      {PATHS.map((p, i) => (
        <g key={p.n}>
          <path d={p.d} fill="none" stroke="#D4AF70" strokeWidth="1.5" strokeDasharray="3 6" opacity=".9" />
          <motion.path d={p.d} fill="none" stroke="#B99752" strokeWidth="2" strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.4, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }} />
          {!reduce && (
            <circle r="7" fill="url(#ng)" stroke="#8F6F32" strokeWidth="1">
              <animateMotion dur={`${4 + i * 0.6}s`} begin={`${1.6 + i * 0.7}s`} repeatCount="indefinite" path={p.r} />
            </circle>
          )}
          <circle cx="396" cy={p.y} r="30" fill="#fff" stroke="#E7DFCB" strokeWidth="1.5" />
          <circle cx="396" cy={p.y} r="22" fill="#F1EBDD" />
          <circle cx="396" cy={p.y - 5} r="6" fill="#12382D" /><path d={`M384 ${p.y + 12}a12 9 0 0 1 24 0z`} fill="#12382D" />
          <text x="396" y={p.y + 50} textAnchor="middle" fontSize="14" fontWeight="600" fill="#292A26">{p.n}</text>
        </g>
      ))}
      <circle cx="92" cy="180" r="48" fill="#12382D" /><circle cx="92" cy="180" r="42" fill="none" stroke="#D4AF70" strokeWidth="1" />
      <text x="92" y="176" textAnchor="middle" fontSize="19" fontWeight="700" fill="#FAF9F5">You</text>
      <text x="92" y="196" textAnchor="middle" fontSize="10.5" fontWeight="600" letterSpacing="1" fill="#D4AF70">REFERRAL ID</text>
    </svg>
  );
}

export default function Referral() {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="referral" className="section bg-white" aria-labelledby="ref-title">
      <div className="wrap ref">
        <div className="ref__l">
          <SectionHead title="Share the Opportunity. Earn More Gold." id="ref-title">
            Invite friends and family to become Goldenacres landowners. Every successful eligible referral unlocks additional gold rewards under the programme terms.
          </SectionHead>
          <Reveal className="hl" delay={0.1}>
            <p className="hl__n num">1<small> g</small></p>
            <p className="hl__t">1 GRAM GOLD PER MONTH FOR EACH SUCCESSFUL REFERRAL FOR SIX MONTHS.</p>
          </Reveal>
        </div>
        <div className="ref__r">
          <Reveal className="net-card"><Network /></Reveal>
          <ol className={`flow ${seen ? 'is-in' : ''}`} ref={ref} aria-label="Referral journey">
            <span className="flow__line" aria-hidden="true" />
            {REFERRAL_STEPS.map(([Icon, t, d], i) => (
              <li key={t} style={{ '--i': i }} className={i === REFERRAL_STEPS.length - 1 ? 'is-last' : ''}>
                <span className="flow__node"><Icon size={22} strokeWidth={1.4} aria-hidden="true" /></span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
