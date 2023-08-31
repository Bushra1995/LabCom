const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkoutController');
const testCheckoutController = require('../controller/testCheckoutController');

router.post('/checkout', checkoutController.create);
router.get('/getTest', checkoutController.getTest);


// to post test checkout
router.post('/testCheckout', testCheckoutController.testCheckout);

module.exports = router;