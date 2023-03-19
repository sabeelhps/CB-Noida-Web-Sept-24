"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _productRoutes = _interopRequireDefault(require("./productRoutes"));
var _reviewRoutes = _interopRequireDefault(require("./reviewRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.use('/products', _productRoutes.default);
router.use('/products', _reviewRoutes.default);
var _default = router;
exports.default = _default;