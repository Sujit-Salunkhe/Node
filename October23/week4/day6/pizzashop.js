const EventEmitter = require("node:events")
class pizzShop extends EventEmitter {
    constructor () {
        super();
        this.ordernumber = 0;
    }
    orde(size,topping) {
        this.ordernumber++;
        this.emit("order",size,topping)
    }

    displyordernumber () {
        console.log(`current ordeer number ${this.ordernumber}`)
    }
}   

module.exports = pizzShop