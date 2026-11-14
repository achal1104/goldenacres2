import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NAV, PATHS } from '../data';
import Logo from './Logo';
import useGoTo from '../hooks/useGoTo';


export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const goTo = useGoTo();
  const onHome = pathname === '/';
  const active = (NAV.find((x) => PATHS[x[1]] === pathname) || [])[1];

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);


  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => (e) => { setOpen(false); goTo(id)(e); };
  const cls = `nav ${solid || !onHome ? 'is-solid' : ''} ${open ? 'is-open' : ''} ${onHome && !solid && !open ? 'nav--hero' : ''}`;

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      <header className={cls}>
        <div className="wrap nav__in">
          <Logo onClick={go('home')} />
          <nav className="nav__links" aria-label="Primary">
            {NAV.map(([label, id]) => (
              <a key={id} href={PATHS[id] || `/#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>{label}</a>
            ))}
          </nav>
          <div className="nav__cta">
            <a className="btn btn--primary btn--sm" href="/contact" onClick={go('contact')}>Enquire Now</a>
            <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /></button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="panel" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <nav aria-label="Mobile">
              <ul>
                {NAV.map(([label, id], i) => (
                  <motion.li key={id} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + i * 0.045, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                    <a href={PATHS[id] || `/#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''}>{label}<ArrowRight size={18} strokeWidth={1.5} /></a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a className="btn btn--primary" href="/contact" onClick={go('contact')}>Enquire Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
