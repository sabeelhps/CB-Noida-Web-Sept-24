import express from 'express';
import catchAsync from '../../core/catchAsync';
import reviewController from '../../controllers/reviewController';

const router = express.Router();

router.post('/:productId/reviews', catchAsync(reviewController.createReview));

export default router;
