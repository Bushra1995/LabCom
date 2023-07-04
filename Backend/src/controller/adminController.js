const Admin = require('../models/admin');

// Read data
exports.getAdmin = async (req, res) => {
    try {
        const Admin = await Admin.find(); // Fetch all approved Admin

        res.status(200).json(Admin);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


//  Create data
exports.createAdmin = async (req, res) => {
    const AdminData = req.body;

    try {
        const createdAdmin = await Admin.create(AdminData);

        res.status(200).json(createdAdmin);   // Handle and send the created Admin as a response
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Update data
exports.updateAdmin = async (req, res) => {
    const AdminId = req.params.id; // Extract the Admin ID from the request parameters
    const AdminData = req.body; // Extract the updated Admin data from the request body

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(AdminId, AdminData, { new: true });

        res.status(200).json(updatedAdmin);  // Handle and send the updated Admin as a response
    } catch (error) {

        res.status(500).json({ error: 'Internal server error' });  // Handle any errors
    }
};


// Delete data
exports.deleteAdmin = async (req, res) => {
    const AdminId = req.params.id; // Extract the Admin ID from the request parameters

    try {
        await Admin.findByIdAndRemove(AdminId);

        res.sendStatus(200);   // Handle the deletion
    } catch (error) {

        res.status(500).json({ error: 'Internal server error' });   // Handle any errors
    }
};


// Update Admin approval status
exports.updateApprovalStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const Admin = await Admin.findById(id);

        if (!Admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        Admin.approvalStatus = status;
        await Admin.save();

        res.json({ message: 'Admin approval status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
