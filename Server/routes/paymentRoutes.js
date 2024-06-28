const express = require("express");
const router = express.Router();
const {
  makePayment,
  addCard,
  createCustomer,
} = require("../controller/paymentController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(makePayment);
router.route("/addCard/:id").post(addCard);
router.route("/createCustomer").post(createCustomer);

module.exports = router;
