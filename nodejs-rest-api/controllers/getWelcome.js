const devCredits = require('../model/model.js');

const getWelcome = function(req, res) {
    res.send('Hello world!');
};

module.exports = getWelcome;