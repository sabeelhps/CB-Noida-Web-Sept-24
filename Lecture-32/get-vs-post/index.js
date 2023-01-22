const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true, limit:'10mb' })) // this middleware(basically function) is use to parse the form-url encoded data from the incoming request and populate the req.body
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send('You made the GET Request');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('You made the POST Request!');
});

app.get('/todos', (req, res) => {
    const todos = [{ id: 1, task: 'Go to Gym' }, { id: 2, task: "Learn Web" }];
    res.status(200).json(todos);
});


// the below endpoints should be added the end of the server file
app.get('*', (req, res) => {
    res.send('You made the invalid request');
});

app.all('*', (req, res) => {
    res.send('You are requesting the wrong URL!!!!!');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});