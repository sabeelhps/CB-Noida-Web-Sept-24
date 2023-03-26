"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Here we will put all the configs of database
// These configs are dummy - Only for understanding
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var _default = {
  development: {
    dbUrl: 'mongodb://localhost:27017/e-commerce-db',
    port: 27017,
    username: 'user',
    password: 'password'
  },
  test: {
    dbUrl: 'mongodb://localhost:27017/e-commerce-db',
    port: 27017,
    username: 'user',
    password: 'password'
  },
  production: {
    dbUrl: process.env.DB_URL,
    port: 27017,
    username: 'user',
    password: 'password'
  }
};
exports.default = _default;