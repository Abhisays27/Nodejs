 const http = require('http');
 const fs = require('fs');
 const server = http.createServer();

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream('input.txt');
//   stream.on('error', (err) => {
//     res.statusCode = 404;
//     res.end('File not found');
//   });
//   res.setHeader('Content-Type', 'text/plain');
//   stream.pipe(res);
// });

// server.listen(8800, () => {
//   console.log('Server listening on port 0000');
// });
server.on("request", (req,res)=> {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});
server.listen(9000,"127.0.0.1")
