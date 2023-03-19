import { productSchema, userSchema } from './schema';

export const validateProduct = (req, res, next) => {
  const {
    name, price, desc, imageUrl,
  } = req.body;

  const { error } = productSchema.validate({
    name, price, desc, imageUrl,
  });
  if (error) {
    const errMsg = error.details.map((err) => err.message).join(',');
    req.flash('error', errMsg);
    return res.redirect('/api/v1/products/new');
  }
  return next();
};

export const validateUser = (req, res, next) => {
  const {
    email, username, password, role,
  } = req.body;

  const { error } = userSchema.validate({
    email, username, password, role,
  });

  if (error) {
    if (error.details[0].path.includes('password')) {
      req.flash('error', 'Password must contain minimum eight characters, at least one letter, one number and one special character');
    } else {
      const errMsg = error.details.map((err) => err.message).join(',');
      req.flash('error', errMsg);
    }
    return res.redirect('/api/v1/auth/register');
  }

  return next();
};
