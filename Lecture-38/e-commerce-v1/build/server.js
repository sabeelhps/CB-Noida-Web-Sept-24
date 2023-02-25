"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(() => {
  _app.default.listen(3000, () => {
    console.log('server running at port 3000');
  });
})();