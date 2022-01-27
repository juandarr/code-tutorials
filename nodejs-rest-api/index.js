const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch ((err) => {
    console.log(err);
});


const app = express();

//Adding a get HTTP method to anwer with hello world!
app.get('/', function(req, res) {
    res.send('Hello world!');
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server is running at port ${port}`);
});

