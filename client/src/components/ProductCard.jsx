import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from './EnquiryModal.jsx';
import luxuryFabricDrape from '../assets/textures/luxury_fabric_drape.jpg';

export default function ProductCard({ product }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  if (!product) return null;

  const isTextiles = product.division === 'textiles';
  const detailUrl = isTextiles
    ? `/textiles/${product.slug}`
    : product.division === 'pharmaceuticals'
    ? `/pharmaceuticals/${product.slug}`
    : `/products/${product.slug}`;

  return (
    <>
      <div className="group relative flex flex-col justify-between rounded-xl overflow-hidden glass-card border border-white/10 hover:border-[#C9A24B]/50 transition-all duration-300 transform hover:-translate-y-1 bg-[#0A0E17]/80 shadow-xl text-left">
        
        {/* Top Product Image */}
        <div className="relative h-52 w-full overflow-hidden bg-[#060A12]">
          <img
            src={product.image || product.imageUrl || (isTextiles ? luxuryFabricDrape : 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80')}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-80" />

          {/* Division & Category Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span
              className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                isTextiles
                  ? 'bg-[#C9A24B]/90 text-[#07090E]'
                  : 'bg-[#00BCD4]/90 text-[#07090E]'
              }`}
            >
              {isTextiles ? 'TEXTILES' : 'PHARMA'}
            </span>

            {product.featured && (
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#FFD700] text-[#07090E]">
                ★ FEATURED
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-serif-luxury text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-[#F5E6AD] transition-colors">
              {product.name}
            </h3>

            <p className="font-sans text-xs text-white/70 leading-relaxed mb-4 line-clamp-2">
              {product.shortDescription || product.overview || 'International grade quality export formulation.'}
            </p>

            {/* Quick Spec Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] font-mono text-white/80">
              {isTextiles ? (
                <>
                  {product.composition && (
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                      {product.composition}
                    </span>
                  )}
                  {product.gsm && (
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                      {product.gsm}
                    </span>
                  )}
                  {product.moq && (
                    <span className="px-2 py-1 rounded bg-[#C9A24B]/10 border border-[#C9A24B]/30 text-[#C9A24B]">
                      MOQ: {product.moq}
                    </span>
                  )}
                </>
              ) : (
                <>
                  {product.casNumber && (
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[#00E5FF]">
                      CAS: {product.casNumber}
                    </span>
                  )}
                  {product.molecularFormula && (
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
                      {product.molecularFormula}
                    </span>
                  )}
                  {product.grade && (
                    <span className="px-2 py-1 rounded bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4]">
                      {product.grade}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Card Actions */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <Link
              to={detailUrl}
              className="text-xs font-semibold text-white/80 hover:text-[#C9A24B] transition-colors flex items-center gap-1"
            >
              Specifications &rarr;
            </Link>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded bg-white/10 hover:bg-[#C9A24B] hover:text-[#07090E] text-white transition-all"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        product={product}
      />
    </>
  );
}
