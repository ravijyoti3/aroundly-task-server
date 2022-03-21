const express = require("express");
const router = express.Router();
const { getAllContacts, insertContact } = require("../controllers/contact");

router.get("/allContacts", getAllContacts);
router.post("/insertContact", insertContact);

module.exports = router;
