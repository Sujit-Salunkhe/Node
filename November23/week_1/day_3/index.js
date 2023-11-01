const http = require('node:http')
const createserver = http.createServer((req,res) =>{
    // console.log(res)
    const superhero ={
        firstName : "sujit",
        lastName : "salunkhe"
    }
    res.writeHead(200,{"Content-Type" : "application/json"})
    res.end(JSON.stringify(superhero))
    // console.log(req)
})

createserver.listen(3000,() =>{
    console.log('Server Running port on 3000')
})