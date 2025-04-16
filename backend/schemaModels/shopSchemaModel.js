const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {type: String, required: [true, "Enter your name!"]},
    email: {type: String, required: [true, "Enter your email address!"]},
    password: {
        type: String,
        required: [true, "Enter your password!"],
        minLength: [6, "Password should be greater then 6 char!"],
        select: false
    },
    description: {type: String},
    address: {type: String, required: [true, "Enter your address!"]},
    phoneNumber: {type: Number, required: [true, "Enter your phone number!"]},
    role: {type: String, default: "Seller"},
    avatar: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    zipCode: {type: Number, required: [true, "Enter your zipcode!"]},
    withdrawMethod: {type: Object},
    availableBalance: {type: Number, default: 0},
    transections: [
        {
            amount: {type: Number, required: true},
            status: {type: String, default: "Processing"},
            createdAt: {type: Date, default: Date.now()},
            updatedAt: {type: Date}
        }
    ],
    createdAt: {type: Date, default: Date.now()},
    resetPasswordToken: String,
    resetPasswordTime: Date
}, {versionKey: false});

module.exports = mongoose.model('Shop', shopSchema);