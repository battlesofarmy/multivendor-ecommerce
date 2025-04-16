const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    cart: {type: Array, required: true},
    shippingAddress: {type: Object, requierd: true},
    user: {type: Object, required: true},
    totalPrice: {tyep: Number, required: true},
    status: {type: String, default: "Processing"},
    paymentInfo: {
        id: {type: String}, 
        status: {type: String},
        type: {type: String}
    },
    paidAt: {type: Date, default: Date.now()},
    deliveredAt: {tyep: Date},
    createdAt: {type: Date, default: Date.now()}
}, {versionKey: false});

module.exports = mongoose.model('Order', orderSchema);