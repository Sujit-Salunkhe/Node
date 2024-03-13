const mongoose = require('mongoose')


const userSchema = new  mongoose.Schema({
    name:String,
    age:Number,
    required:true
})

module.exports  = mongoose.model("User",userSchema)