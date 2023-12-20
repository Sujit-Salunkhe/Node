const EventEmitter = require("events");
const custuomEmitter = new EventEmitter()
custuomEmitter.on("response",() => {
    console.log("your response is fullfilled")
});
custuomEmitter.on("response",() => {
    console.log("yes theese event can be created a twise")
});
custuomEmitter.emit('response');