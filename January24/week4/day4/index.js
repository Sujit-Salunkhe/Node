// require('./modules.js')
// require('./modules2.js')
// const path  = require('node:path')

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))
// console.log(path.parse(__dirname))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute('./modules.js'))
// console.log(path.join('folder1','folder2','folder3','index.js'))
// console.log(path.join(__dirname,'index.js'))
// console.log(path.resolve('/folder1','folder2','folder3','index.js'))
// console.log(path.resolve('/folder1','//folder2','folder3','index.js'))
// emmiter.on('order-pizza',() => {
    //     console.log(`Order Received! Baking a Pizza`)
    // })
    // emmiter.emit('order-pizza')

// const emmiter = new EventEmitters()
const pizzShop = require('./pizza.js')
const DrinkMachine = require('./drink-machine.js')
const pizzaShop = new pizzShop()
const drinkMachine = new DrinkMachine()
pizzaShop.on('order',(size,topping) => {
    console.log(`Order Received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
})
pizzaShop.order('large','mashroom')

pizzaShop.displayOrderNumber()