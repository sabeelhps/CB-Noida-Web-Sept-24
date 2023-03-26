"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "database", {
  enumerable: true,
  get: function () {
    return _database.default;
  }
});
exports.secret = exports.node_env = void 0;
var _database = _interopRequireDefault(require("./database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const secret = process.env.SECRET || 'we need a better secret';
exports.secret = secret;
const node_env = process.env.NODE_ENV || 'development';
exports.node_env = node_env;