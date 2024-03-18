// Import required Express module
var express = require('express');

// Create an Express application
var app = express();
const PORT = process.env.PORT || 3000; // Define port which is on 3000
// Define route to serve HTML page
app.get('/', (req, res) => {
    // Respond to user with html file.
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
