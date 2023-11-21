const { readFileSync } = require('fs');
const http = require('http');
// console.log('Express Tutorial')
const firsttextfile = readFileSync("./navbar-app/index.html")
const firstStyles = readFileSync("./navbar-app/styles.css")
const firstImage = readFileSync("./navbar-app/logo.svg")
const firstLogic = readFileSync("./navbar-app/browser-app.js")
const server = http.createServer((req,res) => {
    // console.log("we hit the server")
    const url = req.url
    console.log(url)
    if(url === '/'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(firsttextfile)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>about page </h1>')
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type' : 'text/css'})
        res.write(firstStyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type' : 'image/svg+xml'})
        res.write(firstImage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type' : 'text/javascript'})
        res.write(firstLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h1> This page not exist </h1>')
        res.end()
    }

})

server.listen(3000)
