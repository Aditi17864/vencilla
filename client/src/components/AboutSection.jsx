import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import goldWorldMap from '../assets/textures/gold_world_map.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  const commitmentItems = [
    {
      title: 'Uncompromising Quality',
      desc: 'International standards. Zero compromise.',
    },
    {
      title: 'Innovation Driven',
      desc: 'Continuous innovation for a better tomorrow.',
    },
    {
      title: 'Sustainable Practices',
      desc: 'Responsible manufacturing for a sustainable world.',
    },
    {
      title: 'Customer First',
      desc: 'Your success is our priority.',
    },
  ];

  return (
    <section
      className="section bg-[#F9F6F0] text-[#07090E] relative overflow-hidden mandala-bg border-b border-[#C9A24B]/20 py-20"
      ref={sectionRef}
    >
      {/* Decorative Ornate Corner Accents matching Image 2 */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="80" stroke="#C9A24B" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="60" stroke="#C9A24B" strokeWidth="1" />
          <path d="M0 40 Q40 40 40 0" stroke="#C9A24B" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none transform rotate-90">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="80" stroke="#C9A24B" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="60" stroke="#C9A24B" strokeWidth="1" />
          <path d="M0 40 Q40 40 40 0" stroke="#C9A24B" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="container-vc relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Who We Are (Cols 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <span className="eyebrow mb-3 text-[#C9A24B] font-bold tracking-[0.25em]">
              WHO WE ARE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#07090E] leading-tight mb-4">
              Crafting Excellence.<br />Delivering Trust.
            </h2>
            <div className="w-16 h-[3px] bg-[#C9A24B] mb-6" />
            <p className="font-sans text-sm sm:text-base text-[#07090E]/80 leading-relaxed mb-8">
              Vencilla is a globally recognized name in Textiles and Pharmaceuticals, proudly based in India. With a legacy of quality, innovation, and integrity, we deliver world-class products that empower businesses and improve lives across the globe.
            </p>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#07090E] text-white font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#C9A24B] hover:text-[#07090E] transition-all shadow-md"
              >
                DISCOVER OUR STORY &rarr;
              </Link>
            </div>
          </div>

          {/* Center Card: Global Reach (Cols 4) matching Image 2 */}
          <div className="lg:col-span-4">
            <div className="glass-card-light rounded-xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 transform hover:-translate-y-1 transition-all duration-300">
              <div className="h-52 relative overflow-hidden bg-[#07131E]">
                <img
                  src={goldWorldMap}
                  alt="Vencilla Global Reach World Map"
                  className="w-full h-full object-cover filter brightness-110 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 bg-[#07090E] text-white text-center">
                <h3 className="font-serif-luxury text-base font-bold tracking-wider text-white mb-2 uppercase">
                  GLOBAL REACH. STRONGER TOGETHER.
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
                  Exporting to 50+ countries across Africa, Middle East, Europe, CIS, Asia & Latin America.
                </p>
                <Link
                  to="/global-presence"
                  className="inline-block text-[11px] font-bold tracking-widest text-[#C9A24B] hover:text-white uppercase transition-colors"
                >
                  VIEW OUR GLOBAL PRESENCE &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Our Commitment (Cols 4) matching Image 2 */}
          <div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-4">
            <span className="eyebrow mb-6 text-[#C9A24B] font-bold tracking-[0.2em] text-left">
              OUR COMMITMENT
            </span>

            <div className="space-y-6">
              {commitmentItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-left group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0E5A36] text-white flex items-center justify-center shadow-sm mt-0.5 group-hover:scale-110 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-base font-bold text-[#07090E] mb-1">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-[#07090E]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
