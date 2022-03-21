const Contact = require("../models/contact");

exports.getAllContacts = (req, res) => {
  Contact.find().exec((err, doc) => {
    if (err || !doc) {
      return res.status(400).json({
        error: "No contacts found",
      });
    }
    return res.json(doc);
  });
};

exports.insertContact = (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const contact = new Contact({
    name,
    phone,
  });
  contact.save((err, doc) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save contact",
        err,
      });
    }
    return res.json(doc);
  });
};
