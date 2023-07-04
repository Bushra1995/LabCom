const Laboratory = require('../models/laboratories');

// Read data
exports.getLaboratories = async (req, res) => {
    try {
        const laboratories = await Laboratory.find(); // Fetch only approved laboratories
        res.status(200).json(laboratories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get lab by ID
exports.getLaboratoryById = async (req, res) => {
    const labId = req.params.id;

    try {
        const lab = await Laboratory.findById(labId);

        if (!lab) {
            return res.status(404).json({ message: 'Lab not found' });
        }

        res.status(200).json({ labName: lab.labName });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create data
exports.createLaboratories = async (req, res) => {
    const labData = req.body;

    try {
        const createdLab = await Laboratory.create(labData);
        res.status(200).json(createdLab);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update data
exports.updateLaboratory = async (req, res) => {
    const labId = req.params.id;
    const labData = req.body;

    try {
        const updatedLab = await Laboratory.findByIdAndUpdate(labId, labData, {
            new: true,
        });

        if (!updatedLab) {
            return res.status(404).json({ message: 'Lab not found' });
        }

        res.status(200).json(updatedLab);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete data
exports.deleteLaboratory = async (req, res) => {
    const labId = req.params.id;

    try {
        const deletedLab = await Laboratory.findByIdAndRemove(labId);

        if (!deletedLab) {
            return res.status(404).json({ message: 'Lab not found' });
        }

        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update lab approval status
exports.updateApprovalStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const lab = await Laboratory.findById(id);

        if (!lab) {
            return res.status(404).json({ message: 'Lab not found' });
        }

        lab.approvalStatus = status;
        await lab.save();

        res.json({ message: 'Lab approval status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
