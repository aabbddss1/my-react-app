const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const customerRoutes = require('./routes/customerRoutes');
const dealershipRoutes = require('./routes/dealershipRoutes');
const salesRoutes = require('./routes/salesRoutes');

// Initialize the Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register routes
app.use('/api/customers', customerRoutes);
app.use('/api/dealerships', dealershipRoutes);
app.use('/api/sales', salesRoutes);

// Define the server port
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
