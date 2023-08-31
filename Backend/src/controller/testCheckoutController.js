const testCheckout = require('../models/testCheckout');


exports.testCheckout = async (req, res) => {
    try {
        const { testName } = req.body;
        console.log(testName)

        const test = new testCheckout({
            testName,
        });

        await test.save();

        res.status(201).json({ message: "Test created successfully" });
    } catch (error) {
        console.error("Error creating test:", error);
        res.status(500).json({ message: "Error creating test" });
    }
};