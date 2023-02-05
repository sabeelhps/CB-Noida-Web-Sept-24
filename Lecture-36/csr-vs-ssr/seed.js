const mongoose = require('mongoose');
const Todo = require('./models/todo');

mongoose.connect('mongodb://localhost:27017/todosDB')
.then(() => console.log('db connected'))
    .catch((err) => console.log(err));

const fakeTodos = [
    {
        task: "Go to Gym",
        completed:true
    },
    {
        task: "Buy Vegetables",
        completed:false
    },
    {
        task: "Watch Movies",
        completed:false
    },
]

async function seedTodo() {
    await Todo.deleteMany({});
    await Todo.insertMany(fakeTodos);
    console.log('DB Seeded');
    await mongoose.disconnect();
    console.log('DB Connection Closed');
}

seedTodo();