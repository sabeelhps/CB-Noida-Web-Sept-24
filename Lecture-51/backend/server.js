const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({origin: ['http://localhost:3000']}));
app.use(express.json());
const product = {
    id: 5,
    image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: 'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.',
    category: 'jewelery'
}

app.get('/api/products/:id', (req, res) => {
    res.json(product);
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.json('creating a new product');
});


app.listen(1337,()=>{
  console.log('server started at port 1337');
});