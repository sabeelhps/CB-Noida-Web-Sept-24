import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  desc: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
