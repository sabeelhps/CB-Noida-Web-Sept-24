const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/blogs-db')
    .then(() => {
        console.log('connected');
    })
    .catch(() => console.log('err'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use('/blogs',blogRoutes);


app.listen(3000,()=>{
  console.log('server started at port 3000');
});