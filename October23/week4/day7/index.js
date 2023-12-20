// const  buffer  = require("buffer");

const buffer = new Buffer.from("Sujit","utf-8")
buffer.write("salunkhe")
console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON())