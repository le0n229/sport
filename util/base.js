const mongoose = require('mongoose');
const Client = require('../models/clients');
const Test = require('../models/tests');

// mongoose.connect('mongodb://localhost:27017/supersport');

// async function base (){

//     let newClient = new Client({

//         userName: 'Dim',
//         password: '123',
//         firstName: 'D',
//         lastName: 'A',
//         email: 'd@s.s',
//         address: 'String',
//         phone: '555',
//         age: '28',
//         height: '175',
//         weight: '80'
//     })
//     await newClient.save();
// }

// base()
async function test() {

    const newTest = new Test({
        userName: 'Masha',
        totalProtein: '1',
        creatinine: '2',
        urea: '5',
        totalCholesterol: '8',
        totalBilirubin: '6',
        date: '01.05.2019'

    })
    await newTest.save();
}

test()
