import Hero from '../sections/Hero';
import About from '../sections/About';
import Offer from '../sections/Offer';
import Referral from '../sections/Referral';
import Rewards from '../sections/Rewards';
import GoldRoad from '../sections/GoldRoad';
import HowItWorks from '../sections/HowItWorks';
import Gallery from '../sections/Gallery';
import Trust from '../sections/Trust';
import Faq from '../sections/Faq';
import Contact from '../sections/Contact';
import { Marquee, Showcase, ImageBanner, Statement, Bento, Milestones, ReferralFlow } from '../components/Templates';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Bento />
      <Showcase />
      <Offer />
      <GoldRoad />
      <ReferralFlow />
      <Referral />
      <Rewards />
      <HowItWorks />
      <Gallery />
      <Statement>Own the land. Earn the <em>gold.</em> Share the opportunity.</Statement>
      <Trust />
      <Faq />
      <ImageBanner title="Your next chapter begins with Goldenacres." text="Own 1 Guntha of land and enjoy monthly gold benefits, subject to programme terms." />
      <Contact />
    </>
  );
}
