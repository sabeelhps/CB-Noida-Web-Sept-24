const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const todos = [
    "Go for shopping",
    "Learn Web",
    "Go to Gym"
];

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are searching ${subredit} subredit`);
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.get('/todos', (req, res) => {
    res.render('todos', { todoList:todos });
});

app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    res.render('random', { randomNum });
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});