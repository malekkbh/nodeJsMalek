const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  categories: { type: [String], default: ["general"] },
  wight: Number,
});

const productModule = 
    mongoose.model("product", productSchema);

module.exports = productModule;
