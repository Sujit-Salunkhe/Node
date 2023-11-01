const http = require('node:http')
const fs = require('node:fs')
const createserver = http.createServer((req,res) =>{
    // console.log(res)
    const superhero ={
        firstName : "sujit",
        lastName : "salunkhe"
    }
    res.writeHead(200,{"Content-Type" : "text/html"})
    // res.end(JSON.stringify(superhero))
    const html = fs.readFileSync('./index.html',"utf-8")
    fs.createReadStream(__dirname + './index.html').pipe(res)
    // res.end(html)
    // console.log(req)
})

createserver.listen(3000,() =>{
    console.log('Server Running port on 3000')
})