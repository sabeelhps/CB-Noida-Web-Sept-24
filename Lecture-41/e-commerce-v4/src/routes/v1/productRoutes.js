import express from 'express';
import catchAsync from '../../core/catchAsync';
import productController from '../../controllers/productController';

const router = express.Router();

// api/v1/products
router.get('/', catchAsync(productController.getAllProduct));

router.get('/new', catchAsync(productController.displayFormForNewProduct));

router.post('/', catchAsync(productController.createProduct));

router.get('/:id', catchAsync(productController.showProduct));

router.get('/:id/edit', catchAsync(productController.showEditForm));

router.patch('/:id', catchAsync(productController.updateProduct));

router.delete('/:id', catchAsync(productController.deleteProduct));

// Above routes can be written as below also----------------------
// router.route('/')
//     .get(catchAsync(productController.getAllProduct))
//     .post(catchAsync(productController.createProduct));

// router.route('/:id')
//     .get(catchAsync(productController.showProduct))
//     .patch(catchAsync(productController.updateProduct))
//     .delete(catchAsync(productController.deleteProduct));

export default router;
