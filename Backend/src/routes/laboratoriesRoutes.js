const express = require('express');
const router = express.Router();
const laboratoriesController = require('../controller/laboratoriesController');

// Get all approved laboratories
router.get('/laboratories', laboratoriesController.getLaboratories);

// approved labs
router.get('/approvedLabs', laboratoriesController.getapprovedLabs);

// Get lab by ID
router.get('/laboratories/:id', laboratoriesController.getLaboratoryById);
router.get('/getLaboratoriesByFlag', laboratoriesController.getLaboratoriesByFlag);
router.get('/getLaboratoriesById/:id', laboratoriesController.getLaboratoriesById);

// Create a new laboratory
router.post('/laboratories', laboratoriesController.createLaboratories);

router.put('/approvedLabs/:id',laboratoriesController.approvedLabs)


// Unused routes yet



// Delete a laboratory
router.delete('/rejectedLabs/:id', laboratoriesController.getrejectedLabs);

// Update lab approval status
// router.put('/:id/approval', laboratoriesController.updateApprovalStatus);


module.exports = router;
