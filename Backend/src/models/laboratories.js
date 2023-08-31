const mongoose = require('mongoose');
// const testsSchema = require('./tests')

const laboratoriesSchema = new mongoose.Schema({
    labName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    images: {
        type: [Buffer],
    },
    userId: {
        type: String,
    },
    flag: {
        type: String,
        default: 0,
    },

    // or use this (down here) for imgs if faced any issues and use this in the front src={laboratory.imageUrls[0]}
    // imageUrls: {
    //     type: [String],
    //     required: true
    //   },
    // approved: {
    //     type: Boolean,
    //     enum: ['pending', 'approved', 'rejected'],
    //     default: false,
    //   },
},{ timestamps: true });

module.exports = mongoose.model('Laboratories', laboratoriesSchema);
