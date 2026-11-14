import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import Coin from '../components/Coin';
import SectionHead from '../components/SectionHead';
import { PHOTO } from '../data';

const TILES = [
  { k: 'a', name: 'aerial', pos: '50% 40%', cap: 'Aerial view of the project land' },
  { k: 'b', name: 'layout', pos: '50% 50%', cap: 'Land layout and landscaping' },
  { k: 'd', name: 'road', pos: '50% 60%', cap: 'Road access and surroundings' },
];

export default function Gallery() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  return (
    <section id="experience" className="section bg-white" aria-labelledby="exp-title">
      <div className="wrap">
        <SectionHead title="The Goldenacres Experience" id="exp-title">
          Landscaped plots, tree-lined roads and green surroundings, with a gold bonus that rewards every month.
        </SectionHead>
        <div className="exp">
          {TILES.map((t, i) => (
            <Reveal key={t.k} delay={(i % 3) * 0.08} className={`exp__t exp__${t.k}`}>
              <button type="button" className="exp__btn" onClick={() => setOpen(t)} aria-label={`Enlarge photo: ${t.cap}`}>
                <Photo name={t.name} pos={t.pos} zoom className="exp__ph" alt={t.cap} />
                <span className="exp__cap">{t.cap}</span>
              </button>
            </Reveal>
          ))}
          <Reveal delay={0.1} className="exp__t exp__c">
            <div className="gold-tile">
              <div className="gold-tile__coins" aria-hidden="true">
                <Coin size={120} label="2.5g" sub="GOLD" /><Coin size={86} label="2.5g" sub="GOLD" /><Coin size={64} />
              </div>
              <p className="gold-tile__t">2.5 grams of gold, every month for six months.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16} className="exp__t exp__e">
            <p className="exp__note">Illustrative visuals. Actual project photographs, survey details and documents are shared during your consultation.</p>
          </Reveal>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="lb" role="dialog" aria-modal="true" aria-label={open.cap} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setOpen(null)}>
            <button type="button" className="lb__x" aria-label="Close" onClick={() => setOpen(null)} autoFocus><X size={22} /></button>
            <picture onClick={(e) => e.stopPropagation()}>
              <source srcSet={PHOTO[open.name].webp} type="image/webp" />
              <img src={PHOTO[open.name].src} alt={open.cap} />
            </picture>
            <p>{open.cap}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
