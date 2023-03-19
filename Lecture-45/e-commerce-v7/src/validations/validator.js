import { productSchema } from './schema';

export const validateProduct = (req, res, next) => {
    const { name, price, desc, imageUrl } = req.body;
    const { error } = productSchema.validate({ name, price, desc, imageUrl });
    if (error) {
        const errMsg = error.details.map((err) => err.message).join(',');
        req.flash('error', errMsg);
        return res.redirect('/api/v1/products/new');
    }
    return next();
}