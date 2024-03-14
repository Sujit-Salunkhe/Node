const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter()
const http = require('http')
const server = http.createServer((req,res) =>{
    res.write('Hello World')

});
server.listen(3000,() => {
    console.log('listingi on 3000')
})

const pathObj = path.parse(__filename)
// console.log(pathObj)
// console.log('total-Memory ' + os.totalmem());
// console.log('totoal_Free_Memory  :' + os.freemem());
// fs.readFile('./logger.js','utf-8',(err,data) =>{
//     console.log(data)
// },)
// console.log('end')
events.on('order',(rice,drink) => {
    console.log(`Order is ${rice} with ${drink}`)
})
events.emit('order','king size rice','lemon juice')