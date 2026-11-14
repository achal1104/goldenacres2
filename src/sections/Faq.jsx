import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import useGoTo from '../hooks/useGoTo';
import { FAQ } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  const goTo = useGoTo();
  return (
    <section id="faq" className="section bg-white" aria-labelledby="faq-title">
      <div className="wrap faq">
        <div className="faq__l">
          <SectionHead title="Questions, Answered." id="faq-title">
            Straight answers about the programme. For anything not covered here, our team is happy to help.
          </SectionHead>
          <Reveal><a className="btn btn--ghost" href="/#contact" onClick={goTo('contact')}>Ask a question</a></Reveal>
        </div>
        <div className="acc">
          {FAQ.map(([q, a], i) => {
            const on = open === i;
            return (
              <Reveal key={q} delay={Math.min(i, 4) * 0.04} className={`acc__i ${on ? 'is-open' : ''}`}>
                <h3>
                  <button type="button" id={`q${i}`} aria-expanded={on} aria-controls={`a${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    <span>{q}</span>
                    <span className="pm" aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
