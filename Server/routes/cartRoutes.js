const express = require("express");
const router = express.Router();

const { addToCart, removeFromCart } = require("../controller/cartController");

// router.route("/:userId").get(getCart);
router.route("/:userId").post(addToCart);
// router.route("/:userId").put(updateCart);
// router.route("/:userId/:productId").delete(deleteFromCart);

module.exports = router;
