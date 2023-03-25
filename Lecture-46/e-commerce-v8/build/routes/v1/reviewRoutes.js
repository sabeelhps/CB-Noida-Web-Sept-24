"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _catchAsync = _interopRequireDefault(require("../../core/catchAsync"));
var _reviewController = _interopRequireDefault(require("../../controllers/reviewController"));
var _authMiddleware = _interopRequireDefault(require("../../middleware/authMiddleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.post('/:productId/reviews', _authMiddleware.default, (0, _catchAsync.default)(_reviewController.default.createReview));
var _default = router;
exports.default = _default;