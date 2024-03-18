// Import required Express module
var express = require('express');

// Create an Express application
var app = express();
const PORT = process.env.PORT || 3000; // Define port which is on 3000
// Define route to serve HTML page
app.get('/', (req, res) => {
    // Respond to user with heading title and short description.
    res.send('<html><body><h1>Welcome to JiaqiLi\'s first website for SIT737</h1><h2>This is my first webstie. My Email address is ohg@deakin.edu.au. Welcome to contact me.</h2></body></html>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
