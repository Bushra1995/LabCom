const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkoutController');

router.post('/checkout', checkoutController.create);

module.exports = router;