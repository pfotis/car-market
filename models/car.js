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
  images: [{
    type: String
  }],
  bodyType: {
    type: String,
    required: true
  },
  dateOfPurchase: {
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
  },
  postcode: {
    type: Number,
    required: true
  },
  stateAU: {
    type: String,
    required: true
  }
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;

