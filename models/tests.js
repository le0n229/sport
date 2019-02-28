const mongoose = require('mongoose');

const testSchema = mongoose.Schema({    
    userName: String,   
    totalProtein: Number, 
    creatinine: Number,
    urea: Number,
    totalCholesterol: Number,
    totalBilirubin: Number,
    date:{type:Date}
})

module.exports = mongoose.model('Test', testSchema);