"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _ejsMate = _interopRequireDefault(require("ejs-mate"));
var _methodOverride = _interopRequireDefault(require("method-override"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectFlash = _interopRequireDefault(require("connect-flash"));
var _v = _interopRequireDefault(require("./routes/v1"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.engine('ejs', _ejsMate.default);
app.set('view engine', 'ejs');
app.set('views', _path.default.join(__dirname, 'views'));
app.use(_express.default.static(_path.default.join(__dirname, 'public')));
app.use(_express.default.urlencoded({
  extended: true,
  limit: '10mb'
}));
app.use(_express.default.json({
  limit: '10mb'
}));
app.use((0, _methodOverride.default)('_method'));
const sessionConfig = {
  secret: 'weneedabettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1
  }
};
app.use((0, _expressSession.default)(sessionConfig));
app.use((0, _connectFlash.default)());
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
app.use('/api/v1', _v.default);

// Custom Error Middleware to catch Errors
// eslint-disable-next-line
app.use((err, req, res, next) => {
  const {
    message = 'Something Went Wrong',
    statusCode = 500
  } = err;
  res.locals.error = message;
  res.status(statusCode).render('error', {
    message
  });
});
var _default = app;
exports.default = _default;