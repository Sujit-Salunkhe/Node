const http = require("node:http")
const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello sujit")
})
const PORT = process.env.PORT || 300
server.listen(PORT ,() => console.log("server is running at port 3000"));