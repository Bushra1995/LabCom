const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({
    labName: {
        type: String,
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

module.exports = mongoose.model('Offers', offersSchema);
