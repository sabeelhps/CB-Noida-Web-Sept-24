"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = exports.productSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const productSchema = _joi.default.object({
  name: _joi.default.string().min(3).max(15).required(),
  price: _joi.default.number().min(0).max(Number.MAX_SAFE_INTEGER).required(),
  imageUrl: _joi.default.string().required(),
  desc: _joi.default.string().min(10).max(100).required()
});
exports.productSchema = productSchema;
const userSchema = _joi.default.object({
  username: _joi.default.string().alphanum().min(3).max(20).required(),
  password: _joi.default.string().min(4).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  email: _joi.default.string().email().required(),
  role: _joi.default.string().required()
});

// create review schema yourself
exports.userSchema = userSchema;