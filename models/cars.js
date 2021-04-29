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
  dateOfPurchase: {
    type: Date,
    default: Date.now
  },
  kilometers: {
    type: Number,
  }
});

const Car = mongoose.model("Car", carSchema);

