const http = require('node:http')
const createserver = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type" : "text/plain"})
    res.end("Hello world!")
    // console.log(res)
    console.log(req)
})

createserver.listen(3000,() =>{
    console.log('Server Running port on 3000')
})