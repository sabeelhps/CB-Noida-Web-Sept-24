"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _productRepo = _interopRequireDefault(require("../repository/productRepo"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProduct = () => {
  _logger.default.info('fetching all the products from repository');
  return _productRepo.default.getAllProducts();
};
var _default = {
  getAllProduct
};
exports.default = _default;