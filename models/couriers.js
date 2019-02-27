const mongoose = require('mongoose');

const courierSchema = mongoose.Schema({
    adminName: String,
    password: String
})

module.exports = mongoose.model('Courier', courierSchema);