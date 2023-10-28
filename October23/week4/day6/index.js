const EventEmitter = require("node:events")
const emitter = new EventEmitter()
emitter.on("order-Pizza",(size,topping) => {
    console.log(`ordered receive baking a ${size} pizza with ${topping}`)
})
emitter.emit("order-Pizza","large","mushroom")
console.log("sujit")