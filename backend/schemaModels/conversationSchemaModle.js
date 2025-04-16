const mongoose  = require('mongoose');

const conversationSchema = mongoose.Schema({
    groupTitle: {type: String},
    members: {type: String},
    lastMessage: {type: String},
    lastMessageId: {type: String},
},{timestamps: true, versionKey: false});

module.exports = mongoose.model('Conversation', conversationSchema);