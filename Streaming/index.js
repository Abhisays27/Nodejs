const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('input.txt');
  res.setHeader('Content-Type', 'text/plain');
  stream.pipe(res);
});

server.listen(9000, () => {
  console.log('Server listening on port 9000');
});
