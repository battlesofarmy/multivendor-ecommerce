const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid: {type: String, required: [true, "Enter Firebase UID"]},
    name: {type: String, required: [true, "Enter your Name"]},
    email: {type: String, required: [true, "Enter your email address"]},
    phoneNumber: {type: Number},
    address: [{
        country: {type: String},
        city: {type: String},
        address1: {type: String},
        address2: {type: String},
        zipCode: {type: Number},
        addressType: {type: String}
    }],
    role: {type: String, default: "user"},
    avatar: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    resetPasswordToken: String,
    resetPasswordTime: Date
});

module.exports = mongoose.model("User", userSchema);