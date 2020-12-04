const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
require('dotenv').config();

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('../client/build'));

const uri = process.env.URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
her
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/userRouter');
const wordRouter = require('./routes/wordRouter');

app.use('/user', userRouter);
app.use('/words', wordRouter);



app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});
