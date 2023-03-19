"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reviewSchema = new _mongoose.default.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1
  },
  comment: {
    type: String,
    maxLength: 100
  }
});
const Review = _mongoose.default.model('Review', reviewSchema);
var _default = Review;
exports.default = _default;