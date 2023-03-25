"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _userService = _interopRequireDefault(require("../service/userService"));
var _ApiError = require("../core/ApiError");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getRegisterForm = async (req, res) => {
  res.render('auth/signup');
};
const registerUser = async (req, res) => {
  const {
    email,
    username,
    password,
    role
  } = req.body;
  await _userService.default.registerUser({
    username,
    password,
    email,
    role
  });
  req.flash('success', `Registered the user successfully with username : ${username}`);
  res.redirect('/api/v1/auth/login');
};
const getLoginForm = (req, res) => {
  res.render('auth/login');
};
const loginUser = (req, res) => {
  req.flash('success', `Loggedin successfull as ${req.user.username}`);
  res.redirect('/api/v1/products');
};
const logoutUser = async (req, res) => {
  req.logout(err => {
    if (err) {
      throw new _ApiError.InteralServerError('Cannot logout at the moment');
    }
    req.flash('success', 'Logged out successfully!');
    res.redirect('/api/v1/auth/login');
  });
};
var _default = {
  registerUser,
  getRegisterForm,
  getLoginForm,
  loginUser,
  logoutUser
};
exports.default = _default;