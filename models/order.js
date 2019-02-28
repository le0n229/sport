const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({  
    userName: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    orderNumber: Number,
    deliveryDate: Date,
    deliveryTime: String,
    address: String,
    firstName: String,
    lastName: String,
    phone: String,
    orderAmount: Number,
    orderTitle: String
})

module.exports = mongoose.model('Order', orderSchema);