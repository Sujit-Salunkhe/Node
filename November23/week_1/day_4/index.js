const crypto = require("node:crypto")
// process.env.UV_THREADPOOL_SIZE = 16;
process.env.UV_THREADPOOL_SIZE = 7;
let max_calls = 7;
const start = Date.now()
for(let i=0;i < max_calls;i++){
crypto.pbkdf2("password","salt",100000,512,"sha512",() => {
console.log(`hash:${i + 1}`,Date.now() - start)
})
}