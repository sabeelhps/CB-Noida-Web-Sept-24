const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/pizzaDB')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

//It maps different keys coming from document (collection) in a database to different type(js type) in Javascript
const orderSchema = new mongoose.Schema({
    name: String,
    price: Number,
    size: String,
    qty: Number
});

// Technically its a js class
const Order = mongoose.model('Order', orderSchema);

// const paneerTikkaOrder = new Order({ name: "Paneer Tikka", size: "regular", price: 250, qty: 5 });

// paneerTikkaOrder.save()
//     .then(() => console.log('saved pizza to db'));



async function main() {
    const result =  await Order.aggregate([
        {
            $group: {
                _id: "$size",
                pizzaSize: { "$first" : "$size"},
                totalQuantity: {
                    $sum: "$qty"
                }
            }
        },
        {
            $sort: {
                totalQuantity:-1
            }
        }
    ]
    )
    console.log(result);
}

// main();