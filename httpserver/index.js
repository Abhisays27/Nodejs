const http =  require('node:http');

const fs = require('fs')
const server = http.createServer((req, res) => {
   const data = fs.readFileSync(`${__dirname}/Userapi/userapi.json`,"utf-8"); 
     const objData = JSON.parse(data);

    if(req.url == "/"){
        res.end('hello from the home sides');
     }
     else if(req.url == "/about"){
        res.end("hello from aboutus")
     }
     else if(req.url == "/contact"){
        res.end("hello from contactus")
     }
     else if(req.url == "/userapi"){
      res.writeHead(200,{"content-type": "application/json"})
         res.end(objData[0].email);

      }
      
      
     else{
        res.writeHead(404, {"content-type" : "text/html"} )
        res.end("<h1>Error 404! Page not found!</h1>")
     }
    
});

server.listen(8000, "127.0.0.1", ()=>
{
    
    console.log('listening to the port no 8000');
});
