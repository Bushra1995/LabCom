const express = require('express');
const router = express.Router();
const offersController = require('../controller/offersController');

router.get('/', offersController.getOffers);

module.exports = router;