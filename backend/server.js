// Import required modules
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express(); // Initialize the Express application

// Middleware to parse JSON request bodies
app.use(express.json());

// Example MongoDB connection (make sure your .env file is properly configured)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
