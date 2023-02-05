const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Order = require('./models/order');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/pizzaDB')
    .then(() => console.log('connnection open'))
    .catch((err) => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

// Index
app.get('/orders', async(req, res)=> {
    const orders = await Order.find({});
    res.status(200).json({
        statusCode:1000,
        message: "success",
        payload:orders
    });
});

// Create
app.post('/orders', async (req, res) => {
    try {
        const { name, price, qty, size } = req.body;
        const order = await Order.create({ name, price, qty, size });
        res.status(201).json({
            statusCode: 1000,
            message: "created order successfully",
            payload: { orderId: order._id }
        })
    }
    catch (err) {
        res.status(400).json({
            statusCode: 1001,
            message: err.message,
            payload: null
        });
    }
});

// Show
app.get('/orders/:id', async(req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200)
        .json({
            statusCode: 1000,
            message: "success",
            payload: order
        });
});

// Create all the remaining REST apis

app.listen(3000,()=>{
  console.log('server started at port 3000');
});