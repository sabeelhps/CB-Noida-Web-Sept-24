"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _catchAsync = _interopRequireDefault(require("../../core/catchAsync"));
var _productController = _interopRequireDefault(require("../../controllers/productController"));
var _authMiddleware = _interopRequireWildcard(require("../../middleware/authMiddleware"));
var _validator = require("../../validations/validator");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();

// api/v1/products
router.get('/', (0, _catchAsync.default)(_productController.default.getAllProduct));
router.get('/new', _authMiddleware.default, (0, _catchAsync.default)(_productController.default.displayFormForNewProduct));
router.post('/', _authMiddleware.default, _validator.validateProduct, _authMiddleware.isSeller, (0, _catchAsync.default)(_productController.default.createProduct));
router.get('/:id', (0, _catchAsync.default)(_productController.default.showProduct));
router.get('/:id/edit', _authMiddleware.default, (0, _catchAsync.default)(_productController.default.showEditForm));
router.patch('/:id', _authMiddleware.default, (0, _catchAsync.default)(_authMiddleware.isProductAuthor), (0, _catchAsync.default)(_productController.default.updateProduct));
router.delete('/:id', _authMiddleware.default, _authMiddleware.isSeller, (0, _catchAsync.default)(_authMiddleware.isProductAuthor), (0, _catchAsync.default)(_productController.default.deleteProduct));

// Above routes can be written as below also----------------------
// router.route('/')
//     .get(catchAsync(productController.getAllProduct))
//     .post(catchAsync(productController.createProduct));

// router.route('/:id')
//     .get(catchAsync(productController.showProduct))
//     .patch(catchAsync(productController.updateProduct))
//     .delete(catchAsync(productController.deleteProduct));
var _default = router;
exports.default = _default;