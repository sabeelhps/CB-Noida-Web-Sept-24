import express from 'express';
import catchAsync from '../../core/catchAsync';
import reviewController from '../../controllers/reviewController';
import isLoggedIn from '../../middleware/authMiddleware';

const router = express.Router();

router.post('/:productId/reviews', isLoggedIn, catchAsync(reviewController.createReview));

export default router;
