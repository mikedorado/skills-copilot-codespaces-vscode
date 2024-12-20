// Create a web server that listens for HTTP requests on port 3000
// Create a route that listens for GET requests to the path '/comments'
// When a GET request is made to the '/comments' path, respond with a JSON object containing an array of comments
// Each comment in the array should have a 'text' property with a value of 'This is a comment'
// Start the web server and test the route using a web browser or HTTP client
// Bonus: Add a POST route that allows users to add comments to the array
// Bonus: Add a route that allows users to get a specific comment by its index in the array

const express = require('express');
const app = express();
const PORT = 3000;

let comments = [
    { text: 'This is a comment' },
    { text: 'Another comment' },
    { text: 'Yet another comment' }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Comments API');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = { text: 'New comment' };
    comments.push(newComment);
    res.json({ message: 'Comment added', comment: newComment });
});

app.get('/comments/:index', (req, res) => {
    const index = req.params.index;
    const comment = comments[index];
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});