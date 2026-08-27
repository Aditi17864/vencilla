import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carpet3D from './Carpet3D';

export default function DivisionShowcase() {
  const [activeTab, setActiveTab] = useState('textiles');

  return (
    <section className="section bg-[#07090E] text-white relative py-20 border-b border-[#C9A24B]/20">
      <div className="container-vc">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow text-[#C9A24B] font-bold tracking-[0.25em] mb-2 block">
            EXPLORE OUR DIVISIONS IN INTERACTIVE 3D
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mb-4">
            Mastery in Textiles & Excellence in Pharmaceuticals
          </h2>
          <div className="gold-divider-center mb-6" />
          <p className="font-sans text-sm sm:text-base text-white/70">
            Select a division below to experience our 3D interactive product showcases: unrolling luxury carpets and precision-engineered pharma packaging.
          </p>
        </div>

        {/* Tab Selection Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-lg bg-[#0C1018] border border-[#C9A24B]/30">
            <button
              onClick={() => setActiveTab('textiles')}
              className={`flex items-center gap-3 px-6 py-3 rounded-md font-serif-luxury text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'textiles'
                  ? 'bg-[#C9A24B] text-[#07090E] shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.8L17.2 12 12 17.2 6.8 12 12 6.8z" />
              </svg>
              3D ROYAL SILK &amp; FABRIC DRAPERY
            </button>

            <button
              onClick={() => setActiveTab('pharma')}
              className={`flex items-center gap-3 px-6 py-3 rounded-md font-serif-luxury text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'pharma'
                  ? 'bg-[#00BCD4] text-[#07090E] shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
              </svg>
              3D PHARMA & POPPING CAP
            </button>
          </div>
        </div>

        {/* Active Tab Content */}
        {activeTab === 'textiles' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* 3D Carpet Showcase */}
            <div className="lg:col-span-7">
              <Carpet3D />
            </div>

            {/* Description & Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-[#C9A24B] uppercase mb-2">
                VENCILLA TEXTILES DIVISION
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4">
                Royal Persian & Indian Jacquard Fabrics
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                From handcrafted silk brocades and intricate velvet jacquards to heavy-duty wool carpets, our textile division blends centuries of artisan heritage with modern eco-friendly weaving technologies.
              </p>

              <ul className="space-y-3 mb-8 w-full">
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  Custom Woven Jacquards & Embossed Velvet
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  Exporting to over 50+ international markets
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  Sustainable organic cotton & recycled wool fibers
                </li>
              </ul>

              <Link to="/textiles" className="btn-primary">
                VIEW TEXTILES CATALOGUE &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Pharma Showcase Card */}
            <div className="lg:col-span-7">
              <div className="w-full h-[450px] relative bg-gradient-to-br from-[#061A2B] to-[#07090E] rounded-xl overflow-hidden border border-[#00BCD4]/40 shadow-2xl p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#00E5FF] animate-ping" />
                    <span className="font-serif-luxury text-sm font-bold tracking-wider text-[#00E5FF] uppercase">
                      STERILE GLASS VIAL PACKAGING & POPPING CAP
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00BCD4] bg-[#00BCD4]/10 px-3 py-1 rounded">
                    ISO 9001:2015 CERTIFIED
                  </span>
                </div>

                {/* Central Visual Banner */}
                <div className="my-auto text-center py-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#00BCD4]/15 border border-[#00BCD4]/40 flex items-center justify-center text-[#00E5FF] shadow-[0_0_30px_rgba(0,188,212,0.3)]">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="8" y="2" width="8" height="20" rx="4" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                    3D Interactive Glass Vial & Cap
                  </h4>
                  <p className="font-sans text-xs text-white/70 max-w-md mx-auto">
                    Check out the main hero section to interactively hover or click the 3D vial and trigger the metallic bottle cap pop animation in real-time!
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-white/60 border-t border-[#00BCD4]/20 pt-4">
                  <span>CAPACITY: 10mL - 100mL</span>
                  <span>MATERIAL: BOROSILICATE TYPE I</span>
                  <span>CAP: ALUMINUM CRIMP SEAL</span>
                </div>
              </div>
            </div>

            {/* Description & Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase mb-2">
                VENCILLA PHARMACEUTICALS DIVISION
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4">
                GMP Certified Formulations & Sterile Liquids
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                Our pharmaceutical division manufactures WHO-GMP compliant formulations, active pharmaceutical ingredients (APIs), and sterile liquid injectables in state-of-the-art automated facilities.
              </p>

              <ul className="space-y-3 mb-8 w-full">
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                  WHO-GMP & US-FDA Compliant Manufacturing
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                  Advanced Tamper-Proof Aluminum Crimp Caps
                </li>
                <li className="flex items-center gap-3 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
                  Global Distribution to 50+ Healthcare Systems
                </li>
              </ul>

              <Link
                to="/pharmaceuticals"
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #00BCD4 0%, #00838F 100%)', borderColor: '#80DEEA', color: '#07090E' }}
              >
                VIEW PHARMA CATALOGUE &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
