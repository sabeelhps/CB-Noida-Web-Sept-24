import express from 'express';
import productRoutes from './productRoutes';

const router = express.Router();

router.use('/products', productRoutes);

export default router;
