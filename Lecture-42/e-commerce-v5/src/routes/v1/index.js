import express from 'express';
import productRoutes from './productRoutes';
import reviewRoutes from './reviewRoutes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/products', reviewRoutes);

export default router;
