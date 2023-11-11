// const upperCase = require("upper-case").upperCase;
import {upperCase} from 'upper-case'
// const  local_module = require("./path-to-module")
// const fs = require("fs")

function greet (name){
    console.log(upperCase(`Hello ${name} welcome to Codevolution`))
}
greet("sujit")
// module.exports =  greet;   
export default greet 
