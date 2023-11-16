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
