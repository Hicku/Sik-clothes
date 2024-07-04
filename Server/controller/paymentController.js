const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// @desc    Get cards for a customer
// @route   GET /api/cards
// @access  Private (example: requires authentication)
const getCards = asyncHandler(async (req, res) => {
  const { customerId } = req.query;

  const paymentMethods = await stripe.paymentMethods.list({
    customer: customerId,
    type: "card",
  });

  res.status(200).json({ paymentMethods });
});

// @desc    Add a new card for a customer
// @route   POST /api/cards/add
// @access  Private (example: requires authentication)
const addCard = asyncHandler(async (req, res) => {
  const { customerId, token } = req.body;

  console.log("Received customerId:", customerId);
  console.log("Received token:", token);

  // Create payment method using token id
  const paymentMethod = await stripe.paymentMethods.create({
    type: "card",
    card: {
      token: token,
    },
  });

  // Attach the PaymentMethod to the customer
  await stripe.paymentMethods.attach(paymentMethod.id, {
    customer: customerId,
  });

  // Optionally set the default PaymentMethod for the customer
  await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethod.id,
    },
  });

  res.status(201).json({ message: "Card added successfully!" });
});

// @desc    Create a Stripe customer and return customer ID
// @route   POST /api/customers
// @access  Private
const createCustomer = asyncHandler(async (req, res) => {
  const { email, name } = req.body;

  const customer = await stripe.customers.create({
    email,
    name,
  });

  res.status(201).json({ customerId: customer.id });
});

// @desc    Make a payment using a PaymentIntent
// @route   POST /api/payment
// @access  Private
const makePayment = asyncHandler(async (req, res) => {
  const { customerId, amount, description } = req.body;

  // Create PaymentIntent using customer ID and amount
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // amount in cents
    currency: "gbp",
    customer: customerId,
    description: description,
  });

  // Confirm the PaymentIntent to complete the payment
  const confirmedIntent = await stripe.paymentIntents.confirm(paymentIntent.id);

  res
    .status(200)
    .json({ message: "Payment successful!", paymentIntent: confirmedIntent });
});

module.exports = {
  getCards,
  addCard,
  createCustomer,
  makePayment,
};
