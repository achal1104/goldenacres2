// Sparse floating gold dust. Transform/opacity only; hidden for reduced-motion.
const DOTS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 9) % 96,
  size: 3 + ((i * 5) % 5),
  delay: -((i * 1.9) % 14),
  dur: 15 + ((i * 3) % 11),
  dx: ((i * 17) % 60) - 30,
}));

export default function Particles() {
  return (
    <div className="dust" aria-hidden="true">
      {DOTS.map((d, i) => (
        <i key={i} style={{ left: `${d.left}%`, width: d.size, height: d.size, animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s`, '--dx': `${d.dx}px` }} />
      ))}
    </div>
  );
}
