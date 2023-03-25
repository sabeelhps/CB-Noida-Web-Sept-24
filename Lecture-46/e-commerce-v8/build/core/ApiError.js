"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = exports.InteralServerError = exports.BadRequestError = void 0;
var _statusCode = _interopRequireDefault(require("./statusCode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.statusCode = _statusCode.default.NOT_FOUND;
  }
}
exports.NotFoundError = NotFoundError;
class InteralServerError extends Error {
  constructor(message = 'Internal Error') {
    super(message);
    this.statusCode = _statusCode.default.INTERNAL_ERROR;
  }
}
exports.InteralServerError = InteralServerError;
class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super(message);
    this.statusCode = _statusCode.default.BAD_REQUEST;
  }
}
exports.BadRequestError = BadRequestError;