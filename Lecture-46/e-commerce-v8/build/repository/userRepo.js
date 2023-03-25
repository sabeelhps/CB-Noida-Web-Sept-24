"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createUser = user => {
  const {
    username,
    password,
    email,
    role
  } = user;
  return _user.default.register({
    username,
    email,
    role
  }, password);
};
var _default = {
  createUser
};
exports.default = _default;