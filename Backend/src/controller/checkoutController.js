const Checkout = require('../models/checkout');

const checkoutController = {
    create: async (req, res) => {
        try {
            // Extract the data from the request body
            const { firstName, lastName, cardHolderName, selectedTests } = req.body;

            // Create a new Checkout document
            const checkout = new Checkout({
                firstName,
                lastName,
                cardHolderName,
                selectedTests,
            });

            // Save the document to the database
            await checkout.save();

            res.status(200).json({ message: 'Checkout created successfully' });
        } catch (error) {
            console.error('Error creating checkout:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

module.exports = checkoutController;
