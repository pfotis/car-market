const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  yearOfPurchase: {
    type: Date,
    default: Date.now,
    required: true
  },
  kilometers: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Car = mongoose.model("Car", carSchema);

