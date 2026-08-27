import { Router } from 'express';
import Product from '../models/Product.js';

const router = Router();

// GET /api/products?category=&q=&featured=&exclude=&limit=
router.get('/', async (req, res, next) => {
  try {
    const { category, q, featured, exclude, limit } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;
    if (featured) filter.featured = featured === 'true';
    if (exclude) filter.slug = { $ne: exclude };
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: 'i' } },
        { shortDescription: { $regex: q, $options: 'i' } },
      ];
    }

    let query = Product.find(filter).sort({ createdAt: -1 });
    if (limit) query = query.limit(parseInt(limit, 10));

    const products = await query;
    res.json({ products });
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ product });
  } catch (err) {
    next(err);
  }
});

// POST /api/products  (admin/dashboard use — plug in auth middleware before production use)
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:slug
router.put('/:slug', async (req, res, next) => {
  try {
    const product = await Product.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ product });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:slug
router.delete('/:slug', async (req, res, next) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
