const express = require("express");
const router = express.Router();

const ContactFormController = require("../controllers/Contact");

router.post("/submit", ContactFormController.contact);

module.exports = router;