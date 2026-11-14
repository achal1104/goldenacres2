import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Send, CircleAlert, CircleCheck, Loader2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { submitLead, isLeadApiConfigured } from '../api';
import { CONTACT, NEXT_STEPS, waLink } from '../data';

const INTERESTS = ['Land Ownership', 'Referral Programme', 'General Enquiry'];
const empty = { name: '', mobile: '', email: '', interest: INTERESTS[0], msg: '' };
const cleanPhone = (v) => v.replace(/[\s\-()]/g, '').replace(/^(\+?91|0)(?=\d{10}$)/, '');

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = 'Enter your full name.';
  if (!/^[6-9]\d{9}$/.test(cleanPhone(f.mobile))) e.mobile = 'Enter a valid 10-digit mobile number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter a valid email address.';
  return e;
}

export default function Contact() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | offline
  const formRef = useRef(null);

  const set = (k) => (e) => {
    const next = { ...f, [k]: e.target.value };
    setF(next);
    if (touched[k]) setErr(validate(next));
  };
  const blur = (k) => () => { setTouched((t) => ({ ...t, [k]: true })); setErr(validate(f)); };

  const message = () => `Hello Goldenacres, I'm ${f.name.trim() || '[name]'}. I'd like to know more about: ${f.interest}.${f.msg.trim() ? ` ${f.msg.trim()}` : ''} My number: ${cleanPhone(f.mobile) || '[phone]'}.`;

  const submit = async (ev) => {
    ev.preventDefault();
    const v = validate(f);
    setErr(v); setTouched({ name: true, mobile: true, email: true });
    const first = Object.keys(v)[0];
    if (first) { formRef.current?.querySelector(`[name="${first}"]`)?.focus(); return; }
    setStatus('sending');
    try {
      await submitLead({ name: f.name.trim(), mobile: cleanPhone(f.mobile), email: f.email.trim(), interest: f.interest, msg: f.msg.trim() });
      setStatus('sent');
    } catch (e) {
      setStatus(e.code === 'NOT_CONFIGURED' ? 'offline' : 'error');
    }
  };

  const field = (k, label, type = 'text', extra = {}) => (
    <div className={`fld ${err[k] ? 'has-err' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      <input id={`f-${k}`} name={k} type={type} value={f[k]} onChange={set(k)} onBlur={blur(k)} aria-invalid={err[k] ? 'true' : 'false'} aria-describedby={err[k] ? `e-${k}` : undefined} {...extra} />
      <span className="fld__err" id={`e-${k}`} role={err[k] ? 'alert' : undefined}>{err[k] || ''}</span>
    </div>
  );

  const hasContact = CONTACT.phone || CONTACT.email || CONTACT.address;

  return (
    <section id="contact" className="section bg-beige" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div className="contact__l">
          <SectionHead title="Your Golden Opportunity Starts Here." id="contact-title">
            Connect with Goldenacres to explore the project, understand the ownership documentation and learn about the gold programme.
          </SectionHead>
          <Reveal className="wa">
            <MessageCircle size={28} strokeWidth={1.3} aria-hidden="true" />
            <div><h3>Prefer WhatsApp?</h3><p>Start a conversation with our team.</p></div>
            <a className="btn btn--gold btn--sm" href={waLink('Hello Goldenacres, I would like to know more about the Land Ownership with Gold Bonus Programme.')} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
          </Reveal>
          {hasContact && (
            <Reveal className="cinfo" delay={0.05}>
              {CONTACT.phone && <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}><Phone size={18} strokeWidth={1.4} aria-hidden="true" />{CONTACT.phone}</a>}
              {CONTACT.email && <a href={`mailto:${CONTACT.email}`}><Mail size={18} strokeWidth={1.4} aria-hidden="true" />{CONTACT.email}</a>}
              {CONTACT.address && <span><MapPin size={18} strokeWidth={1.4} aria-hidden="true" />{CONTACT.address}</span>}
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h3 className="next__h">What happens after you enquire</h3>
            <ol className="next">
              {NEXT_STEPS.map(([t, d], i) => (<li key={t}><span className="num">{i + 1}</span><div><strong>{t}</strong><p>{d}</p></div></li>))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="form card" y={30}>
          <AnimatePresence mode="wait" initial={false}>
            {status === 'sent' && (
              <motion.div key="sent" className="state" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">
                <CircleCheck size={40} strokeWidth={1.2} color="#164C3A" aria-hidden="true" />
                <h3>Enquiry received</h3>
                <p>Thank you, {f.name.trim().split(' ')[0]}. Our team will contact you shortly.</p>
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => { setF(empty); setTouched({}); setStatus('idle'); }}>Send another enquiry</button>
              </motion.div>
            )}
            {status === 'offline' && (
              <motion.div key="off" className="state" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">
                <CircleAlert size={40} strokeWidth={1.2} color="#8A6D2F" aria-hidden="true" />
                <h3>Your enquiry has not been sent</h3>
                <p>Online enquiries are not switched on for this website yet. Your details are still here, so you can send them to our team directly instead.</p>
                <div className="state__btns">
                  <a className="btn btn--primary btn--sm" href={waLink(message())} target="_blank" rel="noopener noreferrer">Send on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
                  {CONTACT.email && <a className="btn btn--ghost btn--sm" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Goldenacres enquiry: ' + f.interest)}&body=${encodeURIComponent(message())}`}>Send by email</a>}
                </div>
                <button type="button" className="link" onClick={() => setStatus('idle')}>Back to the form</button>
              </motion.div>
            )}
            {(status === 'idle' || status === 'sending' || status === 'error') && (
              <motion.form key="form" ref={formRef} onSubmit={submit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Enquiry form">
                <h3 className="form__t">Enquire about Goldenacres</h3>
                {field('name', 'Full Name', 'text', { autoComplete: 'name', required: true })}
                <div className="fld-row">
                  {field('mobile', 'Phone Number', 'tel', { autoComplete: 'tel', inputMode: 'tel', placeholder: '10-digit mobile', required: true })}
                  {field('email', 'Email Address', 'email', { autoComplete: 'email', required: true })}
                </div>
                <div className="fld fld--plain">
                  <label htmlFor="f-interest">Interested In</label>
                  <select id="f-interest" name="interest" value={f.interest} onChange={set('interest')}>{INTERESTS.map((i) => <option key={i}>{i}</option>)}</select>
                </div>
                <div className="fld fld--plain">
                  <label htmlFor="f-msg">Message <span className="opt">(optional)</span></label>
                  <textarea id="f-msg" name="msg" rows="4" value={f.msg} onChange={set('msg')} />
                </div>
                {status === 'error' && <p className="form__err" role="alert"><CircleAlert size={18} aria-hidden="true" /> We could not send your enquiry. Please try again, or use WhatsApp.</p>}
                <button className="btn btn--primary form__go" disabled={status === 'sending'}>
                  {status === 'sending' ? <><Loader2 className="spin" size={18} aria-hidden="true" /> Sending…</> : <>Submit Enquiry <Send size={16} aria-hidden="true" /></>}
                </button>
                {!isLeadApiConfigured && <p className="form__fine">By submitting, you ask Goldenacres to contact you about your enquiry.</p>}
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
