// const { promises } = require("dns");
// const { resolve } = require("path");

function fetchdata() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let data = {'name':'sujit','lname':'Salunkhe'}
            resolve(data) 
            reject()
        },1000)
    })
}

fetchdata()
.then(data => {
    console.log(data)
})
.catch(err => console.log('this is error',err))


