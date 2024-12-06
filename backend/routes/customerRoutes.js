const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Add a new customer
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, city, postalCode } = req.body;

    // Create a new customer
    const newCustomer = new Customer({
      name,
      email,
      phone,
      address,
      city,
      postalCode,
    });

    // Save to database
    await newCustomer.save();
    res.status(201).json({ message: 'Customer added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding customer.' });
  }
});

module.exports = router;
