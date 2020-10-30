const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, 'secret placeholder', (err, decodedToken => {
            if (err){
                console.log(err.message);
                res.redirec('/login')
            } else {
                console.log(decodedToken)
                next()
            }
        }))
    } else {
        res.redirect('login')
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token){
        jwt.verify(token, 'secret placeholder', async (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.locals.user = null
            } else {
                console.log(decodedToken)
                let user = await User.findById(decodedToken.id)

                res.locals.user = user;
                next()
            }
        });
    } else {
        res.local.user = null
        next()
    }
}

module.exports = {requireAuth, checkUser}