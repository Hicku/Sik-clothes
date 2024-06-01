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

module.exports = { getProducts };
