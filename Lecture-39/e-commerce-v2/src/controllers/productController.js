import productService from "../service/productService"
import logger from '../core/logger';

const getAllProduct = async (req, res) => {
    logger.info('Fetch all request product recieved');
    const products = await productService.getAllProduct();
    res.status(200).json(products);
}

export default {
    getAllProduct
}