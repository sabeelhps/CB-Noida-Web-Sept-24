"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _review = _interopRequireDefault(require("./review"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productSchema = new _mongoose.default.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  desc: String,
  reviews: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  author: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User'
  }
});
productSchema.post('findOneAndDelete', async product => {
  await _review.default.deleteMany({
    _id: {
      $in: product.reviews
    }
  });
});
const Product = _mongoose.default.model('Product', productSchema);
var _default = Product;
exports.default = _default;