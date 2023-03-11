import reviewService from '../service/reviewService';

const createReview = async (req, res) => {
  const { productId } = req.params;
  const { rating, comment } = req.body;
  await reviewService.createReview(productId, { rating, comment });
  req.flash('success', 'Added your review successfully');
  res.redirect(`/api/v1/products/${productId}`);
};

export default {
  createReview,
};
