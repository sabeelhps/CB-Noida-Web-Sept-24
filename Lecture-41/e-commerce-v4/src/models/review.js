import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
  comment: {
    type: String,
    maxLength: 100,
  },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
