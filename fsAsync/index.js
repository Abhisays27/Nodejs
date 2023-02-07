const fs = require("fs"); // for asynchronous way we have to make a call back function
fs.writeFile("read.txt","today is awesome day :",
(err) => {
    console.log("files is created");
  
}); 

fs.appendFile("read.txt", "plz like and share my channel",
(err) => {
    console.log("data added");
  
} );

fs.readFile("read.txt", "utf-8" ,(err, data)=>{
    console.log(data);

});