const ContactMeModel = require("../models/contactMe");


const handleSaveContactMe = async (req, res) => {
    console.log(req.body);
    
    try {
        const { name, email, message } = req.body;
        const newContact = new ContactMeModel({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { handleSaveContactMe };
