"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.set('view engine', 'ejs');
app.use(_express.default.urlencoded({
  extended: true,
  limit: '10mb'
}));
app.use(_express.default.json({
  limit: '10mb'
}));
var _default = app;
exports.default = _default;