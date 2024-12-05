const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define the port
const PORT = 5001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
