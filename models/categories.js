import mongoose from 'mongoose';



const categorySchema = new mongoose.Schema({
  product_name: String,
  description:String,
  price: Number,
  category: String,
});



const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;