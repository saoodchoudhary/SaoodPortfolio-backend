const mongoose = require('mongoose');

const contactMeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const ContactMeModel = mongoose.model('ContactMe', contactMeSchema);

module.exports = ContactMeModel;