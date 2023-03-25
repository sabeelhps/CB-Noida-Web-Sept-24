"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSeller = exports.isProductAuthor = exports.default = void 0;
var _productRepo = _interopRequireDefault(require("../repository/productRepo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You need login first to do this!');
    return res.redirect('/api/v1/auth/login');
  }
  return next();
};
const isSeller = (req, res, next) => {
  if (req.user.role === 'seller') {
    return next();
  }
  req.flash('error', 'Only user with seller account can create the product');
  return res.redirect('/api/v1/auth/login');
};
exports.isSeller = isSeller;
const isProductAuthor = async (req, res, next) => {
  const {
    id
  } = req.params;
  const product = await _productRepo.default.findProductById(id);
  if (product.author && product.author.equals(req.user._id)) {
    return next();
  }
  req.flash('error', 'You are not the author of this product!');
  return res.redirect(`/api/v1/products/${id}`);
};
exports.isProductAuthor = isProductAuthor;
var _default = isLoggedIn;
exports.default = _default;