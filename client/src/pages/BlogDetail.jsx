import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPost, fetchPosts } from '../api/client.js';
import fallbackPosts from '../data/posts.js';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => fallbackPosts.find((p) => p.slug === slug));
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetchPost(slug)
      .then((data) => data?.post && setPost(data.post))
      .catch(() => setPost(fallbackPosts.find((p) => p.slug === slug)));
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    fetchPosts({ category: post.category, exclude: post.slug, limit: 3 })
      .then((data) => setRelated(data?.posts || []))
      .catch(() => setRelated(fallbackPosts.filter((p) => p.category === post.category && p.slug !== post.slug)));
  }, [post]);

  if (!post) {
    return (
      <div className="container-vc section text-center">
        <h1 className="text-3xl mb-4">Article not found</h1>
        <Link to="/insights" className="btn-primary">Back to Insights</Link>
      </div>
    );
  }

  return (
    <>
      <section className="section pb-12 bg-ink text-white">
        <div className="container-vc max-w-3xl">
          <span className="eyebrow !text-teal">{post.category}</span>
          <h1 className="mt-4 text-3xl md:text-5xl text-white">{post.title}</h1>
          <span className="mt-5 block text-xs font-mono text-white/50">
            {new Date(post.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container-vc max-w-3xl">
          <p className="text-slate leading-relaxed text-lg">{post.content}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-white border-t border-line">
          <div className="container-vc">
            <h2 className="text-2xl mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/insights/${r.slug}`} className="border border-line p-6 hover:border-teal transition-colors">
                  <span className="eyebrow">{r.category}</span>
                  <h3 className="mt-3 text-lg leading-snug">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
