import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import luxuryFabricDrape from '../assets/textures/luxury_fabric_drape.jpg';
import textileHeroBg from '../assets/textures/textile_hero_bg.jpg';

// Fabric Categories Data matching Reference Image 2
const categories = [
  {
    id: 'african-wax',
    name: 'African Wax Prints (Ankara / Kitenge / Chitenge)',
    desc: 'Vibrant authentic prints for fashion & traditional garments.',
    designs: '120+ Designs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'uniform-fabrics',
    name: 'Uniform Fabrics',
    desc: 'Durable fabrics for corporate & institutional use.',
    designs: '80+ Designs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cotton-fabrics',
    name: 'Cotton Fabrics',
    desc: 'Premium quality cotton in various weaves.',
    designs: '100+ Designs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a6 6 0 0 0-6 6c0 4.5 6 11 6 11s6-6.5 6-11a6 6 0 0 0-6-6z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'embroidered-fabrics',
    name: 'Embroidered Fabrics',
    desc: 'Intricate embroidery for fashion & occasion wear.',
    designs: '60+ Designs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'scarves-dupatta',
    name: 'Scarves / Dupatta',
    desc: 'Stylish & elegant scarves and dupatta collections.',
    designs: '50+ Designs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    ),
    image: luxuryFabricDrape,
  },
];

// Featured Fabrics Product Data matching Reference Images 2 & 3
const featuredFabrics = [
  {
    id: 'ankara-wax-print',
    title: 'Ankara Wax Print (Blue & Yellow)',
    composition: '100% Cotton',
    specs: '44/45" • 120 GSM',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
    description: 'High grade 100% cotton double-sided Ankara wax print featuring vivid traditional motifs with colorfast wash resistance.',
  },
  {
    id: 'khanga-print',
    title: 'Khanga Print (Traditional)',
    composition: '100% Cotton',
    specs: '44/45" • 110 GSM',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional East African Khanga fabric printed with iconic Swahili proverbs, central medallions, and ornate outer borders.',
  },
  {
    id: 'linen-fabric',
    title: 'Linen Fabric (Premium Quality)',
    composition: 'Linen Blend',
    specs: '58" • 150 GSM',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80',
    description: 'Breathable European linen blend woven fabric engineered for luxury shirting, resort wear, and home upholstery.',
  },
  {
    id: 'georgette-printed',
    title: 'Royal Silk & Floral Jacquard (Printed)',
    composition: '100% Pure Silk Brocade',
    specs: '44" • 90 GSM',
    image: luxuryFabricDrape,
    description: 'Lightweight flowing royal silk fabric with floral jacquard motifs and vibrant cascading color gradients.',
  },
  {
    id: 'embroidered-net',
    title: 'Embroidered Net (Fancy)',
    composition: 'Net Fabric',
    specs: '54" • 120 GSM',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
    description: 'Luxurious nylon tulle net embellished with metallic zari threadwork, sequin accents, and scalloped lace borders.',
  },
  {
    id: 'polyester-uniform',
    title: 'Polyester Fabric (Uniform)',
    composition: '100% Polyester',
    specs: '58" • 130 GSM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    description: 'Wrinkle-resistant twill weave polyester engineered for corporate blazers, trousers, and institutional uniforms.',
  },
];

export default function TextilesDivision() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  // Filter categories or products based on search term
  const filteredFabrics = featuredFabrics.filter(
    (f) =>
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.composition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#07090E] text-white min-h-screen pt-20">
      
      {/* ================= HERO SECTION matching Image 1 ================= */}
      <section className="relative min-h-[580px] bg-gradient-to-r from-[#07090E] via-[#0C121D] to-[#07090E] overflow-hidden border-b border-[#C9A24B]/20 py-16 flex items-center">
        {/* Background Ambient Image Overlay */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-35 pointer-events-none">
          <img
            src={textileHeroBg}
            alt="Vencilla Textiles Stack"
            className="w-full h-full object-cover filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-[#07090E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E] via-transparent to-[#07090E]" />
        </div>

        <div className="container-vc relative z-10">
          {/* Breadcrumb matching Image 1 */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6 font-mono">
            <Link to="/" className="hover:text-[#C9A24B] transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-[#C9A24B] font-semibold">Textiles</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="eyebrow text-xs tracking-[0.25em] text-[#C9A24B]">VENCILLA</span>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                TEXTILES<br />DIVISION
              </h1>

              {/* Gold Accent Line */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-r from-[#C9A24B] to-transparent" />
                <div className="w-2 h-2 rotate-45 bg-[#C9A24B]" />
              </div>

              <h2 className="font-serif-luxury text-lg sm:text-xl text-[#F5E6AD] font-semibold mb-4">
                Premium fabrics. Timeless craftsmanship. Global standards.
              </h2>

              <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-xl mb-8">
                We manufacture and export a wide range of high-quality textile fabrics trusted by brands, wholesalers and manufacturers across the world.
              </p>

              {/* Action Buttons matching Image 1 */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#categories"
                  className="btn-primary"
                >
                  EXPLORE CATALOGUE &rarr;
                </a>
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="btn-secondary flex items-center gap-2"
                >
                  DOWNLOAD BROCHURE
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card matching Image 1 */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 glass-card p-2 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={luxuryFabricDrape}
                  alt="Vencilla Luxury Silk &amp; Jacquard Fabrics"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl filter brightness-105 contrast-110"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#07090E]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 p-4 rounded-lg bg-[#07090E]/80 backdrop-blur-md border border-[#C9A24B]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A24B]">AUTHENTIC WEAVE</span>
                    <h4 className="font-serif-luxury text-sm font-bold text-white">Royal Silk & Custom Jacquards</h4>
                  </div>
                  <span className="text-xs font-bold text-[#C9A24B]">50+ COUNTRIES</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM STATS BAR matching Image 1 ================= */}
      <section className="bg-[#050C15] border-b border-[#C9A24B]/20 py-8">
        <div className="container-vc">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#C9A24B]/20">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">50+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">COUNTRIES WE EXPORT</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">1000+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">FABRIC DESIGNS IN CATALOGUE</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 21V9l5 3V9l5 3v9" />
                  <path d="M6 12H3V9l3-4h12l3 4v3h-3" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">20+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">YEARS OF EXCELLENCE</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">500+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">SATISFIED GLOBAL CLIENTS</span>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] font-bold tracking-wider text-[#C9A24B] uppercase">QUALITY ASSURED</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR CATEGORIES matching Image 2 ================= */}
      <section id="categories" className="py-20 bg-[#F9F6F0] text-[#07090E] border-b border-[#C9A24B]/20">
        <div className="container-vc">
          
          {/* Section Header with Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-left">
              <span className="eyebrow text-xs tracking-[0.25em] text-[#C9A24B] font-bold block mb-1">
                OUR CATEGORIES
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#07090E]">
                Explore Our Fabric Range
              </h2>
              <div className="w-16 h-[2px] bg-[#C9A24B] mt-3" />
            </div>

            {/* Search Input matching Image 2 */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search fabrics, category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-md bg-white border border-[#C9A24B]/40 text-xs text-[#07090E] focus:outline-none focus:border-[#C9A24B] shadow-sm"
              />
              <svg className="absolute left-3 top-3 w-4 h-4 text-[#C9A24B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Categories Grid matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#C9A24B]/25 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Icon Badge */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Circle Icon Badge on top center matching Image 2 */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#C9A24B]/30 flex items-center justify-center text-[#07090E]">
                    {cat.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="font-serif-luxury text-sm font-bold text-[#07090E] mb-2 leading-snug">
                      {cat.name}
                    </h3>
                    <p className="font-sans text-xs text-[#07090E]/70 leading-relaxed mb-4">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                    <span className="font-semibold text-[#C9A24B]">{cat.designs}</span>
                    <span className="w-7 h-7 rounded-full bg-[#07090E] text-white flex items-center justify-center group-hover:bg-[#C9A24B] group-hover:text-[#07090E] transition-colors">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Categories Button matching Image 2 */}
          <div className="text-center">
            <button
              onClick={() => setSearchTerm('')}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#07090E] text-white font-bold text-xs tracking-widest uppercase rounded hover:bg-[#C9A24B] hover:text-[#07090E] transition-all shadow-md"
            >
              VIEW ALL CATEGORIES &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: FEATURED FABRICS matching Images 2 & 3 ================= */}
      <section className="py-20 bg-[#07090E] text-white border-b border-[#C9A24B]/20">
        <div className="container-vc">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-left">
              <span className="eyebrow text-xs tracking-[0.25em] text-[#C9A24B] font-bold block mb-1">
                FEATURED FABRICS
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
                Our Most Popular Fabrics
              </h2>
              <div className="w-16 h-[2px] bg-[#C9A24B] mt-3" />
            </div>

            <Link
              to="/products?division=textiles"
              className="btn-secondary text-xs"
            >
              VIEW ALL PRODUCTS &rarr;
            </Link>
          </div>

          {/* Products Grid matching Image 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {filteredFabrics.map((prod) => (
              <div
                key={prod.id}
                className="bg-white text-[#07090E] rounded-xl overflow-hidden border border-[#C9A24B]/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-[#07090E]/80 text-[#C9A24B] text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
                    {prod.composition}
                  </div>
                </div>

                {/* Body Content matching Image 3 */}
                <div className="p-4 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="font-serif-luxury text-xs font-bold text-[#07090E] mb-1 leading-snug line-clamp-2">
                      {prod.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gray-500 mb-1">
                      {prod.composition}
                    </p>
                    <p className="text-[10px] font-mono text-[#C9A24B] font-bold mb-4">
                      {prod.specs}
                    </p>
                  </div>

                  {/* 3 Circular Action Buttons matching Image 3: Eye (Quick View), WhatsApp, Arrow */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    {/* Quick View Button */}
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      title="Quick View"
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-[#07090E] hover:text-white flex items-center justify-center transition-colors"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/917622009300?text=${encodeURIComponent(`Hi Vencilla Textiles, I am interested in ${prod.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
                      </svg>
                    </a>

                    {/* Detail Link Button */}
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      title="View Details"
                      className="w-8 h-8 rounded-full bg-[#C9A24B] text-[#07090E] hover:bg-[#E5C26B] flex items-center justify-center transition-colors"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE VENCILLA TEXTILES matching Image 3 ================= */}
      <section className="py-16 bg-[#050C15] text-white border-b border-[#C9A24B]/20">
        <div className="container-vc">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 text-left">
              <span className="eyebrow text-xs tracking-[0.25em] text-[#C9A24B] font-bold block mb-1">
                WHY CHOOSE VENCILLA TEXTILES?
              </span>
              <h2 className="font-serif-luxury text-3xl font-bold text-white mb-2">
                Quality That Defines Us
              </h2>
              <div className="w-14 h-[2px] bg-[#C9A24B]" />
            </div>

            {/* Right 4 Features Grid matching Image 3 */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-serif-luxury text-sm font-bold text-white mb-1">Premium Quality</h4>
                <p className="font-sans text-xs text-white/70 leading-relaxed">Finest raw materials and strict quality control.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h4 className="font-serif-luxury text-sm font-bold text-white mb-1">Custom Solutions</h4>
                <p className="font-sans text-xs text-white/70 leading-relaxed">OEM & custom prints as per your requirements.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h4 className="font-serif-luxury text-sm font-bold text-white mb-1">Timely Delivery</h4>
                <p className="font-sans text-xs text-white/70 leading-relaxed">On-time delivery with safe & secure packaging.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-start text-left">
                <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/20 text-[#C9A24B] flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h4 className="font-serif-luxury text-sm font-bold text-white mb-1">Global Standards</h4>
                <p className="font-sans text-xs text-white/70 leading-relaxed">Compliant with international standards & certifications.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: INQUIRY BANNER matching Image 3 ================= */}
      <section className="py-16 bg-[#F9F6F0] text-[#07090E]">
        <div className="container-vc">
          
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#C9A24B]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            
            <div className="flex items-center gap-6">
              {/* Headset Icon in Circle matching Image 3 */}
              <div className="w-16 h-16 rounded-full bg-[#07090E] text-[#C9A24B] flex-shrink-0 flex items-center justify-center shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#07090E] mb-1">
                  Looking for a specific fabric?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#07090E]/70 max-w-xl">
                  Our team is ready to assist you with product information, samples and bulk enquiries.
                </p>
              </div>
            </div>

            {/* Action Buttons matching Image 3 */}
            <div className="flex flex-wrap gap-4 items-center flex-shrink-0">
              <button
                onClick={() => setInquiryOpen(true)}
                className="px-6 py-3.5 bg-[#07090E] text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-[#C9A24B] hover:text-[#07090E] transition-all shadow-md flex items-center gap-2"
              >
                SEND INQUIRY &rarr;
              </button>

              <a
                href="https://wa.me/917622009300?text=Hi%20Vencilla%20Textiles%20Team%2C%20I%20would%20like%20to%20inquire%20about%20fabric%20samples"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white border border-gray-300 text-gray-800 font-bold text-xs tracking-wider uppercase rounded hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
                </svg>
                CHAT ON WHATSAPP
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================= QUICK VIEW MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white text-[#07090E] rounded-2xl max-w-xl w-full p-6 relative overflow-hidden shadow-2xl border border-[#C9A24B]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-lg"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="text-left">
                <span className="text-[10px] font-bold text-[#C9A24B] uppercase tracking-widest block mb-1">
                  VENCILLA FABRICS
                </span>
                <h3 className="font-serif-luxury text-lg font-bold mb-2">{selectedProduct.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{selectedProduct.description}</p>
                <div className="text-xs font-mono text-gray-700 space-y-1 mb-6">
                  <div><strong>Composition:</strong> {selectedProduct.composition}</div>
                  <div><strong>Specs:</strong> {selectedProduct.specs}</div>
                </div>

                <a
                  href={`https://wa.me/917622009300?text=${encodeURIComponent(`Hi Vencilla Textiles, I want to order/inquire about ${selectedProduct.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-xs"
                >
                  INQUIRE ON WHATSAPP &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= INQUIRY / BROCHURE MODAL ================= */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0C121D] text-white rounded-2xl max-w-lg w-full p-8 relative border border-[#C9A24B]/40 shadow-2xl text-left">
            <button
              onClick={() => setInquiryOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
              Request Textile Catalogue & Samples
            </h3>
            <p className="text-xs text-white/70 mb-6">
              Enter your details below to download the official Vencilla Textiles product catalogue & sample swatches.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Brochure download link has been generated.'); setInquiryOpen(false); }} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-[#C9A24B] uppercase block mb-1">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C9A24B]" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-[#C9A24B] uppercase block mb-1">Business Email</label>
                <input required type="email" placeholder="john@company.com" className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:border-[#C9A24B]" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-[#C9A24B] uppercase block mb-1">Fabric Category Interest</label>
                <select className="w-full px-4 py-2.5 rounded bg-[#07090E] border border-white/20 text-xs text-white focus:outline-none focus:border-[#C9A24B]">
                  <option>African Wax Prints (Ankara)</option>
                  <option>Uniform Fabrics</option>
                  <option>Cotton Fabrics</option>
                  <option>Embroidered Fabrics</option>
                  <option>Scarves & Dupatta</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full mt-4 text-xs py-3">
                DOWNLOAD BROCHURE NOW &rarr;
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
