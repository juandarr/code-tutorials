const mongoose = require('mongoose');

const devCredits = new mongoose.Schema({
    credits: {
        type: Number,
        required: true, 
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('devCredits', devCredits);