const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: {
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
      category: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      features: {
        type: String,
        required: true
      },
      dateOfPurchase: {
        type: Date,
        default: Date.now
      },
      username: {
        type: String
      },
      kilometers: {
        type: Number,
      }
});

const Book = mongoose.model("car", carSchema);

module.exports = car;