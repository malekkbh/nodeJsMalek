const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  id: Number,
});

const StudentModule = mongoose.model("StudentModule", StudentSchema);

module.exports = StudentModule;
