"use strict";

var _app = _interopRequireDefault(require("./app"));
var _database = _interopRequireDefault(require("./database"));
var _logger = _interopRequireDefault(require("./core/logger"));
var _seed = _interopRequireDefault(require("./seed"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(async () => {
  try {
    await _database.default.connectDB();

    // This should be removed before creating a production build
    // await seedDb();

    _app.default.listen(3000, () => {
      _logger.default.info('server running at port 3000');
    });
  } catch (err) {
    _logger.default.error(err);
  }
})();