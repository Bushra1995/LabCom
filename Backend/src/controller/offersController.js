const Offer = require('../models/offers');

exports.getOffers = async (req, res) => {
    try {
        // const { testName, testDescription, testTiming } = req.body;                             // change starts here bushra
        // const Offers = await Contact.find({ testName, testDescription, testTiming });
        const offers = await Offer.find();

        res.status(201).json(offers);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
