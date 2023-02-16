const http =  require('node:http');
const { type } = require('node:os');
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end('hello from the home sides');
     }
     else if(req.url == "/about"){
        res.end("hello from aboutus")
     }
     else if(req.url == "/contact"){
        res.end("hello from contactus")
     }
     else{
        res.writeHead(404, {"content-type" : "text/html"} )
        res.end("<h1>Error 404! Page not found</h1>")
     }
    
});

server.listen(8000, "127.0.0.1", ()=>
{
    
    console.log('listening to the port no 8000');
});
