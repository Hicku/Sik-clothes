const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

//desc: Authentication User
//route: POST /api/users/login
//access: Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for email and password fields
  if (!email || !password) {
    // Return server error
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if user exists
  const user = await User.findOne({ email });

  // Check if user exists and password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    // Return user data
    res.json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      token: generateToken(user._id),
    });
  } else {
    //Return not authorized
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Return success message
  res.json({
    message: "User logged in successfully",
  });
});

//desc: Get User Profile
//route: GET /api/users/me
//access: Private

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user._id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Desc: User controller
// route: POST /api/users
// access: Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, lastName, dateOfBirth, email, password } = req.body;

  // Check for name, email and password fields
  if (!name || !email || !lastName || !dateOfBirth || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  // Return error if user exists
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    lastName,
    dateOfBirth,
    email,
    password: hashedPassword,
  });

  // Return user data
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    // Return server error
    res.status(400);
    throw new Error("Invalid user data");
  }

  // Return success message
  res.json({
    message: "User registered successfully",
  });
});

//desc: Update User
//route: PUT /api/users/:id
//access: Private

const updateUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, dateOfBirth } = req.body;

  // Get user id from URL params
  const userId = req.params.id;

  // Check if user exists
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Update user details
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      name: name || user.name,
      lastName: lastName || user.lastName,
      email: email || user.email,
      dateOfBirth: dateOfBirth || user.dateOfBirth,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    lastName: updatedUser.lastName,
    dateOfBirth: updatedUser.dateOfBirth,
    email: updatedUser.email,
    token: generateToken(updatedUser._id),
  });
});

// Update password
const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Check for current password and new password fields
  if (!currentPassword || !newPassword) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Get user id from URL params
  const userId = req.params.id;

  // Check if user exists
  const user = await User.findById(userId);

  // if user does not exist, return error
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Check if current password is correct
  if (
    !(await bcrypt.compare(currentPassword, user.password)) ||
    currentPassword === ""
  ) {
    res.status(401);
    throw new Error("Invalid password");
  }

  // Hash new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  // Update password
  await User.findByIdAndUpdate(
    userId,
    { password: hashedPassword },
    { new: true }
  );

  res.status(200).json({
    message: "Password updated successfully",
  });
});

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  updatePassword,
};
