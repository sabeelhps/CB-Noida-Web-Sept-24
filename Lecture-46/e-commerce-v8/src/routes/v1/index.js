import express from 'express';
import productRoutes from './productRoutes';
import reviewRoutes from './reviewRoutes';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/products', reviewRoutes);
router.use('/auth', userRoutes);

export default router;
