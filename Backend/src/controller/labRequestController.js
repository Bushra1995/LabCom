const LabRequest = require('../models/labRequest');


// Get lab requests that require approval
exports.getPendingLabRequests = async (req, res) => {
    try {
        const pendingRequests = await LabRequest.find({ approved: false });
        res.status(200).json(pendingRequests);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get pending lab requests', error });
    }
};


// Approve a lab request
exports.approveLabRequest = async (req, res) => {
    try {
        const labRequestId = req.params.id;
        const labRequest = await LabRequest.findById(labRequestId);

        if (!labRequest) {
            return res.status(404).json({ message: 'Lab request not found' });
        }

        // Perform any approval-related logic here
        // Update the lab request status or any other relevant fields

        labRequest.approved = true;
        await labRequest.save();

        res.status(200).json({ message: 'Lab request approved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to approve lab request', error });
    }
};

// ? Make sure if the approval should make the lab POSt in the home page or what;s the logic here

// Reject a lab request
exports.rejectLabRequest = async (req, res) => {
    try {
        const labRequestId = req.params.id;
        const labRequest = await LabRequest.findById(labRequestId);

        if (!labRequest) {
            return res.status(404).json({ message: 'Lab request not found' });
        }

        // Perform any rejection-related logic here
        // Update the lab request status or any other relevant fields

        // Remove the lab request from the database
        await labRequest.remove();

        res.status(200).json({ message: 'Lab request rejected successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to reject lab request', error });
    }
};
