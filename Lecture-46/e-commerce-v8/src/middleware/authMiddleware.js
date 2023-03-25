import productRepo from "../repository/productRepo";

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

export const isProductAuthor = async (req, res, next) => {
  const { id } = req.params;
  const product = await productRepo.findProductById(id);

  if (product.author && product.author.equals(req.user._id)) {
    return next();
  }
  req.flash('error', 'You are not the author of this product!');
  return res.redirect(`/api/v1/products/${id}`);
}

export default isLoggedIn;
