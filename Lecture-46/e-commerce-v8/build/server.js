"use strict";

var _app = _interopRequireDefault(require("./app"));
var _database = _interopRequireDefault(require("./database"));
var _logger = _interopRequireDefault(require("./core/logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(async () => {
  try {
    await _database.default.connectDB();
    const port = process.env.PORT || 3000;
    _app.default.listen(port, () => {
      _logger.default.info(`server running at port ${port}`);
    });
  } catch (err) {
    _logger.default.error(err);
  }
})();