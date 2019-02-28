const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userName: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    оrderNumber: Number,
    deliveryDate: Date,
    deliveryTime: String,
    address: String
})

module.exports = mongoose.model('Order', orderSchema);