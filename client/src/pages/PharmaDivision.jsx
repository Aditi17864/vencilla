import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Comprehensive 46 Therapeutic Categories matching Reference Screenshots
const therapeuticProductsGrid = [
  { name: 'Analgesic', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antacid', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Acne', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Biotic', img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Anginal', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Hypertensive', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Infective', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anti Obesity', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiandrogens', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antianthelminthic', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiarrhythmic', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiasthmatic', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anticoagulants', img: 'https://images.unsplash.com/photo-1579684453401-fc2b8ca46a83?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antidepressant', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antidiabetic', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antidiarrheal', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiemetic', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiepileptic', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antifungal', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antigout', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antihyperlipidemic', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antimalarial', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antineoplastics', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiplatelet', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiprogestational', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antipsychotic', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiseptic', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antispasmodic', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antituberculosis', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Antiviral', img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bone Diseases', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&q=80' },
  { name: 'Enlarged Prostate Treatment', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80' },
  { name: 'Erectile Dysfunction', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Expectorant', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80' },
  { name: 'Hyperhidrosis', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Immuno Suppressant', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80' },
  { name: 'Iron Chelating Agent', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80' },
  { name: 'Laxative', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80' },
  { name: 'Migraine Headache', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80' },
  { name: 'Mucolytic', img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80' },
  { name: 'NSAID', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80' },
  { name: 'Nutraceuticals', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80' },
  { name: 'Proteolytic Enzyme', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Thyroid Hormones', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vitamin D & Analogues', img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vitamin Supplements', img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80' },
];


// List of 48+ Export Countries matching Reference Prompt
const exportCountries = [
  'United Kingdom', 'USA', 'Russia', 'South Africa', 'Bangladesh', 'Ethiopia', 'Kenya',
  'Sri Lanka', 'Nepal', 'Rwanda', 'Mozambique', 'Australia', 'Singapore', 'Ghana',
  'Malaysia', 'Sudan', 'Myanmar', 'Mauritius', 'Guinea', 'Cambodia', 'Philippines',
  'Thailand', 'Nigeria', 'Uzbekistan', 'Algeria', 'Bhutan', 'Tanzania', 'Uganda',
  'Indonesia', 'Zambia', 'UAE', 'Ukraine', 'Azerbaijan', 'Hong Kong', 'Afghanistan',
  'Iran', 'Ivory Coast', 'Turkey', 'Jordan', 'Tajikistan', 'Vietnam', 'Kuwait',
  'Guyana', 'Switzerland', 'Angola', 'Zimbabwe', 'Bosnia and Herzegovina', 'Georgia'
];

// Featured Products Table Data
const pharmaProducts = [
  { name: 'Azithromycin Tablets IP', composition: 'Azithromycin', strength: '250 mg / 500 mg', dosage: 'Tablets', packing: '10x6 Tablets' },
  { name: 'Vencilla-Paracetamol Tablets IP', composition: 'Paracetamol', strength: '500 mg / 650 mg', dosage: 'Tablets', packing: '10x10 Tablets' },
  { name: 'Cefixime Tablets IP', composition: 'Cefixime', strength: '200 mg', dosage: 'Tablets', packing: '10x10 Tablets' },
  { name: 'Diclofenac Sodium Injection IP', composition: 'Diclofenac Sodium', strength: '75 mg / 3 ml', dosage: 'Injection', packing: '5x5x3 ml' },
  { name: 'Vitamin D3 Capsules', composition: 'Cholecalciferol', strength: '60,000 IU', dosage: 'Capsules', packing: '1x4 Capsules' },
];

// Top APIs List
const apiList = [
  'VITAMIN D3', 'FOLIC ACID', 'LEVOSULPRIDE', 'CODEINE', 'CARISOPRODOL', 'TAPENTADOL',
  'TRAMADOL', 'SILDENAFIL CITRATE', 'TADALAFIL', 'OXCARBAZEPINE', 'LORAZEPAM',
  'NITRAZEPAM', 'CLONAZEPAM', 'ZOPICLONE',
];

// Certifications Data
const certifications = [
  { name: 'WHO GMP CERTIFIED', badge: 'WHO GMP' },
  { name: 'HACCP CERTIFIED', badge: 'HACCP' },
  { name: 'ISO 22000 CERTIFIED', badge: 'ISO 22000' },
  { name: 'GMP QUALITY CERTIFICATION', badge: 'GMP QUALITY' },
  { name: 'FDA APPROVED', badge: 'FDA' },
  { name: 'HALAL 100% CERTIFIED', badge: 'HALAL' },
  { name: 'FIEO REGISTERED', badge: 'FIEO' },
  { name: 'FSSAI CERTIFIED', badge: 'FSSAI' },
  { name: 'PHARMEXCIL MEMBER', badge: 'PHARMEXCIL' },
  { name: 'KOSHER CERTIFIED', badge: 'KOSHER' },
  { name: 'SGCCI MEMBER', badge: 'SGCCI' },
];

export default function PharmaDivision() {
  const [searchProduct, setSearchProduct] = useState('');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // API Quotation Form State
  const [apiQuoteForm, setApiQuoteForm] = useState({
    company: '',
    country: 'United Kingdom',
    apiName: '',
    quantity: '',
    monthlyRequirement: '',
    destinationPort: '',
    email: '',
  });

  const filteredCategories = therapeuticProductsGrid.filter((c) =>
    c.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleInquire = (prod) => {
    setSelectedProduct(prod);
    setInquiryModalOpen(true);
  };

  const handleApiQuoteSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Your API Quotation request for ${apiQuoteForm.apiName || 'Active Ingredients'} has been submitted.`);
    setApiQuoteForm({
      company: '',
      country: 'United Kingdom',
      apiName: '',
      quantity: '',
      monthlyRequirement: '',
      destinationPort: '',
      email: '',
    });
  };

  return (
    <div className="bg-[#07090E] text-white min-h-screen pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[580px] bg-gradient-to-r from-[#F0F8FF] via-[#E6F3FF] to-[#F5FAFF] text-[#07090E] overflow-hidden border-b border-[#00BCD4]/30 py-16 flex items-center">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-60 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
            alt="Vencilla Pharmaceuticals Laboratory"
            className="w-full h-full object-cover filter brightness-105 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0F8FF] via-[#F0F8FF]/80 to-transparent" />
        </div>

        <div className="container-vc relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#07090E]/60 mb-6 font-mono">
            <Link to="/" className="hover:text-[#00A86B] transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-[#00A86B] font-semibold">Pharmaceuticals</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="eyebrow text-xs tracking-[0.25em] text-[#00A86B] font-bold block mb-2">
                VENCILLA PHARMACEUTICALS
              </span>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2540] mb-4 leading-tight">
                HEALTHCARE<br />BEYOND BORDERS
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-r from-[#00A86B] to-transparent" />
                <div className="w-2.5 h-2.5 rotate-45 bg-[#00A86B]" />
              </div>

              <p className="font-sans text-sm sm:text-base text-[#07090E]/80 leading-relaxed max-w-xl mb-8">
                VENCILLA PHARMACEUTICALS is a WHO-GMP certified pharmaceutical exporter from India supplying Active Pharmaceutical Ingredients (APIs), finished formulations, nutraceuticals, and contract manufacturing solutions to pharmaceutical distributors, importers, wholesalers, and healthcare businesses worldwide.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/products?division=pharmaceuticals"
                  className="btn-primary"
                  style={{ background: 'linear-gradient(135deg, #00A86B 0%, #00875A 100%)', borderColor: '#00C853', color: '#FFFFFF' }}
                >
                  EXPLORE FULL CATALOGUE &rarr;
                </Link>
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="px-6 py-3 bg-white text-[#07090E] border border-gray-300 font-bold text-xs tracking-wider uppercase rounded hover:bg-gray-100 transition-all flex items-center gap-2 shadow-sm"
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

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/80 glass-card-light p-3">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
                  alt="Pharma Capsules and Laboratory"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-white/90 backdrop-blur-md shadow-lg border border-[#00A86B]/30 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#00A86B]">STERILE FORMULATIONS</span>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#0A2540]">WHO-GMP Certified Medicines</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00A86B] bg-[#00A86B]/10 px-2.5 py-1 rounded">
                    1000+ PRODUCTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-[#004B87] text-white border-b border-[#00A86B]/30 py-8">
        <div className="container-vc">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">48+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">COUNTRIES WE EXPORT</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 21V9l5 3V9l5 3v9" />
                  <path d="M6 12H3V9l3-4h12l3 4v3h-3" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">WHO-GMP</span>
                <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">CERTIFIED FACILITIES</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31L4.75 18.55A2 2 0 0 0 6.5 21.5h11a2 2 0 0 0 1.75-2.95L14 9.31V2" />
                  <line x1="8.5" y1="2" x2="15.5" y2="2" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">1000+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">PRODUCTS IN PORTFOLIO</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">500+</span>
                <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">SATISFIED GLOBAL CLIENTS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] font-bold tracking-wider text-green-300 uppercase">QUALITY ASSURED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW CIRCULAR PRODUCTS GRID matching Reference Screenshots 1, 2, 3 ================= */}
      <section id="therapeutic-grid" className="py-20 bg-white text-[#07090E] border-b border-gray-200">
        <div className="container-vc">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-left">
              <span className="eyebrow text-xs tracking-[0.25em] text-[#00A86B] font-bold block mb-1">
                THERAPEUTIC CATEGORIES & PRODUCTS
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0A2540]">
                Products Range
              </h2>
              <div className="w-16 h-[2px] bg-[#00A86B] mt-2" />
            </div>

            {/* Filter Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Filter therapeutic products..."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 rounded-md bg-gray-50 border border-gray-300 text-xs text-[#07090E] focus:outline-none focus:border-[#00A86B] shadow-sm"
              />
              <svg className="absolute left-3 top-3 w-4 h-4 text-[#00A86B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* 46 Circular Category Cards Grid matching Screenshots 1, 2, 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {filteredCategories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setInquiryModalOpen(true)}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* Circle Image Frame matching User Screenshot */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:shadow-xl group-hover:border-[#00A86B] group-hover:scale-105 transition-all duration-300 relative bg-gray-50">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#00A86B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="font-serif-luxury text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#00A86B] transition-colors mt-3 text-center leading-snug">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= API SOLUTIONS & INDUSTRIES WE SERVE ================= */}
      <section className="py-20 bg-[#F9F6F0] text-[#07090E] border-b border-gray-200">
        <div className="container-vc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* API Solutions Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
                alt="API Solutions Laboratory Glassware"
                className="w-full md:w-52 h-64 object-cover rounded-xl shadow"
              />
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#007A48] text-white font-serif-luxury font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  API SOLUTIONS
                </div>
                <ul className="space-y-2.5 text-xs font-semibold text-gray-800">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Pregabalin API Supplier
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Pregabalin API Exporter from India
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Zopiclone API Bulk Supply Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Zopiclone API Exporter from India
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Tapentadol API Supplier
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Tapentadol API Exporter from India
                  </li>
                  <li className="flex items-center gap-2 font-bold text-[#007A48]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Worldwide Supplier of Active Pharmaceutical Ingredients
                  </li>
                </ul>
              </div>
            </div>

            {/* Industries We Serve Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=600&q=80"
                alt="Global Business Partnership Handshake"
                className="w-full md:w-52 h-64 object-cover rounded-xl shadow"
              />
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#007A48] text-white font-serif-luxury font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                  INDUSTRIES WE SERVE
                </div>
                <ul className="space-y-2.5 text-xs font-semibold text-gray-800">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    API Supplier for Pharmaceutical Manufacturers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    API Supplier for Pharmaceutical Importers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    API Supplier for Pharmaceutical Distributors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    API Supplier for Government Tenders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Global API Sourcing Partner
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Pharmaceutical Export Solutions for Importers
                  </li>
                  <li className="flex items-center gap-2 font-bold text-[#007A48]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007A48]" />
                    Trusted Pharmaceutical Export Partner
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 48+ EXPORT COUNTRIES BANNER matching Prompt Text ================= */}
      <section className="py-16 bg-[#050C15] text-white border-b border-[#00A86B]/20">
        <div className="container-vc text-center">
          <span className="eyebrow text-xs tracking-[0.25em] text-[#00A86B] font-bold block mb-2">
            GLOBAL EXPORT DESTINATIONS
          </span>
          <h2 className="font-serif-luxury text-3xl font-bold text-white mb-6">
            Exporting to 48+ Countries Worldwide
          </h2>
          <div className="w-16 h-[2px] bg-[#00A86B] mx-auto mb-8" />

          {/* Tag Cloud of 48 Countries */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
            {exportCountries.map((country, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-gray-200 border border-white/15 hover:border-[#00A86B] hover:text-[#00A86B] hover:bg-white transition-all cursor-default"
              >
                🌍 {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APIS LIST & QUOTATION FORM ================= */}
      <section id="api-quotation" className="py-20 bg-white text-[#07090E] border-b border-gray-200">
        <div className="container-vc">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-xs tracking-[0.25em] text-[#00A86B] font-bold block mb-1">
              GLOBAL ACTIVE PHARMACEUTICAL INGREDIENTS (APIs) EXPORTER
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0A2540]">
              Get API Quotation
            </h2>
            <div className="w-16 h-[2px] bg-[#00A86B] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 text-left">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
                <table className="w-full text-xs">
                  <thead className="bg-[#007A48] text-white uppercase text-[11px] font-bold tracking-wider">
                    <tr>
                      <th className="py-3 px-4 w-16 text-center">SR.NO</th>
                      <th className="py-3 px-4">APIS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-semibold text-gray-800">
                    {apiList.map((api, idx) => (
                      <tr key={idx} className="hover:bg-green-50/50 transition-colors">
                        <td className="py-2.5 px-4 text-center text-gray-500">{idx + 1}</td>
                        <td className="py-2.5 px-4">{api}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 text-center">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-3 bg-[#007A48] text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-[#005A35] transition-all"
                >
                  VIEW ALL APIS &rarr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F4F9F6] p-8 rounded-2xl border border-gray-200 shadow-xl text-left">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0A2540] mb-6">
                Get Api Quotation
              </h3>

              <form onSubmit={handleApiQuoteSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter company name"
                    value={apiQuoteForm.company}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Country *
                  </label>
                  <select
                    value={apiQuoteForm.country}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Ghana</option>
                    <option>Germany</option>
                    <option>Nigeria</option>
                    <option>Kenya</option>
                    <option>UAE / Middle East</option>
                    <option>Other Country</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    API Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pregabalin, Tapentadol..."
                    value={apiQuoteForm.apiName}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, apiName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Quantity *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 500 Kg, 1 MT..."
                    value={apiQuoteForm.quantity}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Monthly Requirement *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Regular monthly supply"
                    value={apiQuoteForm.monthlyRequirement}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, monthlyRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Destination Port
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Felixstowe, Tema..."
                    value={apiQuoteForm.destinationPort}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, destinationPort: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={apiQuoteForm.email}
                    onChange={(e) => setApiQuoteForm({ ...apiQuoteForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]"
                  />
                </div>

                <div className="sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#007A48] text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-[#005A35] transition-all shadow-md"
                  >
                    SUBMIT &rarr;
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE A PHARMACEUTICAL EXPORTER FROM INDIA? ================= */}
      <section className="py-20 bg-[#EBF5EF] text-[#07090E] border-b border-gray-200">
        <div className="container-vc text-center">
          
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0A2540] mb-3">
              Why Choose a Pharmaceutical Exporter from India?
            </h2>
            <h4 className="font-serif-luxury text-base font-semibold text-[#007A48] mb-4">
              Your Trusted Partner for Global Pharmaceutical Sourcing & Export Solutions
            </h4>
            <div className="w-16 h-[2px] bg-[#007A48] mx-auto mb-6" />
            <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed">
              VENCILLA PHARMACEUTICALS is committed to supporting pharmaceutical distributors, importers, wholesalers, and healthcare businesses with reliable sourcing solutions and professional export support. Our focus is on building long-term partnerships through quality, transparency, and customer-focused service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#007A48] text-white flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#0A2540] mb-2">
                  Global Market Reach
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Supporting pharmaceutical distributors and importers across international markets through reliable sourcing solutions, export expertise, and long-term business partnerships worldwide.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#007A48] text-white flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 2v7.31L4.75 18.55A2 2 0 0 0 6.5 21.5h11a2 2 0 0 0 1.75-2.95L14 9.31V2" />
                    <line x1="8.5" y1="2" x2="15.5" y2="2" />
                  </svg>
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#0A2540] mb-2">
                  Comprehensive Product Portfolio
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Offering pharmaceutical formulations, APIs, nutraceuticals, and specialty healthcare products across multiple therapeutic categories to support varying market requirements.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#007A48] text-white flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 21V9l5 3V9l5 3v9" />
                    <path d="M6 12H3V9l3-4h12l3 4v3h-3" />
                  </svg>
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#0A2540] mb-2">
                  Reliable Manufacturing Network
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Collaborating with quality-focused manufacturing partners to provide consistent product availability, flexible production capabilities, and professional business support.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-left flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#007A48] text-white flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#0A2540] mb-2">
                  End-to-End Export Support
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Providing documentation assistance, packaging solutions, logistics coordination, and responsive customer service for smooth international supply operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATIONS ROW ================= */}
      <section className="py-12 bg-white text-[#07090E] border-b border-gray-200">
        <div className="container-vc text-center">
          <span className="eyebrow text-xs tracking-[0.25em] text-[#00A86B] font-bold block mb-6">
            OUR CERTIFICATIONS & ACCREDITATIONS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-[#F4F9F6] border-2 border-[#00A86B]/30 shadow-md flex items-center justify-center text-[#00A86B] font-serif-luxury font-bold text-[11px] group-hover:scale-110 transition-transform">
                  {cert.badge}
                </div>
                <span className="text-[10px] font-bold text-gray-700 tracking-wider uppercase mt-2">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HEALTHIER TOMORROW BANNER ================= */}
      <section className="py-16 bg-[#004B87] text-white">
        <div className="container-vc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mb-3">
                Let's Build a Healthier Tomorrow Together
              </h2>
              <p className="font-sans text-sm text-white/80 max-w-xl mb-8">
                Partner with Vencilla Pharmaceuticals for high-quality products, reliable service & global trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">Quick Response</h4>
                    <p className="text-[10px] text-white/70">Get response in 24h</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">Global Shipping</h4>
                    <p className="text-[10px] text-white/70">Worldwide delivery</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">Dedicated Support</h4>
                    <p className="text-[10px] text-white/70">Always here to help</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white text-[#07090E] p-6 rounded-2xl shadow-2xl border border-white text-left">
                <h3 className="font-serif-luxury text-lg font-bold text-[#0A2540] mb-1">
                  Looking for Any Product?
                </h3>
                <p className="text-xs text-gray-600 mb-5">Send us your requirement.</p>

                <div className="space-y-3">
                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className="w-full py-3 bg-[#00A86B] text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-[#00875A] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    SEND INQUIRY &rarr;
                  </button>

                  <a
                    href="https://wa.me/917622009300?text=Hi%20Vencilla%20Pharma%20Team%2C%20I%20would%20like%20to%20inquire%20about%20pharmaceutical%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white border border-[#00A86B] text-[#00A86B] font-bold text-xs tracking-wider uppercase rounded hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981z" />
                    </svg>
                    CHAT ON WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INQUIRY MODAL ================= */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white text-[#07090E] rounded-2xl max-w-lg w-full p-8 relative border border-[#00A86B] shadow-2xl text-left">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-lg"
            >
              ✕
            </button>

            <span className="text-[10px] font-bold text-[#00A86B] uppercase tracking-widest block mb-1">
              VENCILLA PHARMACEUTICALS INQUIRY
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0A2540] mb-2">
              {selectedProduct ? `Inquire: ${selectedProduct.name}` : 'Request Pharma Product Catalogue'}
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Fill out your details to receive full specifications, pricing, and sample availability.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your pharma inquiry has been submitted successfully.');
                setInquiryModalOpen(false);
              }}
              className="space-y-4 font-sans"
            >
              <div>
                <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">Full Name</label>
                <input required type="text" placeholder="Dr. / Mr. / Ms. Name" className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">Company / Organization Email</label>
                <input required type="email" placeholder="contact@hospital.com" className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]" />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 uppercase block mb-1">Requirement / Quantity</label>
                <textarea rows="3" placeholder="Specify dosage, quantity, target market..." className="w-full px-4 py-2.5 rounded bg-gray-50 border border-gray-300 text-xs focus:outline-none focus:border-[#00A86B]" />
              </div>

              <button type="submit" className="w-full py-3 bg-[#00A86B] text-white font-bold text-xs tracking-wider uppercase rounded hover:bg-[#00875A] transition-all shadow-md">
                SUBMIT INQUIRY NOW &rarr;
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
