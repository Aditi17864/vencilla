import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model('BlogPost', blogPostSchema);
