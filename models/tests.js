const mongoose = require('mongoose');

const testSchema = mongoose.Schema({    
    userName: String,
    testDate: Date,
    totalProtein: Number, 
    creatinine: Number,
    urea: Number,
    totalCholesterol: Number,
    totalBilirubin: Number
})

console.log('Done!!!')

module.exports = mongoose.model('Test', testSchema);