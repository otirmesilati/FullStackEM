const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT




app.get('/test', (req, res)=> { 
    res.send('Hi'); 
});

app.get('/post' ,(req, res) => {
    res.send('app get post');
});

app.post('/post', (req, res)=> {
     res.send('app post post'); 
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
