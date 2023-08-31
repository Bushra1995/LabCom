const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    testName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cardHolderName: {
        type: String,
        required: false
    },
    

});

module.exports = mongoose.model('Checkout', checkoutSchema);
