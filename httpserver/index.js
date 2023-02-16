const http =  require('node:http');
const server = http.createServer((req, res) => {
    res.end('hello from the other sides');
});

server.listen(8000, "127.0.0.1", ()=>
{
    console.log('listening to the port no 8000');
});
