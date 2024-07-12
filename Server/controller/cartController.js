const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel");

//desc: Add to cart
//route: POST /api/cart
//access: Public

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity, price, size } = req.body;

  let cart = await Cart.findOne({ userId: req.params.userId });

  if (!cart) {
    cart = new Cart({ userId: req.params.userId, items: [] });
  }

  const itemIndex = cart.items.findIndex((item) =>
    item.productId.equals(productId)
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity, price, size });
  }

  cart.totalPrice = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  await cart.save();
  res.status(200).json(cart);
});

//desc: Update cart
//route: PUT /api/cart
//access: Public

//desc: Delete from cart
//route: DELETE /api/cart
//access: Public

module.exports = {
  addToCart,
};
