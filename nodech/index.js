const fs = require('fs')  
fs.mkdirSync("thapa")  //create a folder
fs.writeFileSync("thapa/bio.txt", "my name is abhishek nautiyal")  //create a file and add data
fs.appendFileSync("thapa/bio.txt", "plz subdjhwjbx ww cbjw wdui w") 
const data = fs.readFileSync("thapa/bio.txt", "utf-8");
console.log(data);
fs.renameSync("thapa/bio.txt","thapa/abhi.txt"); //rename 
cfs.unlinkSync("thapa/abhi.txt"); //delete
fs.rmdirSync("thapa")  //delete folder