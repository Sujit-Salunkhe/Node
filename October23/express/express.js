const express = require('express')
const app = express()
port = 7000
app.get('/',(req,res) =>{
    res.send('home page')
})

app.get('/about',(req,res) => {
    res.send('Why are you here Just Go home')
})
app.listen(port,() =>{
    console.log(`Server is Listning on port ${port}...`)
})

