"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productSchema = new _mongoose.default.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  desc: String
});
const Product = _mongoose.default.model('Product', productSchema);
var _default = Product;
exports.default = _default;