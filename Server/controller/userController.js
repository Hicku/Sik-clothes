const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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
  const { name, lastName, email, dateOfBirth, password } = req.body;

  // Check for name, email and password fields
  if (!name || !lastName || !email || !dateOfBirth || !password) {
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
    email,
    dateOfBirth,
    password: hashedPassword,
  });

  // Return user data
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
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
  const { name, lastName, email, dateOfBirth, password } = req.body;

  const userId = localStorage.getItem("user");

  const user = await User.findById(userId._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Update user
  user.name = name || user.name;
  user.lastName = lastName || user.lastName;
  user.email = email || user.email;
  user.dateOfBirth = dateOfBirth || user.dateOfBirth;

  // Hash password if provided
  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  // Save new details
  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    lastName: updatedUser.lastName,
    email: updatedUser.email,
    dateOfBirth: updatedUser.dateOfBirth,
    token: generateToken(updatedUser._id),
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
};
