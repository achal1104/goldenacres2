import { useEffect, useState } from 'react';
import { Palette, X } from 'lucide-react';

export const THEMES = [
  ['noir', 'Noir & Gold', '#0F0F10', '#D8B655'],
  ['burgundy', 'Burgundy & Gold', '#4F1424', '#D4AE68'],
  ['midnight', 'Midnight & Gold', '#0B1426', '#D9B86A'],
  ['deepteal', 'Deep Teal & Champagne', '#0A3236', '#DCC38F'],
  ['brass', 'Charcoal & Brass', '#1D1F23', '#C7A26B'],
  ['bronze', 'Slate & Bronze', '#232F49', '#D2A073'],
  ['gold', 'Heritage Gold', '#12382D', '#D4AF70'],
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('ga-theme') || 'noir'; } catch (e) { return 'noir'; } });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('ga-theme', theme); } catch (e) {}
  }, [theme]);
  return (
    <div className="theme">
      {open && (
        <div className="theme__panel" role="group" aria-label="Colour theme">
          <b>Colour theme</b>
          {THEMES.map(([id, name, a, b]) => (
            <button key={id} type="button" className={theme === id ? 'is-on' : ''} onClick={() => setTheme(id)}>
              <span className="theme__sw" style={{ background: `linear-gradient(135deg,${a} 50%,${b} 50%)` }} />{name}
            </button>
          ))}
        </div>
      )}
      <button type="button" className="theme__fab" aria-label="Change colour theme" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Palette size={20} />}
      </button>
    </div>
  );
}
