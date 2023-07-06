const express = require('express');
const router = express.Router();
const labRequestController = require('../controller/labRequestController');


// Get lab requests that require approval
router.get('/lab-requests/pending', labRequestController.getPendingLabRequests);

// Approve a lab request
router.patch('/lab-requests/approve/:id', labRequestController.approveLabRequest);

// Reject a lab request
router.patch('/lab-requests/reject/:id', labRequestController.rejectLabRequest);




module.exports = router;