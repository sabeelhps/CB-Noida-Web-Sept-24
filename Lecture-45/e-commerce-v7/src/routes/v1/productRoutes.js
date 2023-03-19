import express from 'express';
import catchAsync from '../../core/catchAsync';
import productController from '../../controllers/productController';
import isLoggedIn, { isSeller } from '../../middleware/authMiddleware';
import { validateProduct } from '../../validations/validator';

const router = express.Router();

// api/v1/products
router.get('/', catchAsync(productController.getAllProduct));

router.get('/new', isLoggedIn, catchAsync(productController.displayFormForNewProduct));

router.post('/', isLoggedIn, validateProduct, isSeller, catchAsync(productController.createProduct));

router.get('/:id', catchAsync(productController.showProduct));

router.get('/:id/edit', isLoggedIn, catchAsync(productController.showEditForm));

router.patch('/:id', isLoggedIn, catchAsync(productController.updateProduct));

router.delete('/:id', isLoggedIn, catchAsync(productController.deleteProduct));

// Above routes can be written as below also----------------------
// router.route('/')
//     .get(catchAsync(productController.getAllProduct))
//     .post(catchAsync(productController.createProduct));

// router.route('/:id')
//     .get(catchAsync(productController.showProduct))
//     .patch(catchAsync(productController.updateProduct))
//     .delete(catchAsync(productController.deleteProduct));

export default router;
