const mongoose = require('mongoose');
const Client = require('../models/clients');

mongoose.connect('mongodb://localhost:27017/supersport');

async function base (){

    let newClient = new Client({
        
        userName: 'Serg',
        password: '123',
        firstName: 'S',
        lastName: 'A',
        email: 's@s.s',
        address: 'String',
        phone: '123',
        age: '25',
        height: '180',
        weight: '100'
    })
    await newClient.save();
}

base()
