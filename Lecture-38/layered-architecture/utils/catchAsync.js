module.exports = function (callback) {
    return function (req, res, next) {
        callback(req, res, next).catch(next);
    }
}

// 61c4d3bf372c21c0ad3973a3