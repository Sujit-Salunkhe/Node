const {createReadStream} = require('fs')
const strems = createReadStream('./bigfile.txt',{highWaterMark : 90000,encoding : 'utf8'})
strems.on('data',(results) => {
    console.log(results)
})
strems.on('error',(err) => {
    console.log(err)
})