const Checkout = require('../models/checkout');


const checkoutController = {
    create: async (req, res) => {
        try {
            // Extract the data from the request body
            const { firstName, lastName, testName, phoneNumber, cardHolderName } = req.body;

            // Create a new Checkout document
            const checkout = new Checkout({
                firstName,
                lastName,
                testName,
                phoneNumber,
                cardHolderName,
            });

            // Save the document to the database
            await checkout.save();

            res.status(200).json({ message: 'Checkout created successfully' });
        } catch (error) {
            console.error('Error creating checkout:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },


    // function to retrive the checkout detailes in need 
    getTest: async (req, res) => {
        try {
            // Retrieve the created checkout data
            const checkouts = await Checkout.find();

            res.status(200).json({ checkouts });
        } catch (error) {
            console.error('Error getting checkouts:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

};


module.exports = checkoutController;
