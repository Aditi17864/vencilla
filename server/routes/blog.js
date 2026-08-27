import { Router } from 'express';
import BlogPost from '../models/BlogPost.js';

const router = Router();

// GET /api/blog?category=&q=&exclude=&limit=
router.get('/', async (req, res, next) => {
  try {
    const { category, q, exclude, limit } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;
    if (exclude) filter.slug = { $ne: exclude };
    if (q) filter.title = { $regex: q, $options: 'i' };

    let query = BlogPost.find(filter).sort({ date: -1 });
    if (limit) query = query.limit(parseInt(limit, 10));

    const posts = await query;
    res.json({ posts });
  } catch (err) {
    next(err);
  }
});

// GET /api/blog/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ error: 'Article not found' });
    res.json({ post });
  } catch (err) {
    next(err);
  }
});

// POST /api/blog (admin/dashboard use)
router.post('/', async (req, res, next) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json({ post });
  } catch (err) {
    next(err);
  }
});

export default router;
