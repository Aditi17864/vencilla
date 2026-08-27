import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] opacity-20 pointer-events-none" />
      <div className="container-vc relative section grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <span className="eyebrow !text-teal">Active Pharmaceutical Ingredients</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-white">
            Precision-manufactured APIs, trusted across regulated markets.
          </h1>
          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            Vencilla supplies WHO-GMP certified Active Pharmaceutical Ingredients to
            manufacturers, distributors, and procurement teams in over 40 countries —
            backed by full regulatory documentation and consistent batch-to-batch quality.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary !bg-teal hover:!bg-white hover:!text-ink">
              Explore Products
            </Link>
            <Link to="/request-a-quote" className="btn-secondary !border-white/40 !text-white hover:!bg-white hover:!text-ink">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center fade-up" style={{ animationDelay: '0.15s' }}>
          <MoleculeGraphic />
        </div>
      </div>
    </section>
  );
}

function MoleculeGraphic() {
  return (
    <svg viewBox="0 0 420 420" className="w-full max-w-md">
      <g stroke="#0E7C86" strokeWidth="1.5" opacity="0.9">
        <line x1="90" y1="120" x2="210" y2="80" />
        <line x1="210" y1="80" x2="330" y2="130" />
        <line x1="210" y1="80" x2="210" y2="200" />
        <line x1="210" y1="200" x2="110" y2="260" />
        <line x1="210" y1="200" x2="300" y2="270" />
        <line x1="300" y1="270" x2="300" y2="360" />
        <line x1="110" y1="260" x2="80" y2="340" />
      </g>
      <g fill="#0E7C86">
        <circle cx="90" cy="120" r="6" />
        <circle cx="330" cy="130" r="6" />
        <circle cx="110" cy="260" r="6" />
        <circle cx="80" cy="340" r="6" />
      </g>
      <g fill="#C9A24B">
        <circle cx="210" cy="80" r="8" />
        <circle cx="210" cy="200" r="8" />
        <circle cx="300" cy="270" r="8" />
      </g>
      <circle cx="300" cy="360" r="6" fill="#0E7C86" />
      <circle cx="210" cy="200" r="60" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
      <circle cx="210" cy="200" r="120" fill="none" stroke="#ffffff" strokeOpacity="0.06" />
    </svg>
  );
}
