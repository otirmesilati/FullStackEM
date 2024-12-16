const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT









app.get('/' ,(req, res) => {
    res.send('Hi');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
