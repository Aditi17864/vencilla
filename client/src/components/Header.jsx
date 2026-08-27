import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import gsap from 'gsap';
import logoImg from '../assets/logo-transparent.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/textiles', label: 'Textiles' },
  { to: '/pharmaceuticals', label: 'Pharmaceuticals' },
  { to: '/about', label: 'About Us' },
  { to: '/quality', label: 'Manufacturing' },
  { to: '/quality', label: 'Quality' },
  { to: '/global-presence', label: 'Global Markets' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(7, 9, 14, 0.92)'
          : 'linear-gradient(to bottom, rgba(7, 9, 14, 0.85), rgba(7, 9, 14, 0))',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(201, 162, 75, 0.25)'
          : '1px solid transparent',
      }}
    >
      <div className="container-vc flex h-20 items-center justify-between">
        {/* Brand Logo matching Image 1 */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 flex items-center justify-center relative">
            <img 
              src={logoImg} 
              alt="Vencilla Emblem" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(201,162,75,0.4)]"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="font-serif-luxury text-xl tracking-[0.18em] text-white font-bold"
              style={{ lineHeight: 1.1 }}
            >
              VENCILLA
            </span>
            <span
              className="text-[9px] tracking-[0.28em] uppercase text-[#C9A24B] font-semibold"
              style={{ lineHeight: 1 }}
            >
              GLOBAL EXCELLENCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l, i) => (
            <NavLink
              key={`${l.to}-${i}`}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-[13px] font-sans font-medium tracking-wider uppercase transition-colors duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#C9A24B] font-semibold'
                    : 'text-white/80 hover:text-[#C9A24B]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A24B] shadow-[0_0_8px_#C9A24B]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Request Quote Button */}
        <div className="hidden xl:block">
          <Link
            to="/request-a-quote"
            className="btn-primary"
            style={{ fontSize: '0.75rem', padding: '0.65rem 1.4rem' }}
          >
            REQUEST QUOTE &rarr;
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle menu"
          className="xl:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block h-[2px] w-6 bg-[#C9A24B] transition-all duration-300"
            style={{
              transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[2px] w-6 bg-[#C9A24B] transition-all duration-300"
            style={{
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-[2px] w-6 bg-[#C9A24B] transition-all duration-300"
            style={{
              transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="xl:hidden fixed inset-0 top-20 z-40 bg-[#07090E]/98 backdrop-blur-xl"
        >
          <div className="container-vc flex flex-col py-8">
            {links.map((l, i) => (
              <NavLink
                key={`${l.to}-${i}`}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className="py-3.5 text-lg font-serif-luxury text-white/90 hover:text-[#C9A24B] transition-colors border-b border-gold/10"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/request-a-quote"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full text-center"
            >
              REQUEST QUOTE &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

