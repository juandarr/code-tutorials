const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config();

const router = require('./routes/router.js');

const rateLimiter = require('./middleware/rateLimiter.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);

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

app.use(router);

const port = process.env.PORT || 3000;


app.listen(port, async () => {
    console.log(`Server is running at port ${port}`);
});


