const Test = require('../models/test');

exports.getTest = async (req, res) => {
    try {
        const test = await Test.find().populate('labName');

        res.json(test);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tests' });
    }
};


// For getting the lab name in the LabPage
exports.getLabName = async (req, res) => {
    try {
        const test = await Test.findOne({ _id: req.params.id }).populate('labName');

        if (!test) {
            return res.status(404).json({ error: 'Test not found' });
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



exports.createTest = async (req, res) => {
    try {
        const { testName, testDescription, sampleType, testRequirements, testTiming, testPrice } = req.body;

        const test = new Test({
            testName,
            testDescription,
            sampleType,
            testRequirements,
            testTiming,
            testPrice,
        });

        await test.save();

        res.status(201).json({ message: "Test created successfully" });
    } catch (error) {
        console.error("Error creating test:", error);
        res.status(500).json({ message: "Error creating test" });
    }
};