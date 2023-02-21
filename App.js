const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

//get req

const mongooseLink = "mongodb+srv://malek:123456780@test.c38nkyc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongooseLink) ; 
mongoose.connection.on('connected' , ()=> {
    console.log("mongo connected");
})

app.get("/app", (req, res) => {
  res.status(200).json({
    message: "yes",
  });
});

module.exports = app; 
