const router = require('express').Router();
const devCredits = require('../model/model.js');

//Adding a get HTTP method to anwer with hello world!
router.get('/', function(req, res) {
    res.send('Hello world!');
});

//get HTTP method to get credits of user with id
router.get('/get/:id', function (req,res) {
    devCredits.find({id: req.params.id}, {_id:0, __v:0}, (err,data) =>{
    if (err) {
        res.json(err);
    }
    res.json(data);
});
});


//adding post HTTP method to update or create new record in mongodb
router.post('/post', function (req, res) {
    const credit = new devCredits({
        id: req.body.id,
        credits: req.body.credits,
    });

    devCredits.countDocuments ({ id: req.body.id}, function(err,count){
        if (count>0) {
            devCredits.findOneAndUpdate(
                {
                    id:req.body.id
                },
                {$inc: {
                    credits: req.body.credits,
                        },
                },
            {new: true},
            (err, devCredit) => {
                if (err) {
                    res.send(err);
                } else res.json(devCredit);
            }
                );
        } else {
            credit.save((err, credits) => {
                if (err){
                    res.send(err);
                }
                res.json(credits); 
            });
        }
    });
});

module.exports = router;