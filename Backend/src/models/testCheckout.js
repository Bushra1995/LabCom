const mongoose = require('mongoose');

const testCheckoutSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    

});

const TestCheck = mongoose.model('TestCheck', testCheckoutSchema); // Create the Data model

module.exports = TestCheck; // Export the Data model
