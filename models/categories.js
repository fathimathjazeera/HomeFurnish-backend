import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  product_name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  timestamps: true,
});

const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;
