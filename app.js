const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const post_routes = require('./routes/post_routes')


const port = process.env.PORT

app.use('/post', post_routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
