const mongoose = require('mongoose');
const data = require('../dummyPizza');

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
const Order = mongoose.model('Order', { schema: false });

// const paneerTikkaOrder = new Order({ name: "Paneer Tikka", size: "regular", price: 250, qty: 5 });

// paneerTikkaOrder.save()
//     .then(() => console.log('saved pizza to db'));

Order.insertMany(data)
    .then((pizzas) => {
        console.log(pizzas)
    })
    .catch((err) => {
        console.log(err);
    });

