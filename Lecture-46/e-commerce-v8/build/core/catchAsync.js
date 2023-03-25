"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}