"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _logger = _interopRequireDefault(require("../core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const disconnectDB = async () => {
  await _mongoose.default.disconnect();
};
const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/e-commerce-db';
    dbUrl.includes("localhost") ? _logger.default.info('Connecting to local database!') : _logger.default.info('Connecting to production database!');
    _mongoose.default.set('strictQuery', false);
    await _mongoose.default.connect(dbUrl);
    _logger.default.info('DB connection open!');
  } catch (err) {
    _logger.default.error(err);
    disconnectDB();
    _logger.default.error('DB Connection Closed');
  }
};
var _default = {
  connectDB,
  disconnectDB
};
exports.default = _default;