const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const mongoose = require("mongoose");
const bodyparser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error=>{console.error(error);});
db.once('open', () => {console.log('Connected to MongoDB');});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.use(bodyparser.urlencoded({ extended:true, limit:'1mb' }));
app.use(bodyparser.json());

const post_routes = require('./routes/post_routes')
app.use('/post', post_routes);

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app
