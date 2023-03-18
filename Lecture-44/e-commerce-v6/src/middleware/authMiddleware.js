const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You need login first to do this!');
    return res.redirect('/api/v1/auth/login');
  }
  return next();
};

export default isLoggedIn;
