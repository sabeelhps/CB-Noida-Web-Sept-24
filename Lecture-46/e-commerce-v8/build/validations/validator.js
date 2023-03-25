"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = exports.validateProduct = void 0;
var _schema = require("./schema");
const validateProduct = (req, res, next) => {
  const {
    name,
    price,
    desc,
    imageUrl
  } = req.body;
  const {
    error
  } = _schema.productSchema.validate({
    name,
    price,
    desc,
    imageUrl
  });
  if (error) {
    const errMsg = error.details.map(err => err.message).join(',');
    req.flash('error', errMsg);
    return res.redirect('/api/v1/products/new');
  }
  return next();
};
exports.validateProduct = validateProduct;
const validateUser = (req, res, next) => {
  const {
    email,
    username,
    password,
    role
  } = req.body;
  const {
    error
  } = _schema.userSchema.validate({
    email,
    username,
    password,
    role
  });
  if (error) {
    if (error.details[0].path.includes('password')) {
      req.flash('error', 'Password must contain minimum eight characters, at least one letter, one number and one special character');
    } else {
      const errMsg = error.details.map(err => err.message).join(',');
      req.flash('error', errMsg);
    }
    return res.redirect('/api/v1/auth/register');
  }
  return next();
};
exports.validateUser = validateUser;