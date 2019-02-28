const mongoose = require('mongoose');
const Client = require('../models/clients');
const Test = require('../models/tests');

// mongoose.connect('mongodb://localhost:27017/supersport');

async function base (){

    let newClient = new Client({
        
        userName: 'Dim',
        password: '123',
        firstName: 'D',
        lastName: 'A',
        email: 'd@s.s',
        address: 'String',
        phone: '555',
        age: '28',
        height: '175',
        weight: '80'
    })
    await newClient.save();
}

base()
async function test (){

const newTest = new Test({
    userName: 'Masha',
    createdAt: '01/02/2019',
    updatedAt: '02.02/2019',
    status: 'String',
    totalProtein: '1', 
    creatinine: '2',
    urea: '5',
    totalCholesterol: '8',
    totalBilirubin: '6'
})
await newTest.save();
}

test()