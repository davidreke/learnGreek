const User = require ('../models/user')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


// ***handle errors***

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.password = "that email is incorrect";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(properties)
      errors[properties.path] = properties.message;
    });
  }

  return errors
}

// set maxAge of login to 7 days
const maxAge = 7 * 24 * 60 *60

// create and send token
const createToken = (id) => {
    // make sure to change secret before deployment
    return jwt.sign({id}, 'secret placeholder',{expiresIn: maxAge})
}

module.exports.signup_post = async (req, res) => {
  // destructure to just get the email and password from the body
  const { eMail, password } = req.body;
  // console.log(email, password)

  // add a try catch block

  try {
    const user = await User.create({
      eMail,
      password,
      words: [

      ]
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    // (max age is in seconds and this take milliseconds)
    res.status(201).json({ user: user._id });
  } catch (err) {
      console.log(err)
    const errors = handleErrors(err);
    // console.log(err);
    res.status(400).json({ errors });
  }

  res.send('new signup')
};

module.exports.login_post = async (req, res) => {
  console.log(req.body)
  // shows us the data that was sent.
  // console.log(req.body)
  // destructure to just get the email and password from the body
  const { eMail, password } = req.body;
    console.log('login called')
  try {
    const user = await User.login(eMail, password);

    // creates and sends a jwt cookie
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

  console.log(eMail, password)
  res.send('user login')
};

// logout route
module.exports.logout_get = (req, res) => {
  // replaces cookie with a blank cookie with a short expire date
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};