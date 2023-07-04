const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    labName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'laboratories',
        required: true
    },
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
    testConditions: {
        type: String,
        required: true
    },
    testTiming: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }

});

const Test = mongoose.model('Test', testSchema); // Create the Data model

module.exports = Test; // Export the Data model
