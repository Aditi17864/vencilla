import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import EnquiryModal from '../components/EnquiryModal.jsx';
import { fetchProduct, fetchProducts } from '../api/client.js';
import fallbackProducts from '../data/products.js';
import luxuryFabricDrape from '../assets/textures/luxury_fabric_drape.jpg';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(() => fallbackProducts.find((p) => p.slug === slug));
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProduct(slug)
      .then((data) => {
        if (data?.product) {
          setProduct(data.product);
        } else {
          const local = fallbackProducts.find((p) => p.slug === slug);
          if (local) setProduct(local);
        }
      })
      .catch(() => {
        const local = fallbackProducts.find((p) => p.slug === slug);
        if (local) setProduct(local);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // Fetch related products in the same division
  useEffect(() => {
    if (!product) return;
    fetchProducts({ division: product.division, exclude: product.slug })
      .then((data) => {
        if (data?.products) {
          setRelated(data.products.slice(0, 3));
        }
      })
      .catch(() => {
        const rel = fallbackProducts.filter(
          (p) => p.division === product.division && p.slug !== product.slug
        );
        setRelated(rel.slice(0, 3));
      });
  }, [product]);

  if (!product && !loading) {
    return (
      <div className="min-h-screen bg-[#07090E] text-white pt-32 pb-20 text-center container-vc">
        <h1 className="font-serif-luxury text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
          The requested product may have been renamed or archived in the WordPress catalogue.
        </p>
        <Link to="/products" className="btn-primary">
          Back to Catalogue &rarr;
        </Link>
      </div>
    );
  }

  const isTextiles = product?.division === 'textiles';

  return (
    <div className="bg-[#07090E] text-white min-h-screen pt-20">
      
      {/* ================= BREADCRUMB & HEADER BANNER ================= */}
      <section
        className={`section border-b py-12 text-left ${
          isTextiles
            ? 'bg-gradient-to-r from-[#07090E] via-[#141008] to-[#07090E] border-[#C9A24B]/30'
            : 'bg-gradient-to-r from-[#07090E] via-[#061A2B] to-[#07090E] border-[#00BCD4]/30'
        }`}
      >
        <div className="container-vc">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/60 font-mono mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <Link
              to={isTextiles ? '/textiles' : '/pharmaceuticals'}
              className="hover:text-white transition-colors"
            >
              {isTextiles ? 'Textiles' : 'Pharmaceuticals'}
            </Link>
            <span>/</span>
            <span className={isTextiles ? 'text-[#C9A24B]' : 'text-[#00BCD4]'}>
              {product?.name}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                isTextiles
                  ? 'bg-[#C9A24B]/20 text-[#C9A24B] border border-[#C9A24B]/40'
                  : 'bg-[#00BCD4]/20 text-[#00E5FF] border border-[#00BCD4]/40'
              }`}
            >
              {product?.category || (isTextiles ? 'Textiles Collection' : 'Pharmaceutical API')}
            </span>

            {product?.regulatoryStatus && (
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                {product.regulatoryStatus}
              </span>
            )}
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            {product?.name}
          </h1>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS GRID ================= */}
      <section className="section py-16">
        <div className="container-vc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Left Column: Product Photography & Quick Specs (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/15 p-2 bg-[#0A0E17]">
                <img
                  src={product?.image || product?.imageUrl || (isTextiles ? luxuryFabricDrape : 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80')}
                  alt={product?.name}
                  className="w-full h-80 sm:h-96 object-cover rounded-xl filter brightness-100 contrast-105"
                />
              </div>

              {/* Quick Spec Highlights */}
              <div className="p-6 rounded-xl glass-card border border-white/10 space-y-3">
                <h4 className="text-xs font-mono tracking-widest uppercase text-white/60 font-bold mb-2">
                  KEY EXPORT ATTRIBUTES
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {isTextiles ? (
                    <>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/50 block font-mono">FABRIC TYPE</span>
                        <strong className="text-white">{product?.fabricType || 'Premium Woven'}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/50 block font-mono">COMPOSITION</span>
                        <strong className="text-white">{product?.composition || '100% Cotton'}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/50 block font-mono">WEIGHT</span>
                        <strong className="text-white">{product?.gsm || 'Standard GSM'}</strong>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/50 block font-mono">MINIMUM ORDER</span>
                        <strong className="text-[#C9A24B]">{product?.moq || 'Contact Sales'}</strong>
                      </div>
                    </>
                  ) : (
                    <>
                      {product?.casNumber && (
                        <div className="p-2.5 rounded bg-white/5 border border-white/10">
                          <span className="text-[10px] text-white/50 block font-mono">CAS NUMBER</span>
                          <strong className="text-[#00E5FF]">{product.casNumber}</strong>
                        </div>
                      )}
                      {product?.molecularFormula && (
                        <div className="p-2.5 rounded bg-white/5 border border-white/10">
                          <span className="text-[10px] text-white/50 block font-mono">FORMULA</span>
                          <strong className="text-white">{product.molecularFormula}</strong>
                        </div>
                      )}
                      {product?.grade && (
                        <div className="p-2.5 rounded bg-white/5 border border-white/10">
                          <span className="text-[10px] text-white/50 block font-mono">GRADE</span>
                          <strong className="text-white">{product.grade}</strong>
                        </div>
                      )}
                      {product?.moq && (
                        <div className="p-2.5 rounded bg-white/5 border border-white/10">
                          <span className="text-[10px] text-white/50 block font-mono">EXPORT MOQ</span>
                          <strong className="text-[#00BCD4]">{product.moq}</strong>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="w-full py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#C9A24B] text-[#07090E] hover:bg-[#E5C26B] transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    REQUEST PRODUCT SPECIFICATION &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Detailed Dossiers (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Product Overview */}
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mb-3">
                  Product Overview
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                  {product?.detailedDescription || product?.shortDescription || product?.overview}
                </p>
                {product?.certifications && (
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                    <strong className="text-white">Certifications on File:</strong> {product.certifications}
                  </div>
                )}
              </div>

              {/* Technical Specifications Matrix */}
              {product?.specifications && product.specifications.length > 0 && (
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
                    Technical Specifications
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-white/15 divide-y divide-white/10 bg-[#0A0E17]/60">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center px-5 py-3 text-xs">
                        <span className="text-white/60 font-mono">{spec.label}</span>
                        <span className="font-semibold text-white text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications & Use Cases */}
              {product?.applications && product.applications.length > 0 && (
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
                    {isTextiles ? 'Recommended Applications' : 'Therapeutic Indications'}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {product.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${isTextiles ? 'bg-[#C9A24B]' : 'bg-[#00BCD4]'}`} />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Export Packaging & Documentation */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                {product?.packaging && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-white/60 font-bold mb-2">
                      Standard Export Packaging
                    </h4>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {(Array.isArray(product.packaging) ? product.packaging : [product.packaging]).map((pkg, i) => (
                        <li key={i}>&bull; {pkg}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product?.documentation && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-white/60 font-bold mb-2">
                      Available Regulatory Documentation
                    </h4>
                    <ul className="space-y-1.5 text-xs text-white/70">
                      {(Array.isArray(product.documentation) ? product.documentation : [product.documentation]).map((doc, i) => (
                        <li key={i}>&bull; {doc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Action Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0C121D] to-[#07090E] border border-[#C9A24B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-white mb-1">
                    Ready to order or require custom testing?
                  </h4>
                  <p className="text-xs text-white/60 font-sans">
                    Contact our commercial export department for customized batch packaging and Certificate of Analysis.
                  </p>
                </div>

                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-6 py-3 rounded text-xs font-bold tracking-wider uppercase bg-[#C9A24B] text-[#07090E] hover:bg-[#E5C26B] transition-all whitespace-nowrap shadow-md"
                >
                  ENQUIRE NOW &rarr;
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      {related.length > 0 && (
        <section className="section py-16 bg-[#0A0E17] border-t border-white/10">
          <div className="container-vc text-left">
            <span className="eyebrow text-[#C9A24B] font-bold tracking-widest text-xs mb-2 block">
              COMPLEMENTARY PRODUCTS
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-white mb-8">
              Related {isTextiles ? 'Textiles' : 'Pharmaceutical'} Formulations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug || p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        product={product}
      />
    </div>
  );
}
