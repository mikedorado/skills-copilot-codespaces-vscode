// Create a web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments array
const comments = require('./comments');

// Create a route that sends the comments array as a JSON response
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});