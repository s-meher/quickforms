const express = require("express");
const router = express.Router();
const { submitForm, getAllForms } = require("../controllers/formController");

router.post("/submit", submitForm);
router.get("/forms", getAllForms);

module.exports = router;
