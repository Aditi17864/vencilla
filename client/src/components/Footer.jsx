import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-col',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: '#050505' }}>
      {/* Gold gradient top border */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A24B, transparent)',
        }}
      />

      <div className="container-vc py-16 grid gap-12 md:grid-cols-4">
        {/* Brand Column */}
        <div className="footer-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold-gradient font-display text-3xl font-bold">V</span>
            <div>
              <span className="font-display text-xl tracking-[0.1em] text-white">VENCILLA</span>
              <br />
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold/50">
                Global Excellence
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/50 max-w-xs">
            A globally recognized leader in premium Textiles and Pharmaceuticals,
            delivering world-class products across 50+ countries with unwavering
            commitment to quality and innovation.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            {['LinkedIn', 'Twitter', 'Instagram'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-sans text-gold/60 transition-all duration-300 hover:text-gold hover:shadow-gold-sm"
                style={{
                  border: '1px solid rgba(201, 162, 75, 0.2)',
                  background: 'rgba(201, 162, 75, 0.03)',
                }}
                data-cursor-hover
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Textiles Column */}
        <div className="footer-col">
          <h4
            className="text-xs font-sans font-semibold tracking-[0.15em] uppercase mb-5"
            style={{ color: '#C9A24B' }}
          >
            Textiles
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ['African Wax Prints', '/products'],
              ['Uniform Fabrics', '/products'],
              ['Cotton Fabrics', '/products'],
              ['Embroidered Fabrics', '/products'],
              ['Scarves & Dupatta', '/products'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-white/50 hover:text-gold transition-colors duration-300"
                  data-cursor-hover
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pharma Column */}
        <div className="footer-col">
          <h4
            className="text-xs font-sans font-semibold tracking-[0.15em] uppercase mb-5"
            style={{ color: '#C9A24B' }}
          >
            Pharmaceuticals
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ['Product Catalogue', '/products'],
              ['Pregabalin API', '/products/pregabalin-api'],
              ['Zopiclone API', '/products/zopiclone-api'],
              ['Tapentadol API', '/products/tapentadol-api'],
              ['Quality Standards', '/quality'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-white/50 hover:text-gold transition-colors duration-300"
                  data-cursor-hover
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4
            className="text-xs font-sans font-semibold tracking-[0.15em] uppercase mb-5"
            style={{ color: '#C9A24B' }}
          >
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>export@vencilla.com</li>
            <li>+91 7622009300</li>
            <li>434/3b, Somakanji wadi, Khatodara, Surat. 395002</li>
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <Link
              to="/request-a-quote"
              className="btn-primary text-center"
              data-cursor-hover
              style={{ fontSize: '0.65rem', padding: '0.6rem 1rem' }}
            >
              Send Inquiry →
            </Link>
            <a
              href="https://wa.me/917622009300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
              data-cursor-hover
              style={{ fontSize: '0.65rem', padding: '0.6rem 1rem' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(201, 162, 75, 0.1)',
        }}
      >
        <div className="container-vc py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Vencilla Global Excellence. All rights reserved.</p>
          <p className="text-gold/40">
            WHO-GMP &middot; ISO 9001:2015 &middot; CEP &middot; OEKO-TEX
          </p>
        </div>
      </div>
    </footer>
  );
}
