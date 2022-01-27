const mongoose = require('mongoose');

const devCredits = new mongoose.Schema({
    credits: {
        type: Number,
        required: true, 
    },
    id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('devCredits', devCredits);