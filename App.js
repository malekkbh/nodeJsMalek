const express = require("express");
const mongoose = require("mongoose");
const StudentModule = require("./modules/student.module");
const Route = require("./routs/Route");
// const StudentModule = require("./modules/student.module");

const app = express();
app.use(express.json());
app.use('/' , Route)

const mongooseLink =
  "mongodb+srv://malek:123456780@test.c38nkyc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});



app.get("/app", (req, res) => {
  res.status(200).json({
    message: "yes",
    batata: "5kg",
  });
});

app.post("/creatNewStudent", (req, res) => {
  StudentModule.create({
    name: req.body.name,
    id: req.body.id,
  }).then((response) => {
    res.status(200).json({
      message: "student added.",
    });
  }).catch(e=>{
    res.status(500).json({message:'error'})
  });
});

app.get("/getAllUsers",  (req, res) => {
  // try {
  //   const allUsers = await StudentModule.find();
  // } catch (error) {
  //   console.log("get all students error: ", e);
  // }
  StudentModule.find()
    .then((stRes) => {
      console.log("");
      res.status(200).json({
        message: "done",
        users: stRes,
      });
    })
    .catch((e) => {
      console.log("get all students error: ", e);
      res.status(500).json({error: true , errorMessage: e})
    });
});

app.post('/getUserByName' , (req , res) => {
  StudentModule.find({name:req.body.name})
  .then(students => {
    res.status(200).json(students)
  })
})


module.exports = app ;