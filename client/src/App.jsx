import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import TextilesDivision from './pages/TextilesDivision.jsx';
import PharmaDivision from './pages/PharmaDivision.jsx';
import Quality from './pages/Quality.jsx';
import GlobalPresence from './pages/GlobalPresence.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Contact from './pages/Contact.jsx';
import RequestQuote from './pages/RequestQuote.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen noise-overlay" style={{ background: '#0a0a0a' }}>
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/textiles" element={<TextilesDivision />} />
          <Route path="/textiles/:slug" element={<ProductDetail />} />
          <Route path="/pharmaceuticals" element={<PharmaDivision />} />
          <Route path="/pharmaceuticals/:slug" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/insights/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-a-quote" element={<RequestQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
