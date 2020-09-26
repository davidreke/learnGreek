const router = require("express").Router();

let User = require('../models/user');

router.route('/signup').post((req, res)=>{
    const eMail = req.body.eMail
    const password = req.body.password
    const words = [];

    const newUser = new User({
        eMail,
        password,
        words
    })

    newUser.save()
        .then(()=>{res.json('user added!')})
        .catch((err) =>{res.status(400).json('error: '+ err)})
})

module.exports = router;