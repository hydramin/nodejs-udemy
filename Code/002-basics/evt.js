const events = require("events");
const util = require("util");

var eventEmitter = new events.EventEmitter();


// The observers are added to the broker/event loop
eventEmitter.on("love", (arg) => {
    console.log("This is %s",arg);
});

eventEmitter.on("hate", (arg) => {
    console.log("This is %s",arg);
});

// The subject emits these events into the event loop: broker
eventEmitter.emit("love", "dove");
eventEmitter.emit("hate", "cove");
eventEmitter.emit("love", util.inspect({name: "Amin"}));

console.log("end")


