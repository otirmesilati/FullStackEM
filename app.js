const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const post_routes = require('./routes/post_routes')
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', error=>{console.error(error);});
db.once('open', () => {console.log('Connected to MongoDB');});

const port = process.env.PORT


app.use('/post', post_routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
