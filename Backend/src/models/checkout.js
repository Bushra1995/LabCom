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
    cardHolderName: {
        type: String,
        required: true
    },
    // selectedTests: {
    //     type: String,
    //     required: true
    // },
    

});

module.exports = mongoose.model('Checkout', checkoutSchema);
