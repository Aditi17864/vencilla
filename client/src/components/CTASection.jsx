import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({
  eyebrow = 'Partner With Us',
  title = 'Looking for a specific product?',
  subtitle = 'Our team is ready to assist you with product information, samples and bulk enquiries.',
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)',
      }}
    >
      {/* Decorative gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,162,75,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,162,75,0.3), transparent)',
        }}
      />

      <div className="container-vc relative cta-content">
        <div
          className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto"
          style={{
            background:
              'linear-gradient(135deg, rgba(201,162,75,0.04) 0%, rgba(255,255,255,0.02) 100%)',
          }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display text-white">{title}</h2>
          <div className="gold-divider-center" />
          <p className="mt-2 text-white/50 max-w-lg mx-auto">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/request-a-quote" className="btn-primary" data-cursor-hover>
              Send Inquiry →
            </Link>
            <a href="#" className="btn-secondary" data-cursor-hover>
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
