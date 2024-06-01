const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const ProductModel = require("./model/productModel");

//

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
