const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 1*60*1000, //60 seconds
    max: 10,
    message: 'Bonk 🔨',
});

module.exports = rateLimiter;