import CTASection from '../components/CTASection.jsx';

const values = [
  { title: 'Integrity', desc: 'We document and disclose exactly what we manufacture — no shortcuts on data or compliance.' },
  { title: 'Consistency', desc: 'Validated processes so every batch performs the same in your formulation, every time.' },
  { title: 'Partnership', desc: 'Long-term supply relationships built on responsiveness and technical transparency.' },
  { title: 'Continuous Improvement', desc: 'Ongoing investment in process validation, capacity, and analytical capability.' },
];

const featureIcons = [
  {
    label: 'Dedicated Manufacturing Blocks',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2" />
        <line x1="2" y1="13" x2="22" y2="13" />
      </svg>
    ),
  },
  {
    label: 'Regulatory Excellence',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: 'Global Export Logistics',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'CEP & DMF Documentation',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* ===== HERO — full-width split: left text / right image ===== */}
      <section className="relative bg-[#07090E] text-white overflow-hidden min-h-[440px] flex items-center">
        {/* Right image panel */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
            alt="Vencilla Manufacturing Facility"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-[#07090E]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/50 via-transparent to-[#07090E]/60" />
        </div>

        <div className="container-vc relative z-10 py-20 lg:py-28">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#C9A24B]" />
              <span className="text-[#C9A24B] text-xs font-bold tracking-[0.25em] uppercase font-sans">
                About Vencilla
              </span>
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
              Manufacturing the ingredients regulated markets depend on.
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-lg">
              Vencilla is a pharmaceutical API manufacturer built to serve the exacting
              standards of regulated and semi-regulated markets — combining scientific
              rigour with dependable export logistics.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <section className="bg-[#F9F6F0] py-20 border-b border-gray-200">
        <div className="container-vc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left — text + feature icons */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#C9A24B]" />
                <span className="text-[#C9A24B] text-xs font-bold tracking-[0.25em] uppercase font-sans">
                  Company Overview
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#07090E] leading-snug mb-3">
                A focused API manufacturer, not a generalist trading house
              </h2>
              <div className="w-10 h-[3px] bg-[#C9A24B] rounded-full mb-6" />
              <p className="text-sm text-[#4A5A63] leading-relaxed mb-10">
                Vencilla operates dedicated manufacturing blocks for CNS, pain management,
                cardiovascular, and anti-infective molecules, supported by an in-house
                analytical and regulatory affairs function that prepares CEP and DMF
                documentation for every commercial product.
              </p>

              {/* 2×2 Feature icon grid */}
              <div className="grid grid-cols-2 gap-6">
                {featureIcons.map((f) => (
                  <div key={f.label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#07090E] text-[#C9A24B] flex items-center justify-center shadow-md">
                      {f.svg}
                    </div>
                    <span className="text-[11px] font-bold text-[#07090E] leading-tight">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Vision card, Mission card, then infra card spanning full width */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Vision Card — dark */}
                <div className="bg-[#07090E] rounded-2xl p-8 border border-[#C9A24B]/25 shadow-xl flex flex-col gap-4 min-h-[220px]">
                  <div className="w-11 h-11 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/35 flex items-center justify-center text-[#C9A24B] flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.4" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C9A24B] text-xs font-bold tracking-widest uppercase">Vision</span>
                      <div className="flex-1 h-[1px] bg-[#C9A24B]/25" />
                    </div>
                    <p className="text-sm text-white/65 leading-relaxed">
                      To be a trusted long-term API supply partner for pharmaceutical
                      manufacturers across regulated and emerging markets.
                    </p>
                  </div>
                  {/* Decorative globe */}
                  <div className="mt-auto opacity-20 pt-2">
                    <svg width="72" height="36" viewBox="0 0 72 36" fill="none">
                      <ellipse cx="36" cy="18" rx="34" ry="16" stroke="#C9A24B" strokeWidth="0.7"/>
                      <ellipse cx="36" cy="18" rx="17" ry="16" stroke="#C9A24B" strokeWidth="0.7"/>
                      <line x1="2" y1="18" x2="70" y2="18" stroke="#C9A24B" strokeWidth="0.7"/>
                    </svg>
                  </div>
                </div>

                {/* Mission Card — warm gold-tint */}
                <div className="bg-[#FBF4E3] rounded-2xl p-8 border border-[#C9A24B]/35 shadow-xl flex flex-col gap-4 min-h-[220px]">
                  <div className="w-11 h-11 rounded-full bg-[#C9A24B]/20 border border-[#C9A24B]/45 flex items-center justify-center text-[#C9A24B] flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="2" x2="12" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C9A24B] text-xs font-bold tracking-widest uppercase">Mission</span>
                      <div className="flex-1 h-[1px] bg-[#C9A24B]/35" />
                    </div>
                    <p className="text-sm text-[#4A5A63] leading-relaxed">
                      To manufacture and export active pharmaceutical ingredients that
                      consistently meet pharmacopoeial specification, backed by transparent
                      documentation.
                    </p>
                  </div>
                  {/* Decorative dot grid */}
                  <div className="mt-auto opacity-25 pt-2">
                    <div className="grid grid-cols-8 gap-1.5">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Infrastructure + Global Business — combined card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-1 h-10 bg-[#C9A24B] rounded-full mt-1 flex-shrink-0" />
                      <h3 className="font-serif-luxury text-lg font-bold text-[#07090E] leading-snug">
                        Infrastructure & Expertise
                      </h3>
                    </div>
                    <p className="text-sm text-[#4A5A63] leading-relaxed pl-4">
                      Deep process chemistry expertise across multiple therapeutic
                      categories, backed by pilot-scale and commercial-scale manufacturing
                      blocks and a fully equipped QC laboratory.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-1 h-10 bg-[#C9A24B] rounded-full mt-1 flex-shrink-0" />
                      <h3 className="font-serif-luxury text-lg font-bold text-[#07090E] leading-snug">
                        Global Business Focus
                      </h3>
                    </div>
                    <p className="text-sm text-[#4A5A63] leading-relaxed pl-4">
                      From regulatory dossier preparation to export documentation and
                      logistics, structured to support buyers navigating CDSCO, EDQM,
                      and regional regulatory frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-[#07090E] border-y border-[#C9A24B]/20 py-10">
        <div className="container-vc">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C9A24B]/20">
            {[
              { num: '48+', label: 'Countries Exported To' },
              { num: '1000+', label: 'Products in Portfolio' },
              { num: 'WHO-GMP', label: 'Certified Facilities' },
              { num: '100%', label: 'Quality Assured' },
            ].map((s) => (
              <div key={s.label} className="text-center px-4 py-2">
                <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C9A24B]">{s.num}</div>
                <div className="text-[11px] font-semibold tracking-wider text-white/55 uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-vc">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#C9A24B]" />
              <span className="text-[#C9A24B] text-xs font-bold tracking-[0.25em] uppercase">Our Values</span>
              <div className="w-8 h-[2px] bg-[#C9A24B]" />
            </div>
            <h2 className="font-serif-luxury text-3xl font-bold text-[#07090E]">
              What guides how we manufacture and how we work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-[#C9A24B] pt-6 group">
                <span className="font-mono text-xs text-[#C9A24B] font-bold">0{i + 1}</span>
                <h3 className="mt-3 font-serif-luxury text-lg font-bold text-[#07090E] group-hover:text-[#C9A24B] transition-colors">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-[#4A5A63] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Talk to Us" title="Want to know more about our manufacturing capability?" />
    </>
  );
}
