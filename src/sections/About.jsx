import { LandPlot, Coins, Share2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import SectionHead from '../components/SectionHead';
import { ABOUT_CARDS } from '../data';

const ICONS = [LandPlot, Coins, Share2];

export default function About() {
  return (
    <section id="about" className="section bg-white" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about">
          <Reveal className="about__photo">
            <Photo name="layout" pos="50% 52%" ratio="4/5" zoom alt="Landscaped plots with tree-lined roads, a lake and amenities seen from above" />
            <span className="about__frame" aria-hidden="true" />
          </Reveal>
          <div className="about__text">
            <SectionHead title="More Than Land Ownership. A Golden Opportunity." id="about-title">
              Goldenacres brings together the value of land ownership and exclusive gold rewards through a structured customer benefit programme.
            </SectionHead>
            <Reveal delay={0.1}>
              <p>Any eligible individual can purchase 1 Guntha of land for ₹2,00,000 and become eligible for gold rewards for the next six months, according to programme terms. Every customer also receives a unique Referral ID to share with friends, family and business contacts.</p>
            </Reveal>
          </div>
        </div>
        <ul className="feats">
          {ABOUT_CARDS.map(([t, d], i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="li" key={t} delay={i * 0.12} className="card feat">
                <span className="feat__n num" aria-hidden="true">0{i + 1}</span>
                <Icon size={30} strokeWidth={1.2} color="#8A6D2F" aria-hidden="true" />
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
