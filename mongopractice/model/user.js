const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street:String,
    city:String,
})

const userSchema = new  mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:0,
        max:200,
        validate:{
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not Even number` 
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:() => Date.now()
    },
    updatedAt:{
        type:Date,
        default:() => Date.now()
    },
    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User',
    },
    hobbies:[String],
    address:addressSchema
})
userSchema.method.sayHi = function () {
    console.log(`hi my name is ${this.name}`)
}
module.exports  = mongoose.model("User",userSchema)