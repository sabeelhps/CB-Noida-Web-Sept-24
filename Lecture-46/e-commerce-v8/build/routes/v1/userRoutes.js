"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _userController = _interopRequireDefault(require("../../controllers/userController"));
var _catchAsync = _interopRequireDefault(require("../../core/catchAsync"));
var _validator = require("../../validations/validator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get('/register', _userController.default.getRegisterForm);
router.post('/register', _validator.validateUser, (0, _catchAsync.default)(_userController.default.registerUser));
router.get('/login', _userController.default.getLoginForm);
router.post('/login', _passport.default.authenticate('local', {
  failureRedirect: '/api/v1/auth/login',
  failureFlash: true
}), _userController.default.loginUser);
router.get('/logout', (0, _catchAsync.default)(_userController.default.logoutUser));
var _default = router;
exports.default = _default;