import Product from '../models/product';

const getAllProducts = () => Product.find({})
  .lean();

const createProduct = (product) => Product.create(product);

const findProductById = (id) => Product.findById(id);

const updateProductById = (id, product) => Product.findByIdAndUpdate(id, product, { new: true });

const deleteProductById = (id) => Product.findByIdAndDelete(id);

const saveProduct = (product) => product.save();

const findProductByIdWithReviews = (id) => Product.findById(id)
  .populate('reviews');

export default {
  getAllProducts,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById,
  saveProduct,
  findProductByIdWithReviews,
};
