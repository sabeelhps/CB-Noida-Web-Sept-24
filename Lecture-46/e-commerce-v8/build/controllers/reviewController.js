"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reviewService = _interopRequireDefault(require("../service/reviewService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createReview = async (req, res) => {
  const {
    productId
  } = req.params;
  const {
    rating,
    comment
  } = req.body;
  await _reviewService.default.createReview(productId, {
    rating,
    comment
  });
  req.flash('success', 'Added your review successfully');
  res.redirect(`/api/v1/products/${productId}`);
};
var _default = {
  createReview
};
exports.default = _default;