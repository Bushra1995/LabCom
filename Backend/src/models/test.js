const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true
    },
    testDescription: {
        type: String,
        required: true
    },
    sampleType: {
        type: String,
        required: true
    },
    testRequirements: {
        type: String,
        required: true
    },
    testTiming: {
        type: String,
        required: true
    },
    testPrice: {
        type: String,
        required: true
    }

});

const Test = mongoose.model('Test', testSchema); // Create the Data model

module.exports = Test; // Export the Data model
