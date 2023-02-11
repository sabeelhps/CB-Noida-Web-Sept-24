// https://expressjs.com/en/guide/error-handling.html

const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    try {
        const val = Math.floor(Math.random() * 100000);
        if (val % 3 === 0) {
            throw new Error('divisble by 3');
        }
        return res.status(200).send('Everything is okay!')
    }
    catch (err) {
        return res.status(400).send(`Value : ${err.message}`);
    }
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});