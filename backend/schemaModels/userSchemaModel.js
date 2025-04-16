const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: [true, "Enter your Name"]},
    email: {type: String, required: [true, "Enter your email address"]},
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minLength: [6, "password should be use with"],
        select: false
    },
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
    avatar: {
        publicId: {tyep: String, required: true},
        url: {type: String, required: true}
    },
    createdAt: {type: Date, default: Date.now()},
    resetPasswordToken: String,
    resetPasswordTime: Date
});

module.exports = mongoose.model("User", userSchema);