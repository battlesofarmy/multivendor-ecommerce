const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter your product name"]},
    description: {type: String, required: [true, "Inter your product description!"]},
    category: {type: String, required: [true, "Inter your product category!"]},
    tags: {type: String},
    originalPrice: {type: Number, required: [true, "Inter your product price"]},
    discountPrice: {type: Number, required: [true, "Inter your discount price"]},
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
    shopId: {type: String, required: [true, "Inter your shop id"]},
    shop: {type: Object, required: true},
    soldOut: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now()}
}, {versitionKey: false});

module.exports = mongoose.model("Product",productSchema);