import mongoose from 'mongoose';

const specSchema = new mongoose.Schema(
  { label: String, value: String },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: { type: String, required: true, index: true },
    casNumber: String,
    molecularFormula: String,
    shortDescription: { type: String, required: true },
    overview: String,
    applications: [String],
    specifications: [specSchema],
    packaging: [String],
    documentation: [String],
    regulatoryStatus: String,
    featured: { type: Boolean, default: false },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
