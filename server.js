const express = require('express'); // Import Express
const app = express(); // Create an Express app

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express is running!');
});

// Start the server
const PORT = 3000; // Define the port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

const morgan = require('morgan');
app.use(morgan('combined'));
