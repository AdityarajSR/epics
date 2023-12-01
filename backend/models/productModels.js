const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter the producct description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "price cannot exceed 8 digits"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Plese enter the product category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
