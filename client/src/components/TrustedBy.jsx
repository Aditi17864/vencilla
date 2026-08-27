import React from 'react';

const clients = [
  { name: 'Apex Global Textiles', role: 'UK Import Partner' },
  { name: 'Medica Life Sciences', role: 'EU Pharma Distributor' },
  { name: 'Sovereign Weavers', role: 'Middle East Partner' },
  { name: 'CuraHealth International', role: 'LatAm Healthcare' },
  { name: 'Orient Mills Co.', role: 'Asian Trade Partner' },
  { name: 'Vanguard Biopharma', role: 'African Distribution' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#F9F6F0] text-[#07090E] border-b border-[#C9A24B]/20">
      <div className="container-vc text-center">
        {/* Section Heading matching Image 2 */}
        <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#07090E] tracking-tight mb-3">
          Trusted by Businesses Worldwide
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[1px] w-12 bg-[#C9A24B]" />
          <div className="w-2 h-2 rotate-45 bg-[#C9A24B]" />
          <div className="h-[1px] w-12 bg-[#C9A24B]" />
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white border border-[#C9A24B]/20 shadow-sm flex flex-col items-center justify-center text-center hover:border-[#C9A24B] hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#07090E]/5 text-[#C9A24B] flex items-center justify-center mb-2 font-serif-luxury font-bold text-lg group-hover:scale-110 transition-transform">
                {client.name.charAt(0)}
              </div>
              <span className="font-serif-luxury text-xs font-bold text-[#07090E] leading-tight mb-1">
                {client.name}
              </span>
              <span className="text-[9px] font-semibold text-[#07090E]/60 uppercase tracking-wider">
                {client.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
