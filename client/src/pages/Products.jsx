import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { fetchProducts } from '../api/client.js';
import fallbackProducts from '../data/products.js';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDivision = searchParams.get('division') || 'all';

  const [products, setProducts] = useState(fallbackProducts);
  const [division, setDivision] = useState(initialDivision);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Sync division change with URL query parameter
  const handleDivisionChange = (div) => {
    setDivision(div);
    setCategory('All');
    if (div === 'all') {
      searchParams.delete('division');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ division: div });
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts({ division, search: query })
      .then((data) => {
        if (data?.products) {
          setProducts(data.products);
        }
      })
      .finally(() => setLoading(false));
  }, [division, query]);

  // Compute available categories for active division
  const availableCategories = useMemo(() => {
    let list = products;
    if (division !== 'all') {
      list = list.filter((p) => p.division?.toLowerCase() === division.toLowerCase());
    }
    const cats = ['All', ...new Set(list.map((p) => p.category).filter(Boolean))];
    return cats;
  }, [products, division]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    let list = products;
    if (division !== 'all') {
      list = list.filter((p) => p.division?.toLowerCase() === division.toLowerCase());
    }
    if (category !== 'All') {
      list = list.filter((p) => p.category === category);
    }
    return list;
  }, [products, division, category]);

  return (
    <div className="bg-[#07090E] text-white min-h-screen pt-20">
      
      {/* ================= HERO HEADER ================= */}
      <section className="section bg-gradient-to-r from-[#07090E] via-[#0C121D] to-[#07090E] border-b border-[#C9A24B]/20 py-16 text-left">
        <div className="container-vc">
          <span className="eyebrow text-[#C9A24B] font-bold tracking-[0.25em] mb-2 block">
            VENCILLA B2B PRODUCT CATALOGUE
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Textiles &amp; Pharmaceuticals Portfolio
          </h1>
          <p className="font-sans text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Browse our full export portfolio of high-grade fabrics, custom jacquards, active pharmaceutical ingredients (APIs), and sterile formulations.
          </p>

          {/* Division Filter Switcher */}
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => handleDivisionChange('all')}
              className={`px-5 py-2.5 rounded-lg text-xs font-serif-luxury font-bold tracking-wider uppercase transition-all ${
                division === 'all'
                  ? 'bg-white text-[#07090E] shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:text-white border border-white/15'
              }`}
            >
              ALL DIVISIONS ({fallbackProducts.length})
            </button>

            <button
              onClick={() => handleDivisionChange('textiles')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-serif-luxury font-bold tracking-wider uppercase transition-all ${
                division === 'textiles'
                  ? 'bg-[#C9A24B] text-[#07090E] shadow-lg scale-105'
                  : 'bg-[#C9A24B]/15 text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#07090E] border border-[#C9A24B]/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
              TEXTILES CATALOGUE
            </button>

            <button
              onClick={() => handleDivisionChange('pharmaceuticals')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-serif-luxury font-bold tracking-wider uppercase transition-all ${
                division === 'pharmaceuticals'
                  ? 'bg-[#00BCD4] text-[#07090E] shadow-lg scale-105'
                  : 'bg-[#00BCD4]/15 text-[#00E5FF] hover:bg-[#00BCD4] hover:text-[#07090E] border border-[#00BCD4]/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00BCD4]" />
              PHARMACEUTICALS &amp; APIS
            </button>
          </div>
        </div>
      </section>

      {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
      <section className="border-b border-white/10 bg-[#0C1018]/90 sticky top-20 z-30 backdrop-blur-md">
        <div className="container-vc py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          
          {/* Real-time Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="search"
              placeholder="Search by name, CAS, composition..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-md bg-[#07090E] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A24B]"
            />
            <svg
              className="absolute left-3 top-2.5 w-3.5 h-3.5 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 max-w-2xl">
            {availableCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded text-[11px] font-mono uppercase transition-all whitespace-nowrap ${
                  category === c
                    ? 'bg-[#C9A24B] text-[#07090E] font-bold shadow-sm'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="section py-16">
        <div className="container-vc">
          {loading ? (
            <div className="py-20 text-center text-white/60 font-mono text-sm">
              <span className="w-3 h-3 rounded-full bg-[#C9A24B] animate-ping inline-block mr-2" />
              Loading portfolio from WordPress database...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-20 text-center glass-card p-12 rounded-2xl max-w-lg mx-auto">
              <p className="text-sm text-white/70 mb-4">
                No products match your criteria "{query}".
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setCategory('All');
                  setDivision('all');
                }}
                className="btn-secondary text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug || product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
