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
  res.status(200).json(products);
};
var _default = {
  getAllProduct
};
exports.default = _default;