const express = require('express');

const app = express();


// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // console.log('You made a request');
//     // res.send('Hello from the server');
//     res.send('<h1>Hello World!</h1>');
// });

app.get('/', (req, res) => {
    res.send('This is the home route');
})

app.get('/cat', (req, res) => {
    res.send('MEEEEOOOWWW');
});

app.get('/dog', (req, res) => {
    res.send('Wooof WOoof!!!!');
});

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send(`search route`);
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    res.send(`You are trying to login with ${username} username and ${password} password`);
});

app.get('/challenge/:questionId', (req, res) => {
    console.log(req.params);
    res.send(`You are searching a challenge with requestId : ${req.params.questionId}`); 
});

app.get('/nodemon', (req, res) => {
    res.send('Hello from Nodemon');
});

app.listen(3000, () => {
    console.log('server running at port 3000');
});