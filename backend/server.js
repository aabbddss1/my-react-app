// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Import routes
const customerRoutes = require('./routes/customerRoutes'); // Customer routes
const dealershipRoutes = require('./routes/dealershipRoutes'); // Dealership routes
const salesRoutes = require('./routes/salesRoutes'); // Sales routes

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register routes AFTER app initialization
app.use('/api/customers', customerRoutes);
app.use('/api/dealerships', dealershipRoutes);
app.use('/api/sales', salesRoutes);

// Define the port
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
