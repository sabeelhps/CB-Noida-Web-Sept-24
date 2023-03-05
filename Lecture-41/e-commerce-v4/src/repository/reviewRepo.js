import Review from "../models/review";

const createReview = (review) => {
    return Review.create(review);
}

export default {
    createReview
}