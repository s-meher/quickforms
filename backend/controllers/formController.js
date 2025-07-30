const Form = require("../models/Form");

exports.submitForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const saved = await newForm.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
