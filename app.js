// Basic route setup
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/true-north', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Logic checking if there's an error
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})