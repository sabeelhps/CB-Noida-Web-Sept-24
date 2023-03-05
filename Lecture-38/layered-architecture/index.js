// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoute');


mongoose.connect('mongodb://localhost:27017/blogs-db')
    .then(() => {
        console.log('connected');
    })
    .catch(() => console.log('err'));

app.use(express.json());

app.use('/blogs', blogRoute);


app.use((err, req, res, next) => {
  const messege = err.messege || 'Something Went Wrong';
  res.status(500).json({ message: messege });
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});