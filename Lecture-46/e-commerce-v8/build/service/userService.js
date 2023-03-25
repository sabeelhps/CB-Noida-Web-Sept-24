"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _userRepo = _interopRequireDefault(require("../repository/userRepo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const registerUser = async user => {
  const {
    username,
    password,
    email,
    role
  } = user;
  return _userRepo.default.createUser({
    username,
    password,
    email,
    role
  });
};
var _default = {
  registerUser
};
exports.default = _default;