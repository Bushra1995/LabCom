const express = require('express');
const router = express.Router();
const testController = require('../controller/testController');

router.get('/getTest', testController.getTest);

// Get the lab name in labPage
router.get('/:id', testController.getLabName);

// Create a new test
router.post('/test', testController.createTest);

module.exports = router;