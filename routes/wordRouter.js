const router = require("express").Router();
let User = require('../models/user')


router.get('/:id', (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
    .then((user)=> {
        console.log(user.eMail, user.words, user)
        res.status(200).json(
            user
        )
    })
    .catch((err) => {res.status(400).json("Error: "+err)})
})


router.post("/add/:id",(req, res) =>{
    console.log(req)
    var greek = req.body.greek;
    var english = req.body.english;
    var success = req.body.success;
    var timeStamp = req.body.timeStamp
    var newWord = {
        greek: greek,
        english: english,
        success: success,
        timeStamp: timeStamp
    }
    console.log(newWord)
    User.findOneAndUpdate({ _id: req.params.id }, {
            $push: {
                words: newWord
            }
        })
    .then((user) => {
      if(!user){
                return res.status(404).json({ 
                    message: 'Not User matches given ID'
                });
            }

            res.status(200).json(user);
    })
    .catch((err) => {res.status(400).json("Error: "+err)})
});

router.put("/update/:id", (req, res) =>{
    User.findOneAndUpdate({
        _id: req.params.id,
        _id: req.body.id},{
            $set: {
                "words.$.success": req.body.success,
                "word.&.timeStamp": Date.now()
            }
        }).then(
            User.findById(req.params.id)
            .then(user => {
                res.status(200).json(user)
            })
        )
        .catch((err) => {res.status(400).json("Error: "+err)})
      
})




module.exports = router;