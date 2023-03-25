export default function (callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}
