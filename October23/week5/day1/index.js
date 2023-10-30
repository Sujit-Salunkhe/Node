// const { error } = require("node:console")
const { read } = require("node:fs")
const fs = require("node:fs/promises")
async function readFile () {
    try{
        const data = await fs.readFile("file.txt","utf-8")
        console.log(data)
    }catch(err) {
        console.log(err)
    }
}
readFile()

// console.log("first");
// fs.readFile("file.txt","utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error));

// console.log("Second");

// const { error } = require("node:console");
// const { errorMonitor } = require("node:events");
// const fs  = require("node:fs");
// const fileContacts = fs.readFileSync("./file.txt","utf-8")
// console.log("First")
// console.log(fileContacts)
// console.log("second")
// fs.readFile('./file.txt',"utf-8" ,(error,data) => {
//     if (error){
//         console.log(error)
//     }else {
//         console.log(data)
//     }
// });
// console.log("third")

// fs.writeFileSync("./greet.txt","hello zandu");
// fs.writeFile('./greet.txt'," hello balm",{flag: "a"},(error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("file is written")
//     }
// })
