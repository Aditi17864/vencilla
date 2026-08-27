import CTASection from '../components/CTASection.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const pillars = [
  { title: 'Quality Standards', desc: 'Processes validated against ICH Q7 guidelines for API manufacture, with defined critical process parameters for every product.' },
  { title: 'Manufacturing Capability', desc: 'Dedicated reaction and isolation blocks with scale-up capacity from pilot to multi-tonne commercial batches.' },
  { title: 'Quality Control', desc: 'In-house QC laboratory equipped for HPLC, GC, and wet-chemistry testing across raw materials, in-process, and finished API.' },
  { title: 'Testing &amp; Stability', desc: 'Accelerated and long-term stability studies conducted per ICH Q1A guidelines to support shelf-life claims.' },
  { title: 'Documentation', desc: 'Batch manufacturing records, COAs, and validation reports maintained for full traceability on every lot.' },
  { title: 'Compliance', desc: 'Facilities audited to WHO-GMP standards, with CEP and DMF filings maintained for key regulated-market molecules.' },
];

const certifications = ['WHO-GMP', 'ISO 9001:2015', 'CEP (EDQM)', 'USDMF', 'ISO 14001:2015'];

export default function Quality() {
  return (
    <>
      <section className="section bg-ink text-white">
        <div className="container-vc max-w-3xl">
          <span className="eyebrow !text-teal">Quality &amp; Manufacturing</span>
          <h1 className="mt-4 text-4xl md:text-5xl text-white">
            Quality is built into the process, not inspected in afterward.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-vc grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="border border-line p-6">
              <h3 className="text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white border-y border-line">
        <div className="container-vc">
          <SectionHeading eyebrow="Certifications" title="Independently audited and certified" align="center" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <span key={c} className="coa-tag !text-sm !px-5 !py-2.5">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Documentation" title="Need a specific product's CEP or DMF status?" />
    </>
  );
}
