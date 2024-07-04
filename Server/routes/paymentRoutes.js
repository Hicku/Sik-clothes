const express = require("express");
const router = express.Router();
const {
  makePayment,
  addCard,
  createCustomer,
  getCards,
} = require("../controller/paymentController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(makePayment);
router.route("/addCard").post(addCard);
router.route("/createCustomer").post(createCustomer);
router.route("/getCards").get(getCards);

module.exports = router;
