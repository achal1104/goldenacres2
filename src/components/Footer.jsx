import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import useGoTo from '../hooks/useGoTo';
import { CONTACT, NAV, waLink } from '../data';

export default function Footer() {
  const goTo = useGoTo();
  const link = (id, label) => <a href={`/#${id}`} onClick={goTo(id)}>{label}</a>;
  return (
    <footer className="foot on-dark">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <Logo onClick={goTo('home')} />
            <p>Premium land ownership with a defined monthly gold bonus and structured referral rewards.</p>
            <span className="foot__gold" aria-hidden="true" />
          </div>
          <nav aria-label="Quick navigation"><h4>Quick Navigation</h4><ul>{NAV.map(([l, id]) => <li key={id}>{link(id, l)}</li>)}</ul></nav>
          <nav aria-label="Programme"><h4>The Programme</h4><ul><li>{link('ownership', 'Land Ownership')}</li><li>{link('gold', 'Gold Benefits')}</li><li>{link('referral', 'Referral Programme')}</li><li>{link('faq', 'FAQ')}</li></ul></nav>
          <div><h4>Contact</h4>
            <ul className="foot__contact">
              {CONTACT.phone && <li><Phone size={16} strokeWidth={1.4} aria-hidden="true" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></li>}
              {CONTACT.email && <li><Mail size={16} strokeWidth={1.4} aria-hidden="true" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>}
              {CONTACT.address && <li><MapPin size={16} strokeWidth={1.4} aria-hidden="true" /><span>{CONTACT.address}</span></li>}
              <li><MessageCircle size={16} strokeWidth={1.4} aria-hidden="true" /><a href={waLink('Hello Goldenacres, I would like to know more.')} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a></li>
              <li>{link('contact', 'Send an enquiry')}</li>
            </ul>
          </div>
        </div>
        <div className="foot__bar">
          <p>© {new Date().getFullYear()} Goldenacres. Reward eligibility, timing and fulfilment are subject to the official programme terms. Calculations are illustrative.</p>
          <ul><li><Link to="/privacy-policy">Privacy Policy</Link></li><li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li><li><Link to="/disclaimer">Disclaimer</Link></li></ul>
        </div>
      </div>
    </footer>
  );
}
