const express = require('express');
const server = express();
const path = require('path');

server.get('/srkmovies', (req, res) => {
  res.sendFile(path.join(__dirname, '/srkMovies.json'));
});

server.listen(5656, () => {
  console.log('Server Running at Port Number 5656');
});
