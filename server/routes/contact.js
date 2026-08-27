import { Router } from 'express';
import Enquiry from '../models/Enquiry.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { name, company, email, message } = req.body;
    if (!name || !company || !email || !message) {
      return res.status(400).json({ error: 'Name, company, email, and message are required.' });
    }
    const enquiry = await Enquiry.create(req.body);
    // In production: trigger a notification email to the sales/export team here.
    res.status(201).json({ success: true, enquiry });
  } catch (err) {
    next(err);
  }
});

export default router;
