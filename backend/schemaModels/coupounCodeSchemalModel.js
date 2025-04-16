const mongoose = require('mongoose');

const coupounCodeSchema = mongoose.Schema({
    name: {type: String, required: [true, "Enter your coupon code"]},
    value: {type: Number, required: true},
    minAmount: {type: Number},
    maxAmount: {type: Number},
    shopId: {type: String, required: true},
    selectedProduct: {type: String},
    createdAt: {type: Date, default: Date.now()}
}, {versionKey: false});

module.exports = mongoose.model("CoupounCode", coupounCodeSchema);