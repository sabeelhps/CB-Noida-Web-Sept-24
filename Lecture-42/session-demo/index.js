const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'weneedabettersecret',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
    req.session.username = 'Kartik';
    res.send('Hello from Home Route!!!');
});

app.get('/greet', (req, res) => {
    const { username = 'Max' } = req.session;
    res.send(`Greeting from ${username}`);
});

app.get('/viewcount', (req, res) => {
    if (!req.session.pageCount) {
        req.session.pageCount = 1;
    } else {
        req.session.pageCount += 1;
    }
    res.send(`You viewed this page ${req.session.pageCount} times`);
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});