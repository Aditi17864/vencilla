import CTASection from '../components/CTASection.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Earth3D from '../components/Earth3D.jsx';

const regions = [
  { name: 'South &amp; Southeast Asia', countries: 'India, Vietnam, Philippines, Indonesia, Bangladesh' },
  { name: 'Middle East &amp; North Africa', countries: 'UAE, Saudi Arabia, Egypt, Morocco' },
  { name: 'Sub-Saharan Africa', countries: 'Nigeria, Kenya, Ghana, Tanzania' },
  { name: 'Latin America', countries: 'Brazil, Colombia, Peru, Mexico' },
  { name: 'CIS Region', countries: 'Uzbekistan, Kazakhstan, Georgia' },
  { name: 'Europe (Semi-Regulated)', countries: 'Ukraine, Serbia, Bosnia' },
];

export default function GlobalPresence() {
  return (
    <>
      <section className="section bg-ink text-white">
        <div className="container-vc max-w-3xl">
          <span className="eyebrow !text-teal">Global Presence</span>
          <h1 className="mt-4 text-4xl md:text-5xl text-white">
            Export corridors built for reliable, on-time delivery.
          </h1>
          <p className="mt-6 text-white/70 leading-relaxed text-lg">
            Vencilla ships from Nhava Sheva (JNPT) and Mundra ports to distributors and
            manufacturers across 40+ countries, with dedicated documentation support for
            each destination market's import requirements.
          </p>
        </div>
      </section>

      <section className="section bg-[#07090E] text-white">
        <div className="container-vc">
          <div className="mb-16">
            <Earth3D height="580px" />
          </div>

          <SectionHeading eyebrow="Regions Served" title="Active supply relationships across six regions" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r) => (
              <div key={r.name} className="border-t border-ink pt-4">
                <h3 className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: r.name }} />
                <p className="text-sm text-slate">{r.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-line">
        <div className="container-vc grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg mb-2">Export Documentation</h3>
            <p className="text-sm text-slate leading-relaxed">Country-specific COA, legalisation, and free-sale certificates prepared per shipment.</p>
          </div>
          <div>
            <h3 className="text-lg mb-2">Logistics Partners</h3>
            <p className="text-sm text-slate leading-relaxed">Established freight-forwarding relationships for both FCL and LCL API shipments.</p>
          </div>
          <div>
            <h3 className="text-lg mb-2">Regulatory Support</h3>
            <p className="text-sm text-slate leading-relaxed">Assistance with dossier submission requirements for destination-market registration.</p>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Export Enquiry" title="Looking to import from Vencilla?" />
    </>
  );
}

function WorldMap() {
  return (
    <svg viewBox="0 0 500 240" className="w-full">
      {Array.from({ length: 11 }).map((_, row) =>
        Array.from({ length: 25 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="1.6" fill="#DDE3E1" />
        ))
      )}
      {[
        [140, 90], [110, 130], [250, 70], [270, 130], [340, 150], [400, 110], [430, 170], [190, 180],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="#0E7C86" opacity="0.15" />
          <circle cx={cx} cy={cy} r="4.5" fill="#0E7C86" />
        </g>
      ))}
      <circle cx="120" cy="100" r="7" fill="#C9A24B" />
    </svg>
  );
}
