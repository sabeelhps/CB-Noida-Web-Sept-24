const express = require('express');
const app = express();
const morgan = require('morgan');


// Middleware can be mounted on some path
// app.use('/apple',(req, res, next) => {
//     res.send('Hijacked by my APP.USE!');
// })

app.use(morgan('dev'));

const verify = (req, res, next) => {
    const { username, password } = req.query;
    if (username && password === 'password') {
        return next();
    }
    res.status(400).send('Invalid credentials');
}

app.use((req, res, next) => {
    console.log('My first middleware');
    req.username = 'Sabeel';
    return next();
    console.log('My first Middleware after calling next');
});

app.use((req, res, next) => {
    console.log('My second middleware');
    next();
})

app.get('/cat', (req, res) => {
    console.log('Inside home route');
    const { username } = req;
    res.send(`Hello from ${username}`);
});


// app.get('/path',middleware1, middleware2, middleware3 ........);

app.get('/secret',verify, (req, res) => {
    console.log('inside secret route');
    res.send('Sometime i wear the headphone in public so that i dont have to talk to anyone!!!!!!'); 
});

const cache = new Map();

app.get('/cache', (req, res) => {
    const { key } = req.query;
    if (cache.has(key)) {
        return res.send(`Found in casche : ${cache.get(key)}`);
    }
    // You are fetching some value corresponding to the key from database or external service
    const value = getValue();
    cache.set(key, value);
    res.send(`No Found in cache : ${value}`);
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});

function getValue() {
    const start = new Date().getTime();
    while (new Date().getTime() <= start + 2000) { }
    const value = Math.floor(Math.random() * 10000);
    return value;
}
