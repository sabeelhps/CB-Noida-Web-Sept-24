"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const userSchema = new _mongoose.default.Schema({
  email: {
    type: String
  },
  role: {
    type: String,
    enum: ['seller', 'buyer']
  }
});
userSchema.plugin(_passportLocalMongoose.default);
const User = _mongoose.default.model('User', userSchema);
var _default = User;
exports.default = _default;