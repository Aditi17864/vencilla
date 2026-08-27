import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroScene from '../components/HeroScene.jsx';
import StatsBar from '../components/StatsBar.jsx';
import AboutSection from '../components/AboutSection.jsx';
import DivisionShowcase from '../components/DivisionShowcase.jsx';
import FeatureIcons from '../components/FeatureIcons.jsx';
import TrustedBy from '../components/TrustedBy.jsx';
import CTASection from '../components/CTASection.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroScene />
      <StatsBar />
      <AboutSection />
      <DivisionShowcase />
      <FeatureIcons />
      <TrustedBy />
      <CTASection
        eyebrow="Partner With Us"
        title="Looking for a specific product?"
        subtitle="Our team is ready to assist you with product information, samples and bulk enquiries."
      />
    </>
  );
}
