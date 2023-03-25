"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _productService = _interopRequireDefault(require("../service/productService"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProduct = async (req, res) => {
  _logger.default.info('Fetch all request product recieved');
  const products = await _productService.default.getAllProduct();
  res.render('products/index', {
    products
  });
};
const displayFormForNewProduct = async (req, res) => {
  res.render('products/new');
};
const createProduct = async (req, res) => {
  const {
    name,
    price,
    imageUrl,
    desc
  } = req.body;
  const author = req.user._id;
  await _productService.default.createProduct({
    name,
    price,
    imageUrl,
    desc,
    author
  });
  req.flash('success', 'Created the product successfully!');
  res.redirect('/api/v1/products');
};
const showProduct = async (req, res) => {
  const {
    id
  } = req.params;
  const product = await _productService.default.findProductById(id);
  res.render('products/show', {
    product
  });
};
const showEditForm = async (req, res) => {
  const {
    id
  } = req.params;
  const product = await _productService.default.findProductById(id);
  res.render('products/edit', {
    product
  });
};
const updateProduct = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    name,
    price,
    desc,
    imageUrl
  } = req.body;
  await _productService.default.updateProductById(id, {
    name,
    price,
    desc,
    imageUrl
  });
  req.flash('success', 'Updated the product successfully');
  res.redirect(`/api/v1/products/${id}`);
};
const deleteProduct = async (req, res) => {
  const {
    id
  } = req.params;
  await _productService.default.deleteProductById(id);
  req.flash('success', 'Deleted the product sucessfully!');
  res.redirect('/api/v1/products');
};
var _default = {
  getAllProduct,
  displayFormForNewProduct,
  createProduct,
  showProduct,
  showEditForm,
  updateProduct,
  deleteProduct
};
exports.default = _default;