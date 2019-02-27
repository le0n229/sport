const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: Number,
    age: Number,
    height: Number,
    weight: Number
})

module.exports = mongoose.model('Client', clientSchema);