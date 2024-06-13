const express = require("express");
const router = express.Router();
const {
  createAddress,
  updateAddress,
  deleteAddress,
  getAllAddresses,
} = require("../controller/addressController");

const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(createAddress);
router.route("/").get(getAllAddresses);
router.route("/:id").put(updateAddress);
router.route("/:id").delete(deleteAddress);

module.exports = router;
