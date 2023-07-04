const express = require('express');
const router = express.Router();
const laboratoriesController = require('../controller/laboratoriesController');

// Get all approved laboratories
router.get('/laboratories', laboratoriesController.getLaboratories);

// Get lab by ID
router.get('/laboratories/:id', laboratoriesController.getLaboratoryById);

// Create a new laboratory
router.post('/laboratories', laboratoriesController.createLaboratories);

// Update an existing laboratory
router.put('/laboratories/:id', laboratoriesController.updateLaboratory);

// Delete a laboratory
router.delete('/laboratories/:id', laboratoriesController.deleteLaboratory);

// Update lab approval status
router.put('/:id/approval', laboratoriesController.updateApprovalStatus);


module.exports = router;
