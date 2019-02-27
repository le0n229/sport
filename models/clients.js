const mongoose = require('mongoose');

const clientSchema = mongoose.Schems({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: Number,
    age: Number
})