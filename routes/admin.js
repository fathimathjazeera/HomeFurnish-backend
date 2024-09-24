import express from 'express';
import {
  createProduct,
  getAllProducts,
  getAProduct,
  updateProduct,
  deleteAProduct,
} from '../controllers/admin.js';

const adminRoute = express.Router();

adminRoute.post('/create', createProduct);
adminRoute.get('/products', getAllProducts);
adminRoute.get('/product',getAProduct)
adminRoute.put('/update',updateProduct)
adminRoute.get('/delete',deleteAProduct)
export default adminRoute;
