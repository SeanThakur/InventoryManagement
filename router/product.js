import express from 'express';
const router = express.Router();
import Product from '../controllers/product.controller.js'

router.get('/', Product.AllProduct);
router.post('/add', Product.AddProduct);

export default router;