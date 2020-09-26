const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  "greek": {
    "type": String,
    "unique":true,
    "required": true,
    "trim": true,
    "minlength": 1
  },
  "english": {
    "type": String,
    "required": true,
    "minlength": 1
  },
  "success":{
      "type": Number,
      "required": true
  },
  "timeStamp":{
      "type": Date,
      "required":true
  }
});

const userSchema = new Schema({
    "eMail":{
        "type": String,
        "required":true,
        "unique": true,
        "trim": true,
        "minlength": 3
    },
    "password":{
        "type": String,
        "required": true,
        "trim": true,
        "minlength": 8
    },
    "words": [wordSchema]
        
});

const User = mongoose.model("user", userSchema);

module.exports = User;