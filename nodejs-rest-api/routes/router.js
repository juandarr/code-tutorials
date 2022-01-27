const router = require('express').Router();

const getWelcome = require('../controllers/getWelcome.js');
const getCredits = require('../controllers/getCredits.js');
const postCredits = require('../controllers/postCredits.js');

//Adding a get HTTP method to anwer with hello world!
router.get('/', getWelcome);

//get HTTP method to get credits of user with id
router.get('/get/:id', getCredits);

//adding post HTTP method to update or create new record in mongodb
router.post('/post', postCredits);

module.exports = router;