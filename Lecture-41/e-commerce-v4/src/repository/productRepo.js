import Product from '../models/product';

const getAllProducts = () => Product.find({})
  .lean();

const createProduct = (product) => Product.create(product);

const findProductById = (id) => Product.findById(id)
  .lean();

const updateProductById = (id, product) => Product.findByIdAndUpdate(id, product, { new: true });

const deleteProductById = (id) => Product.findByIdAndDelete(id);

export default {
  getAllProducts,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById,
};
