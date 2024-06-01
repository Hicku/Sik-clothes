const express = require("express");
const router = express.Router();
const { getProducts } = require("../controller/productController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts);

module.exports = router;
