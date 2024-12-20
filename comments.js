// Create web server
// Create a route for comments
// Create a route for adding a comment
// Create a route for deleting a comment

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send('Comment added');
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment.id === id);
  if (!comment) {
    res.status(404).send('Comment not found');
  } else {
    comments.splice(comments.indexOf(comment), 1);
    res.status(200).send('Comment deleted');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});