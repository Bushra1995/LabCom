const mongoose = require('mongoose');

const labRequestSchema = new mongoose.Schema({

    approved: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('LabRequest ', labRequestSchema);
