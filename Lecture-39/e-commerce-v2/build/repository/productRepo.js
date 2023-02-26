"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _product = _interopRequireDefault(require("../models/product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllProducts = () => _product.default.find({});
var _default = {
  getAllProducts
};
exports.default = _default;