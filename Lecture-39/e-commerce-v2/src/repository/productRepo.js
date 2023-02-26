import Product from '../models/product';

const getAllProducts = () => {
    return Product.find({});
}

export default {
    getAllProducts
}