const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    conversationId: {tyepe: String},
    text: {type: String},
    sender: {tyep: String},
    images: {
        publicId : {type: String},
        url: {type: String}
    }
}, {timestams: true, versionKey: false});

module.exports = messagesSchema.module("Message", messagesSchema);