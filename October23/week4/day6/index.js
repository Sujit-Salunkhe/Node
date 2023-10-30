const pizzashop = require('./pizzashop.js');
const DrinkMachine = require('./drinkmachine.js')
const pizzShop = new pizzashop();
const drinkMachine = new DrinkMachine ()
pizzShop.on('order', (size,topping) => {
    console.log(`ordered receive baking a ${size} pizza with ${topping}`)
    drinkMachine.servedrink(size)
})
pizzShop.orde("large","chessy");
pizzShop.displyordernumber ();
// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()
// emitter.on("order-Pizza",(size,topping) => {
//     console.log(`ordered receive baking a ${size} pizza with ${topping}`)
// })
// emitter.emit("order-Pizza","large","mushroom")
// console.log("sujit")