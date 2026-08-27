import 'dotenv/config';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import BlogPost from '../models/BlogPost.js';
import { products, posts } from './seedData.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vencilla';

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB, seeding data...');

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products.`);

  await BlogPost.deleteMany({});
  await BlogPost.insertMany(posts);
  console.log(`Seeded ${posts.length} blog posts.`);

  await mongoose.disconnect();
  console.log('Done.');
}

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
