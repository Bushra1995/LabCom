// const mongoose = require('mongoose');
// // const testsSchema = require('./tests')

// const adminSchema = new mongoose.Schema({
//     labName: {
//         type: String,
//         required: true
//     },
//     // owner: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: 'User',
//     //     required: true,
//     // },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     images: {
//         type: [Buffer],
//         required: true
//     },
//     // or use this (down here) for imgs if faced any issues and use this in the front src={laboratory.imageUrls[0]}
//     // imageUrls: {
//     //     type: [String],
//     //     required: true
//     //   },
//     approvalStatus: {
//         type: String,
//         enum: ['pending', 'approved', 'rejected'],
//         default: 'pending',
//     },
// }, { timestamps: true });

// module.exports = mongoose.model('Admin', adminSchema);
