const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// @desc    Add a new card for a customer
// @route   POST /api/cards/add
// @access  Private (example: requires authentication)
const addCard = asyncHandler(async (req, res) => {
  const { customerId, cardInfo } = req.body;

  try {
    // Create a PaymentMethod with card details
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number: cardInfo.number,
        exp_month: cardInfo.exp_month,
        exp_year: cardInfo.exp_year,
        cvc: cardInfo.cvc,
        name: cardInfo.name,
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
  } catch (error) {
    console.error("Error adding card:", error);
    res.status(500).json({ error: "Failed to add card" });
  }
});

// @desc    Make a payment using a PaymentIntent
// @route   POST /api/payment
// @access  Private
const makePayment = asyncHandler(async (req, res) => {
  const { customerId, amount, description } = req.body;

  try {
    // Create PaymentIntent using customer ID and amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // amount in cents
      currency: "gbp",
      customer: customerId,
      description: description,
    });

    // Confirm the PaymentIntent to complete the payment
    const confirmedIntent = await stripe.paymentIntents.confirm(
      paymentIntent.id
    );

    res
      .status(200)
      .json({ message: "Payment successful!", paymentIntent: confirmedIntent });
  } catch (error) {
    console.error("Error making payment:", error);
    res.status(500).json({ error: "Failed to make payment" });
  }
});

module.exports = {
  addCard,
  makePayment,
};
