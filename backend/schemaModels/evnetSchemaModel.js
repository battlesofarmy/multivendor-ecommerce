const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {type: String, required: [true, "Enter your evnt name!"]},
    description: {type: String, required: [true, "Enter your event description!"]},
    category: {type: String, required: [true, "Enter your event category!"]},
    startDate: {type: Date, required: [true, "Enter your start date!"]},
    finishDate: {type: Date, required: [true, "Enter your finish date!"]},
    status: {type: String, default: "Runnig"},
    tags: {type: String},
    originalPrice: {type: Number},
    discountPrice: {type: Number, required: [true, "Enter your disocunt price!"]},
    stock: {type: Number, required: [true, "Enter your stock price!"]},
    images: [
        {
            publicId: {type: String, required: [true, "Enter your public id"]},
            url: {type: String, required: [true, "Enter your image url"]}
        }
    ],
    shopId: {type: String, required: [true, "Enter your shop id"]},
    shop: {type: Object, required: true},
    soldOut: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now()}
}, {versionKey: false});

module.exports = mongoose.model("Event", eventSchema);