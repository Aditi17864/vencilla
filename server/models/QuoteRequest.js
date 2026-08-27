import mongoose from 'mongoose';

const quoteRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    product: { type: String, required: true },
    quantity: String,
    message: String,
    documentPath: String,
  },
  { timestamps: true }
);

export default mongoose.model('QuoteRequest', quoteRequestSchema);
