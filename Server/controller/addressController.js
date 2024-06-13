const asyncHandler = require("express-async-handler");

const Address = require("../model/addressModel");
const User = require("../model/userModel");

// Desc: get all addresses
// Route: POST /api/address
// Access: Private

const getAllAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find({ user: req.user.id });

  res.status(200).json(addresses);
});

// Desc: Create Address
// Route: POST /api/address
// Access: Private

const createAddress = asyncHandler(async (req, res) => {
  // Check for all fields
  if (
    !req.body.number ||
    !req.body.street ||
    !req.body.city ||
    !req.body.postcode ||
    !req.body.country
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // create address
  const address = await Address.create({
    number: req.body.number,
    street: req.body.street,
    city: req.body.city,
    postcode: req.body.postcode,
    country: req.body.country,
    user: req.user.id,
  });

  res.status(200).json(address);
});

// Desc: Update Address
// Route: PUT /api/address
// Access: Private

const updateAddress = asyncHandler(async (req, res) => {
  // Find address by id
  const address = await findById(req.params.id);

  // If no address, throw error
  if (!address) {
    res.status(401);
    throw new Error("Address not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if goal/user id matches matches user id
  if (!address.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorised");
  }

  // update address
  const updatedAddress = await Address.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedAddress);
});

// Desc: Delete Address
// Route: DELETE /api/address/delete
// Access: Private

const deleteAddress = asyncHandler(async (req, res) => {
  // Find address by id
  const address = await Address.findById(req.params.id);

  // If no address, throw error
  if (!address) {
    res.status(400);
    throw new Error("Address not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if goal/user id matches matches user id
  if (address.user.toString() !== res.user.id) {
    res.status(401);
    throw new Error("User not authorised");
  }

  await address.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createAddress,
  updateAddress,
  deleteAddress,
  getAllAddresses,
};
