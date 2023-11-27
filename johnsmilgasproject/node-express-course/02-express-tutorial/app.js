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

// second example of express js.

// const express = require('express');
// const app = express()
// const path = require('path')
// // setup static and middleware
// app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//     // res.status().send()
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// });
// app.all('*',(req,res) => {
//     res.status(404).send('Resource not found')
// });
// app.listen(3000,()=>{
//     console.log('server is listing on port 3000')
// });

// advance express concepts
// const express = require("express")
// const app = express()
// app.get('/',(req,res) => {
//     res.send('<h1>Home page</h1><a href = "/api/products">Products</a>')
// })
// app.listen(3000,() =>{
//     console.log("server is running on port 3000")
// })
// app.get('/api/products',(req,res) =>{
//     res.json([{name:'sujit'},{lname:'salunkhe'},{mname:'yuvraj'}])
// })
// app.get('/api/products/:productId',(req,res) =>{
//     const {productId} = req.params
//     const singleproduct = products.find((product) => product.id === Number(productId))
//     res.json(singleproduct)
//     if(!singleproduct){
//         return res.status(404).send("Product Does not Exist")
//     }
// })
// app.get('/api/products/:productId/reviews/:reviewId',(req,res) =>{{
//     res.end('hello world')
// }
// })

// // lerning request params and query
// app.get('/api/v1/query',(req,res) => {
//     console.log(req.query);
//     const {search,limit} = req.query
//     let sortedProducts = [...products]
//     if (search){
//         sortedProducts.filter(products => {
//             return products.name.startsWith(search)
//         })
//     }
//     if (limit){
//         sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts < 1){

//         res.status(200).send("no products matched to your request")
//         return res.status(200).json({success:true,data:[]})
//     }
//     res.status(200).json(sortedProducts)
//     res.send('hello world')
// })
// learning new middele wares
// const express = require('express')
// const app = express()

// const logger = require('./logger.js')
// const authorize = require('./authorise.js')
// app.use([logger,authorize])

// app.get('/',logger,(req,res)=>{
//     res.send("Home Page")
// })
// app.get('/about',logger,(req,res)=>{
//         res.send("About Page")
// })
// app.get('/api/product',logger,(req,res)=>{
//         res.send("Product Page")
// })
// app.get('/api/items',[logger,authorize],(req,res)=>{
//     console.log(req.user)
//     res.send("Itmes page")
// })
// app.listen(3000,() =>{
//     console.log('app is running at port 3000....')
// })
// using morgan middleware``
// const express = require('express')
// const app = express()
// const morgan = require('morgan')

// const logger = require('./logger.js')
// const authorize = require('./authorise.js')
// app.use([logger,authorize])
// app.use(morgan('tiny'))

// app.get('/',logger,(req,res)=>{
//     res.send("Home Page")
// })
// app.get('/about',logger,(req,res)=>{
//         res.send("About Page")
// })
// app.get('/api/product',logger,(req,res)=>{
//         res.send("Product Page")
// })
// app.get('/api/items',(req,res)=>{
//     console.log(req.user)
//     res.send("Itmes page")
// })
// app.listen(3000,() =>{
//     console.log('app is running at port 3000....')
// })

// using other https mehtods
const express = require("express");
const app = express();
let { people } = require("./data");
// static assets
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people,chekc:'sujit' });
});

app.post("/api/people", (req, res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true,person:name})
});

app.post('/api/postman/people',(req,res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide your name'})
    }
    res.status(201).json({success:true,person:[...people,name]})
    })
// parse form data
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  console.log(req.body);
  res.status(404).send("Please provide name");
});

app.put('/api/people/:id',(req,res) =>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find(people => people.id === Number(id))
     if(!person){
        return res.status(404).json({success:false,msg:"this id is not mention in our database"})
}    const updatedpeople = people.map(person => {
   if (person.id === Number(id)){
    person.name = name
   }
   return person
})
  res.status(200).json({success:true,data:updatedpeople})
  
})


app.listen(3000, () => {
  console.log("app is running at port 3000....");
});
