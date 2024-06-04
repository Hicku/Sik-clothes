const express = require("express");
const router = express.Router();
const { getProducts, getCategory } = require("../controller/productController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts);
router.route("/category").get(getCategory);

module.exports = router;
