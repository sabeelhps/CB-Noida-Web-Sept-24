"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _product = _interopRequireDefault(require("../models/product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProducts = () => _product.default.find({}).lean();
const createProduct = product => _product.default.create(product);
const findProductById = id => _product.default.findById(id);
const updateProductById = (id, product) => _product.default.findByIdAndUpdate(id, product, {
  new: true
});
const deleteProductById = id => _product.default.findByIdAndDelete(id);
const saveProduct = product => product.save();
const findProductByIdWithReviews = id => _product.default.findById(id).populate('reviews');
var _default = {
  getAllProducts,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById,
  saveProduct,
  findProductByIdWithReviews
};
exports.default = _default;