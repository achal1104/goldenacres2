import { useId } from 'react';

// Hand-built gold coin illustration (no external assets).
export default function Coin({ size = 96, label = '', sub = '', className = '', style }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={`coin ${className}`} viewBox="0 0 120 120" width={size} height={size} style={style} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6E9CB" /><stop offset=".5" stopColor="#C9A25D" /><stop offset="1" stopColor="#8F6F32" />
        </linearGradient>
        <radialGradient id={`${id}f`} cx=".34" cy=".26" r=".9">
          <stop offset="0" stopColor="#F4E4BF" /><stop offset=".5" stopColor="#D8B578" /><stop offset="1" stopColor="#B08A45" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill={`url(#${id}r)`} />
      <circle cx="60" cy="60" r="53.6" fill="none" stroke="#7A5C25" strokeOpacity=".45" strokeWidth="2.6" strokeDasharray="1.5 2.6" />
      <circle cx="60" cy="60" r="48.5" fill={`url(#${id}f)`} />
      <circle cx="60" cy="60" r="43.5" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="1" />
      <path d="M24 46A40 40 0 0 1 68 21" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="3" strokeLinecap="round" />
      {label && <text x="60" y={sub ? 62 : 71} textAnchor="middle" fontWeight="700" fontSize={sub ? 25 : 27} fill="#5F4513">{label}</text>}
      {sub && <text x="60" y="80" textAnchor="middle" fontWeight="600" fontSize="10.5" letterSpacing="1.4" fill="#7A5C25">{sub}</text>}
    </svg>
  );
}
