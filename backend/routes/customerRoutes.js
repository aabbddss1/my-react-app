const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer'); // Mongoose Customer model

// Add a new customer
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const customer = new Customer({ name, email });
    await customer.save();
    res.status(201).send("Customer added successfully.");
  } catch (err) {
    res.status(500).send("Error adding customer.");
  }
});

module.exports = router;
