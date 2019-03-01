const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    role: String,
    userName: {type: String, require: true, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String,
    age: Number,
    height: Number,
    weight: Number,
    gender: String,
    
})

module.exports = mongoose.model('Client', clientSchema);