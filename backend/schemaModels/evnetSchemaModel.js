// models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter event name"],
  },
  description: {
    type: String,
    required: [true, "Please enter event description"],
  },
  category: {
    type: String,
    required: [true, "Please select a category"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter discount price"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  images: [
    {
      public_id: String, // if using Cloudinary or similar
      url: {
        type: String,
        required: true,
      },
    },
  ],
  shop: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    shopId: {
      type: String,
      required: true,
    },
    avatar: {
      url: {
        type: String,
      },
    },
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  finishDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Event", eventSchema);
