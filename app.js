const express = require('express');
const dotenv = require('dotenv').config();
const post_routes = require('./routes/post_routes')

const app = express();
const port = process.env.PORT

app.use('/post', post_routes);


app.get('/test', (req, res)=> { 
    res.send('Hi'); 
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
