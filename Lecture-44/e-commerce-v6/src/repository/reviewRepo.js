import Review from '../models/review';

const createReview = (review) => Review.create(review);

export default {
  createReview,
};
