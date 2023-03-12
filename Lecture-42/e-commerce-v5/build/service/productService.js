"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _productRepo = _interopRequireDefault(require("../repository/productRepo"));
var _logger = _interopRequireDefault(require("../core/logger"));
var _ApiError = require("../core/ApiError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProduct = () => {
  _logger.default.info('fetching all the products from repository');
  return _productRepo.default.getAllProducts();
};
const createProduct = product => {
  _logger.default.info(`Creating a product with data : ${product}`);
  return _productRepo.default.createProduct(product);
};
const findProductById = async id => {
  const product = await _productRepo.default.findProductByIdWithReviews(id);
  if (!product) {
    throw new _ApiError.BadRequestError(`Product with the id : ${id} doesn't exist`);
  }
  return product;
};
const updateProductById = async (id, product) => {
  const currentProduct = await _productRepo.default.findProductById(id);
  if (!currentProduct) throw new _ApiError.BadRequestError(`Product with the id : ${id} doesn't exist`);
  const updatedProduct = await _productRepo.default.updateProductById(id, product);
  return updatedProduct;
};
const deleteProductById = async id => _productRepo.default.deleteProductById(id);
var _default = {
  getAllProduct,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById
};
exports.default = _default;