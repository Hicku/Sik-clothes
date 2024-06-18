const asyncHandler = require("express-async-handler");

const Address = require("../model/addressModel");

// Desc: get all addresses
// Route: POST /api/address
// Access: Private

const getAllAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find({ user: req.params.id });

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
    user: req.body.user,
  });

  res.status(200).json(address);
});

// Desc: Update Address
// Route: PUT /api/address
// Access: Private

// const updateAddress = asyncHandler(async (req, res) => {
//   const addressCheck = await Address.findById(req.params.id);
//   const user = req.body.user;

//   // If no address, throw error
//   if (!addressCheck) {
//     res.status(401);
//     throw new Error("Address not found");
//   }

//   // Check for user
//   if (!user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // update address
//   const updatedAddress = await Address.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );

//   res.status(200).json(updatedAddress);
// });

const updateAddress = asyncHandler(async (req, res) => {
  const { id, city, country, number, postcode, street } = req.body;

  // Find the address by id
  const address = await Address.findById(id);

  // Check if address exists
  if (!address) {
    res.status(404).json({ message: "Address not found" });
    return;
  }

  // Update the address fields
  address.city = city;
  address.country = country;
  address.number = number;
  address.postcode = postcode;
  address.street = street;

  // Save the updated address
  const updatedAddress = await address.save();

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
