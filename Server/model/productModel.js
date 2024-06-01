const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  image: {
    type: String,
    required: [true, "Please provide an image"],
  },
});

module.exports = mongoose.model("Product", productSchema);
