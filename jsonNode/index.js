const fs = require('fs')
const bioData ={
    name: "abhishekNautiyal",
    age: 21,
    channel: "abhisays",
};

// const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData);
// console.log(objData)

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData, (err) =>{
   // console.log("data")
   const orgData = JSON.parse(done);
   console.log(orgData);
})

fs.readFile("json1.json", "utf-8",(err,data)=> {
    console.log("data")
})
