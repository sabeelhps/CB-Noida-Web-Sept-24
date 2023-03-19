"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _review = _interopRequireDefault(require("../models/review"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createReview = review => _review.default.create(review);
var _default = {
  createReview
};
exports.default = _default;