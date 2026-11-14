import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// Animated number. Counts up once it scrolls into view, then eases between values.
export default function Counter({ value, decimals = 0, prefix = '', suffix = '', indian = false, trim = false, duration = 1.7, className }) {
  const ref = useRef(null);
  const current = useRef(0);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });
  const reduce = useReducedMotion();

  const fmt = (n) => {
    let s = indian
      ? n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : n.toFixed(decimals);
    if (trim && s.includes('.')) s = s.replace(/\.?0+$/, '');
    return prefix + s + suffix;
  };
  const [initial] = useState(() => fmt(reduce ? value : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) { current.current = value; el.textContent = fmt(value); return; }
    if (!inView) return;
    const first = current.current === 0;
    const controls = animate(current.current, value, {
      duration: first ? duration : 0.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { current.current = v; el.textContent = fmt(v); },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, inView, reduce]);

  return (
    <>
      <span ref={ref} className={className} aria-hidden="true">{initial}</span>
      <span className="sr-only">{fmt(value)}</span>
    </>
  );
}
