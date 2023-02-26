import express from 'express';
import catchAsync from '../../core/catchAsync';
import productController from '../../controllers/productController';

const router = express.Router();

// api/v1/products
router.get('/products',catchAsync(productController.getAllProduct));

export default router;
