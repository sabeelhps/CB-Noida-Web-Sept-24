const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength:100
    },
    price: {
        type: Number,
        min:[0, 'Price cannot be less than 0']
    },
    qty: {
        type: Number,
        default:1
    },
    size: {
        type: String,
        enum: {
            values:['regular', 'small', 'medium', 'large'],
            message: '{VALUE} is not supported'
        }
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;