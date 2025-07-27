const express = require('express');
const server = express();
const path = require('path');

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/srkMovies.json'));
});
const PORT = process.env.PORT || 5656;
server.listen(PORT, () => {
  console.log('Server Running at Port Number 5656');
});
