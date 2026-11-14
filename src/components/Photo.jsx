import { PHOTO } from '../data';

// Responsive <picture> with webp + jpg fallback. `pos` sets the crop focus.
export default function Photo({ name, alt = '', pos = '50% 50%', eager = false, className = '', ratio, width = 572, height = 1024, zoom = false }) {
  const p = PHOTO[name];
  return (
    <div className={`photo ${zoom ? 'photo--zoom' : ''} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <picture>
        <source srcSet={p.webp} type="image/webp" />
        <img src={p.src} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : undefined} decoding="async" style={{ objectPosition: pos }} />
      </picture>
    </div>
  );
}
