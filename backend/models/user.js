const mongoose = require('mongoose');
const {isEmail} = require('validator')

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  greek: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    index: { unique: true, sparse: true },
  },
  english: {
    type: String,
    required: true,
    minlength: 1
  },
  success: {
    type: Number,
    required: true
  },
  timeStamp: {
    type: Date,
    required: true
  },
});

const userSchema = new Schema({
  eMail: {
    type: String,
    required: [true, "Please Enter an e-mail"],
    trim: true,
    minlength: 3,
    validate: [isEmail, "please enter a valid-email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please Enter a password"],
    trim: true,
    minlength: [8, '"Minminum password length is 8 characters'],
  },
  words: [wordSchema]
});

const User = mongoose.model("user", userSchema);

module.exports = User;