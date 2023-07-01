const express = require('express');
const app = express();

app.get('/home', (req, res) => {
 
  res.send(`
  
  <button><a href="/edit">Home</a></button>
  <button><a href="/create">Create</a></button>
  <button><a href="/read">Read</a></button>`);
});

app.get('/edit', (req, res) => {
  res.send(`
  
  <button> <a herf="/">Back to Home</a></button>`);
});

app.get('/create', (req, res) => {
  res.send('<button>Create</button>');
});

app.get('/read', (req, res) => {
  res.send('This is the read page');
});

app.listen(4588, () => {
  console.log("Server is running on port 4588");
});
