"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reviewRepo = _interopRequireDefault(require("../repository/reviewRepo"));
var _productRepo = _interopRequireDefault(require("../repository/productRepo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createReview = async (productId, review) => {
  const product = await _productRepo.default.findProductById(productId);
  // create a new entry inside reviews collection
  const newReview = await _reviewRepo.default.createReview(review);
  // Here we are pushing ObjectId of created review inside the product
  product.reviews.push(newReview);
  // Then we are saving back the product to the db
  await _productRepo.default.saveProduct(product);
  return newReview;
};
var _default = {
  createReview
};
exports.default = _default;