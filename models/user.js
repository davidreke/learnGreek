const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

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
    trim: false,
    minlength: [8, '"Minminum password length is 8 characters'],
  },
  words: [wordSchema]
});

// hash passwords using SALT
userSchema.pre('save', async function (next){
  const salt = await bcrypt.genSalt()

  this.password = await bcrypt.hash(this.password, salt)

  console.log(this.password)
  next()
})

// static method to login the user

userSchema.statics.login = async function (eMail, password){
  const user = await this.findOne({ eMail });
  if(user){ 
    console.log('user email:', user.eMail ,'password: ',password,'user.password: ', user.password)
    const auth = await bcrypt.compare(password, user.password)
    if(auth){
      return user
    }
    throw Error('incorrect password line 67')
  }
  throw Error('incorrect email')

}



const User = mongoose.model("user", userSchema);

module.exports = User;