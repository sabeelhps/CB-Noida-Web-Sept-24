"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _catchAsync = _interopRequireDefault(require("../../core/catchAsync"));
var _productController = _interopRequireDefault(require("../../controllers/productController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();

// api/v1/products
router.get('/products', (0, _catchAsync.default)(_productController.default.getAllProduct));
var _default = router;
exports.default = _default;