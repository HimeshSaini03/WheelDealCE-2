const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;