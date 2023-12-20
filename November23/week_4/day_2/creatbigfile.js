const {writeFileSync} = require('fs')
for(let i = 0 ;i<1000;i++){
    writeFileSync('./bigfile.txt',`this is a big file ${i}\n`,{flag : "a"})
}