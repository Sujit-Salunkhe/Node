const http = require('http')
const fs = require('fs')
// const { error } = require('console')
http.createServer((req,res) => {
    // const text = fs.readFileSync('./bigfile.txt','utf-8')
    // res.end(text)
    const text = fs.createReadStream('./bigfile.txt','utf8')
    text.on('open', () =>{
        text.pipe(res)
    })
    text.on('error',() =>{
        res.end(error)
    })
}).listen(3000)