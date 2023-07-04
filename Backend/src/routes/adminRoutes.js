const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Get all labs
router.get('/admin', adminController.getAdmin);

// Create a new approval
router.post('/admin', adminController.createAdmin);

// Update an existing Admin
router.put('/admin/:id', adminController.updateAdmin);

// Delete a Admin
router.delete('/admin/:id', adminController.deleteAdmin);

// Update lab approval status
router.put('/:id/approval', adminController.updateApprovalStatus);


module.exports = router;
