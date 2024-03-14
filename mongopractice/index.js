const mongoose = require("mongoose");
const User = require("./model/user");

mongoose.connect("mongodb://localhost/sujitdb");

async function run() {
  const user = User.findOne({name:'Sasuke'})
  console.log(user)
//   user.sayHi()

}

run();
