import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { HOW_STEPS } from '../data';

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-beige" aria-labelledby="how-title">
      <div className="wrap">
        <SectionHead title="Your Journey to Land Ownership." id="how-title">
          Five clear steps from choosing your land to receiving your first monthly gold benefit.
        </SectionHead>
        <ol className="steps">
          <span className="steps__line" aria-hidden="true" />
          {HOW_STEPS.map(([Icon, t, d], i) => (
            <Reveal as="li" key={t} delay={i * 0.1} className="step">
              <span className="step__n num" aria-hidden="true">0{i + 1}</span>
              <div className="card step__c">
                <Icon size={30} strokeWidth={1.2} color="#8A6D2F" aria-hidden="true" />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
