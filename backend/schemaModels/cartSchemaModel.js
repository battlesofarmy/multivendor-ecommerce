const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter your product name"]},
    email: {type: String, required: [true, "Inter your Email Address"]},
    description: {type: String, required: [true, "Inter your product description!"]},
    category: {type: String, required: [true, "Inter your product category!"]},
    tags: {type: String},
    originalPrice: {type: String, required: [true, "Inter your product price"]},
    discountPrice: {type: String, required: [true, "Inter your discount price"]},
    stock: {type: Number, required: [true, "Inter your product stock"]},
    images: [
        {
          url: {
            type: String,
            required: true,
          },
        },
      ],
      
    reviews: [
        {
            user: { 
                name: {type: String},
                avatar: { url: {type: String}},
            },
            rating: {type: Number},
            comment: {type: String},
        }
    ],
    ratings: {type: Number}, 
    shop: {type: Object, required: true},
    soldOut: {type: Number, default: 0},
    count: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now()}
}, {versitionKey: false});

module.exports = mongoose.model("Cart",cartSchema);