const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    adminName: String,
    password: String
})

module.exports = mongoose.model('Admin', adminSchema);