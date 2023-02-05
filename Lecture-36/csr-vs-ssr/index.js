const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Todo = require('./models/todo');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/todosDB')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Home route'); 
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.render('todos', { todos });
});

app.post('/todos/:id/completed', async(req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        return res.send('Todo Not found!');
    }
    await Todo.findByIdAndUpdate(id, { completed: !todo.completed });
    res.status(200).json('updated');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});