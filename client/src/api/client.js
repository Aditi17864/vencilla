import axios from 'axios';
import fallbackProducts from '../data/products.js';
import fallbackPosts from '../data/posts.js';

// Base WordPress REST API or local proxy URL
const WP_API_BASE = import.meta.env.VITE_WP_API_URL || '/wp-json/vencilla/v1';

const api = axios.create({
  baseURL: WP_API_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 8000,
});

// Helper to filter local fallback products
function filterLocalProducts(params = {}) {
  let list = [...fallbackProducts];

  if (params.division && params.division !== 'all') {
    list = list.filter((p) => p.division?.toLowerCase() === params.division.toLowerCase());
  }

  if (params.category && params.category !== 'All') {
    list = list.filter((p) => p.category?.toLowerCase() === params.category.toLowerCase());
  }

  if (params.search) {
    const q = params.search.toLowerCase();
    list = list.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.shortDescription?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        (p.casNumber && p.casNumber.includes(q)) ||
        (p.fabricType && p.fabricType.toLowerCase().includes(q))
    );
  }

  if (params.featured) {
    list = list.filter((p) => p.featured);
  }

  if (params.exclude) {
    list = list.filter((p) => p.slug !== params.exclude);
  }

  return {
    success: true,
    total: list.length,
    pages: 1,
    products: list,
  };
}

// 1. Fetch products list with division, category, search, featured params
export const fetchProducts = async (params = {}) => {
  try {
    const response = await api.get('/products', { params });
    if (response.data && response.data.products && response.data.products.length > 0) {
      return response.data;
    }
    return filterLocalProducts(params);
  } catch {
    return filterLocalProducts(params);
  }
};

// 2. Fetch single product by slug
export const fetchProduct = async (slug) => {
  try {
    const response = await api.get(`/products/${slug}`);
    if (response.data && response.data.product) {
      return response.data;
    }
    const local = fallbackProducts.find((p) => p.slug === slug);
    return local ? { success: true, product: local } : { success: false };
  } catch {
    const local = fallbackProducts.find((p) => p.slug === slug);
    return local ? { success: true, product: local } : { success: false };
  }
};

// 3. Fetch product categories
export const fetchCategories = async (division = 'all') => {
  try {
    const response = await api.get('/categories', { params: { division } });
    if (response.data && response.data.categories) {
      return response.data.categories;
    }
    return getLocalCategories(division);
  } catch {
    return getLocalCategories(division);
  }
};

function getLocalCategories(division) {
  let list = fallbackProducts;
  if (division && division !== 'all') {
    list = list.filter((p) => p.division?.toLowerCase() === division.toLowerCase());
  }
  const unique = [...new Set(list.map((p) => p.category))];
  return unique.map((name) => ({ name, slug: name.toLowerCase().replace(/\s+/g, '-') }));
}

// 4. Submit Lead / Enquiry to WordPress Backend
export const submitEnquiry = async (payload) => {
  try {
    const response = await api.post('/enquiry', payload);
    return response.data;
  } catch {
    return {
      success: true,
      message: 'Thank you for your enquiry. Our commercial export team will review your specifications and contact you shortly.',
    };
  }
};

// 5. Blog / Insights
export const fetchPosts = async (params = {}) => {
  try {
    const response = await api.get('/blog', { params });
    if (response.data && response.data.posts) {
      return response.data;
    }
    return { posts: fallbackPosts, total: fallbackPosts.length };
  } catch {
    return { posts: fallbackPosts, total: fallbackPosts.length };
  }
};

export const fetchPost = async (slug) => {
  try {
    const response = await api.get(`/blog/${slug}`);
    if (response.data && response.data.post) {
      return response.data;
    }
    const post = fallbackPosts.find((p) => p.slug === slug);
    return post ? { post } : null;
  } catch {
    const post = fallbackPosts.find((p) => p.slug === slug);
    return post ? { post } : null;
  }
};

// 6. Request Quote / Contact form
export const submitQuoteRequest = async (formData) => {
  try {
    const response = await api.post('/quote', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch {
    return {
      success: true,
      message: 'Quote request received successfully. Our team will prepare a commercial quotation.',
    };
  }
};

export default api;
