import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  number: {
    type: Number,
    required: [true, "Please provide a number"],
  },
  street: {
    type: String,
    required: [true, "Please provide a street"],
  },
  city: {
    type: String,
    required: [true, "Please provide a city"],
  },
  postcode: {
    type: String,
    required: [true, "Please provide a postcode"],
  },
  country: {
    type: String,
    required: [true, "Please provide a country"],
  },
});

export default mongoose.model("Address", addressSchema);
