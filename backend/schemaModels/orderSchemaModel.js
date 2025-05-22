const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  cart: { type: Array, required: true },
  address: { type: Object, required: true },
  user: { type: Object, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "Processing" },
  paymentInfo: { type: String, default: "Cash On Delivery" },
  paidAt: { type: Date, default: Date.now },
  deliveredAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Order', orderSchema);
