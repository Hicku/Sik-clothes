const express = require("express");
const router = express.Router();
const { makePayment, addCard } = require("../controller/paymentController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(makePayment);
router.route("/addCard/:id").post(addCard);

module.exports = router;
