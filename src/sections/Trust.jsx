import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { TRUST, DETAILS } from '../data';

export default function Trust() {
  return (
    <section id="trust" className="section bg-ivory" aria-labelledby="trust-title">
      <div className="wrap">
        <SectionHead title="Clarity at Every Step." id="trust-title">
          Documentation, ownership, gold eligibility and referral conditions are stated plainly, and the full programme terms are available on request.
        </SectionHead>
        <div className="trust">
          {TRUST.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.1} className="card trust__c">
              <Icon size={28} strokeWidth={1.2} color="#8A6D2F" aria-hidden="true" />
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="trust__d">
            <h3>Project information</h3>
            <dl>
              {DETAILS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd className={v === 'To be confirmed' ? 'tbc' : ''}>{v}</dd></div>
              ))}
            </dl>
            <p className="trust__fn">*Subject to title verification, documentation and registration requirements.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
