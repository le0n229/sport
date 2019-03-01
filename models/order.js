const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const orderSchema = mongoose.Schema({
    userName: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    deliveryDate: Date,
    deliveryTime: String,
    address: String,
    firstName: String,
    lastName: String,
    phone: String,
    orderAmount: Number,
    orderTitle: String
})

orderSchema.plugin(AutoIncrement, {inc_field: 'orderNumber'});

module.exports = mongoose.model('Order', orderSchema);