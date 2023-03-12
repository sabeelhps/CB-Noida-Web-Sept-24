"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _catchAsync = _interopRequireDefault(require("../../core/catchAsync"));
var _productController = _interopRequireDefault(require("../../controllers/productController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();

// api/v1/products
router.get('/', (0, _catchAsync.default)(_productController.default.getAllProduct));
router.get('/new', (0, _catchAsync.default)(_productController.default.displayFormForNewProduct));
router.post('/', (0, _catchAsync.default)(_productController.default.createProduct));
router.get('/:id', (0, _catchAsync.default)(_productController.default.showProduct));
router.get('/:id/edit', (0, _catchAsync.default)(_productController.default.showEditForm));
router.patch('/:id', (0, _catchAsync.default)(_productController.default.updateProduct));
router.delete('/:id', (0, _catchAsync.default)(_productController.default.deleteProduct));

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