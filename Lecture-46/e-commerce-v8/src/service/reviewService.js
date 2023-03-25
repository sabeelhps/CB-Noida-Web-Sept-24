import reviewRepo from '../repository/reviewRepo';
import productRepo from '../repository/productRepo';

const createReview = async (productId, review) => {
  const product = await productRepo.findProductById(productId);
  // create a new entry inside reviews collection
  const newReview = await reviewRepo.createReview(review);
  // Here we are pushing ObjectId of created review inside the product
  product.reviews.push(newReview);
  // Then we are saving back the product to the db
  await productRepo.saveProduct(product);
  return newReview;
};

export default {
  createReview,
};
