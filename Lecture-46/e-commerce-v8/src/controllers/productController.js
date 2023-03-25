import productService from '../service/productService';
import logger from '../core/logger';

const getAllProduct = async (req, res) => {
  logger.info('Fetch all request product recieved');
  const products = await productService.getAllProduct();
  res.render('products/index', { products });
};

const displayFormForNewProduct = async (req, res) => {
  res.render('products/new');
};

const createProduct = async (req, res) => {
  const {
    name, price, imageUrl, desc,
  } = req.body;

  const author = req.user._id;

  await productService.createProduct({
    name, price, imageUrl, desc, author
  });
  req.flash('success', 'Created the product successfully!');
  res.redirect('/api/v1/products');
};

const showProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findProductById(id);
  res.render('products/show', { product });
};

const showEditForm = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findProductById(id);
  res.render('products/edit', { product });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name, price, desc, imageUrl,
  } = req.body;
  await productService.updateProductById(id, {
    name, price, desc, imageUrl,
  });
  req.flash('success', 'Updated the product successfully');
  res.redirect(`/api/v1/products/${id}`);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProductById(id);
  req.flash('success', 'Deleted the product sucessfully!');
  res.redirect('/api/v1/products');
};

export default {
  getAllProduct,
  displayFormForNewProduct,
  createProduct,
  showProduct,
  showEditForm,
  updateProduct,
  deleteProduct,
};
