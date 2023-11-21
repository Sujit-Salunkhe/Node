// const upperCase = require("upper-case").upperCase;
// const  local_module = require("./path-to-module")
// const fs = require("fs")

import {upperCase} from 'upper-case'
function greet (name){
    console.log(upperCase(`Hello ${name} welcome to Codevolution`))
}
greet("sujit")
export default greet 

// module.exports =  greet;   