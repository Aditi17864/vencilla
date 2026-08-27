import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import QuoteRequest from '../models/QuoteRequest.js';

const uploadDir = 'uploads/quote-documents';
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

const router = Router();

// POST /api/quote  (multipart/form-data)
router.post('/', upload.single('document'), async (req, res, next) => {
  try {
    const { name, company, email, phone, country, product, quantity, message } = req.body;
    if (!name || !company || !email || !phone || !country || !product) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    const quoteRequest = await QuoteRequest.create({
      name,
      company,
      email,
      phone,
      country,
      product,
      quantity,
      message,
      documentPath: req.file ? `/uploads/quote-documents/${req.file.filename}` : undefined,
    });
    // In production: trigger a notification email to the export team here.
    res.status(201).json({ success: true, quoteRequest });
  } catch (err) {
    next(err);
  }
});

export default router;
