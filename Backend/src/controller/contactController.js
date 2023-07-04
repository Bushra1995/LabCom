const Contact = require('../models/contactus');

exports.createContact = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    const newContact = await Contact.create({ name, email, msg });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

