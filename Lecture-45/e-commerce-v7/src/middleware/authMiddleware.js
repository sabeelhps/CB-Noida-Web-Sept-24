const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You need login first to do this!');
    return res.redirect('/api/v1/auth/login');
  }
  return next();
};

export const isSeller = (req, res, next) => {
  if (req.user.role === 'seller') {
    return next();
  }
  req.flash('error', 'Only user with seller account can create the product');
  return res.redirect('/api/v1/auth/login');
};

export default isLoggedIn;
