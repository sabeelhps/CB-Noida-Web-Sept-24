"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Here we will put all the configs of database
var _default = {
  development: {
    dbUrl: 'mongodb://mongodb.cluster-0/ecommerce-db',
    port: 27017,
    username: 'user',
    password: 'password'
  },
  test: {
    dbUrl: 'mongodb://mongodb.cluster-0/ecommerce-db',
    port: 27017,
    username: 'user',
    password: 'password'
  },
  production: {
    dbUrl: 'mongodb://mongodb.cluster-0/ecommerce-db',
    port: 27017,
    username: 'user',
    password: 'password'
  }
};
exports.default = _default;