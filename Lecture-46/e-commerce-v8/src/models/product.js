import mongoose from 'mongoose';
import Review from './review';

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  desc: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
});

productSchema.post('findOneAndDelete', async (product) => {
  await Review.deleteMany({ _id: { $in: product.reviews } });
});

const Product = mongoose.model('Product', productSchema);

export default Product;
