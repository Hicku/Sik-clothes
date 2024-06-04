const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");
const User = require("../model/userModel");

//desc: Get all products
//route: GET /api/products
//access: Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getCategory = asyncHandler(async (req, res) => {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ message: "Category parameter is missing" });
  }

  const products = await Product.find({ category: category });
  res.json(products);
});

module.exports = { getProducts, getCategory };
