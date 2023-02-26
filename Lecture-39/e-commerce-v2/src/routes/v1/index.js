import express from 'express';
import productRoutes from './productRoutes';

const router = express.Router();

router.use(productRoutes);

export default router;
