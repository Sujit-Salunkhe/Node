// const { readFileSync } = require('fs');
// const http = require('http');
// // console.log('Express Tutorial')
// const firsttextfile = readFileSync("./navbar-app/index.html")
// const firstStyles = readFileSync("./navbar-app/styles.css")
// const firstImage = readFileSync("./navbar-app/logo.svg")
// const firstLogic = readFileSync("./navbar-app/browser-app.js")
// const server = http.createServer((req,res) => {
//     // console.log("we hit the server")
//     const url = req.url
//     console.log(url)
//     if(url === '/'){
//         res.writeHead(200,{'content-type' : 'text/html'})
//         res.write(firsttextfile)
//         res.end()
//     }
//     else if(url === '/about'){
//         res.writeHead(200,{'content-type' : 'text/html'})
//         res.write('<h1>about page </h1>')
//         res.end()
//     }
//     else if(url === '/styles.css'){
//         res.writeHead(200,{'content-type' : 'text/css'})
//         res.write(firstStyles)
//         res.end()
//     }
//     else if(url === '/logo.svg'){
//         res.writeHead(200,{'content-type' : 'image/svg+xml'})
//         res.write(firstImage)
//         res.end()
//     }
//     else if(url === '/browser-app.js'){
//         res.writeHead(200,{'content-type' : 'text/javascript'})
//         res.write(firstLogic)
//         res.end()
//     }
//     else{
//         res.writeHead(404,{'content-type' : 'text/html'})
//         res.write('<h1> This page not exist </h1>')
//         res.end()
//     }

// })

// server.listen(3000)
// day 2 express js started
// first example of express basic
// const express = require('express');
// const app = express()
// home page
// app.get("/",(req,res)=> {
    //     console.log("user hit the resourcces")
    //     res.status(200).send('Home page')
    // })
    // home about
    // app.get("/about",(req,res)=> {
        //     res.status(200).send('about page')
        // })
        // for error
        // app.all('*',(req,res)=>{
            //     res.status(404).send('<h1>Resource not found</h1>')
            // })
            // app.listen(3000,()=>{
                //     console.log('server is listing on port 3000')
                // }) 

                
//second example of express js.

const express = require('express');
const app = express()
const path = require('path')
// setup static and middleware
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    // res.status().send()
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
});
app.all('*',(req,res) => {
    res.status(404).send('Resource not found')
});
app.listen(3000,()=>{
    console.log('server is listing on port 3000')
});

