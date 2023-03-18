import productRepo from '../repository/productRepo';
import logger from '../core/logger';
import { BadRequestError } from '../core/ApiError';

const getAllProduct = () => {
  logger.info('fetching all the products from repository');
  return productRepo.getAllProducts();
};

const createProduct = (product) => {
  logger.info(`Creating a product with data : ${product}`);
  return productRepo.createProduct(product);
};

const findProductById = async (id) => {
  const product = await productRepo.findProductByIdWithReviews(id);
  if (!product) {
    throw new BadRequestError(`Product with the id : ${id} doesn't exist`);
  }
  return product;
};

const updateProductById = async (id, product) => {
  const currentProduct = await productRepo.findProductById(id);
  if (!currentProduct) throw new BadRequestError(`Product with the id : ${id} doesn't exist`);
  const updatedProduct = await productRepo.updateProductById(id, product);
  return updatedProduct;
};

const deleteProductById = async (id) => productRepo.deleteProductById(id);

export default {
  getAllProduct,
  createProduct,
  findProductById,
  updateProductById,
  deleteProductById,
};
