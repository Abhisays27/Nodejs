const Eventmitter = require("events");
const event = new Eventmitter();
event.on('sayMyName', () => {
    console.log("abhishek")

});
event.on('sayMyName', () => {
    console.log("abhishek1")

});
event.on('sayMyName', () => {
    console.log("abhishek2")

});
event.on('checkPage', (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)

})
event.emit("checkPage",200,"ok");
