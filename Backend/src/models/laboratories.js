const mongoose = require('mongoose');
// const testsSchema = require('./tests')

const laboratoriesSchema = new mongoose.Schema({
    labName: {
        type: String,
        required: true
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true // Add unique constraint for the email field
    // },
    images: {
        type: [Buffer],
    },
    // or use this (down here) for imgs if faced any issues and use this in the front src={laboratory.imageUrls[0]}
    // imageUrls: {
    //     type: [String],
    //     required: true
    //   },
    approvalStatus: {
        type: Boolean,
        enum: ['pending', 'approved', 'rejected'],
        default: false,
      },
},{ timestamps: true });

module.exports = mongoose.model('Laboratories', laboratoriesSchema);