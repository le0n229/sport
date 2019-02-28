const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    userName: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    оrderNumber: Number,
    deliveryDate: Date,    
    totalProtein: Number, 
    creatinine: Number,
    urea: Number,
    totalCholesterol: Number,
    totalBilirubin: Number
})

module.exports = mongoose.model('Test', testSchema);