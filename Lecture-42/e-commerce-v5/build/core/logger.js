"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _winston = _interopRequireDefault(require("winston"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const logger = _winston.default.createLogger({
  transports: [new _winston.default.transports.Console(), new _winston.default.transports.File({
    filename: 'combined.log'
  })]
});
var _default = logger;
exports.default = _default;