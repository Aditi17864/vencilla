import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api/client.js';
import fallbackPosts from '../data/posts.js';

export default function Blog() {
  const [posts, setPosts] = useState(fallbackPosts);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetchPosts()
      .then((data) => data?.posts?.length && setPosts(data.posts))
      .catch(() => {});
  }, []);

  const categories = useMemo(() => ['All', ...new Set(posts.map((p) => p.category))], [posts]);

  const filtered = posts.filter((p) => {
    const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <section className="section pb-12 bg-ink text-white">
        <div className="container-vc">
          <span className="eyebrow !text-teal">Insights</span>
          <h1 className="mt-4 text-4xl md:text-5xl text-white max-w-2xl">
            Regulatory, technical, and supply-chain perspectives from our team.
          </h1>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-vc py-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <input
            type="search"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-80 border border-line px-4 py-2.5 text-sm focus:outline-none focus:border-teal"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-xs tracking-wide uppercase border transition-colors ${
                  category === c ? 'bg-ink text-white border-ink' : 'border-line text-slate hover:border-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-vc grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/insights/${p.slug}`} className="border border-line bg-white p-6 hover:border-teal transition-colors flex flex-col">
              <span className="eyebrow">{p.category}</span>
              <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
              <p className="mt-3 text-sm text-slate leading-relaxed flex-1">{p.excerpt}</p>
              <span className="mt-5 text-xs font-mono text-slate">{new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
