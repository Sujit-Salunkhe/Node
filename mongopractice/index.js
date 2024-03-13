const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://localhost/testdb')

User.