// const https = require("node:https")
// const start = Date.now()
// let MAX_CALLS= 6
// for (let i = 0;i <MAX_CALLS;i++){
//     https
//     .request("https://www.google.com",(res) => {
//     res.on("data",() => {});
//     res.on("end", () => {
//         console.log(`request:${i+1}`,Date.now() - start);
//     })
//     })
//     .end();
// }
// console.log('console log 1')
// process.nextTick(() => {
//     console.log("This is process.next 1")
// })

const { nextTick } = require("process")

console.log('console log 2')
Promise.resolve().then(() => console.log("this promise resolve.next 1"))
process.nextTick(() => nextTick(() => console.log('this is process .nextTick 1')))