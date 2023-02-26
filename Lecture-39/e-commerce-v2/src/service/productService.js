import productRepo from "../repository/productRepo"
import logger from "../core/logger";

const getAllProduct = () => {
    logger.info('fetching all the products from repository');
    return productRepo.getAllProducts();
}

export default {
    getAllProduct
}