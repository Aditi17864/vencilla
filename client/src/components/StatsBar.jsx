import React from 'react';

const stats = [
  {
    number: '50+',
    label: 'COUNTRIES',
    sublabel: 'GLOBAL PRESENCE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07090E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    number: '2',
    label: 'STATE-OF-THE-ART',
    sublabel: 'MANUFACTURING UNITS',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07090E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18E" />
        <path d="M6 21V9l5 3V9l5 3v9" />
        <path d="M6 12H3V9l3-4h12l3 4v3h-3" />
      </svg>
    ),
  },
  {
    number: '1000+',
    label: 'SATISFIED',
    sublabel: 'GLOBAL CLIENTS',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07090E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '100+',
    label: 'QUALITY-CERTIFIED',
    sublabel: 'PRODUCTS',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07090E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    number: '20+',
    label: 'YEARS OF EXPORT',
    sublabel: 'EXCELLENCE',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#07090E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21h20" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.43 2.62 7" />
        <path d="M12 10V4M8 6l4-2 4 2" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <div className="w-full bg-[#F9F6F0] text-[#07090E] border-b border-[#C9A24B]/30 py-8 shadow-sm">
      <div className="container-vc">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#C9A24B]/20">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A24B]/15 flex items-center justify-center text-[#07090E]">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif-luxury text-3xl font-extrabold tracking-tight text-[#07090E] leading-none mb-1">
                  {item.number}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#07090E]/80 uppercase leading-tight">
                  {item.label}
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-[#C9A24B] uppercase leading-tight">
                  {item.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
