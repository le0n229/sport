const mongoose = require('mongoose');
const Client = require('../models/clients');
const Courier = require('../models/couriers');
const Test = require('../models/tests');

const faker = require('faker');

mongoose.connect(
    'mongodb://localhost:27017/supersport',
    {
        useNewUrlParser: true
    });

for (let i = 0; i < 10; i++) {
    const client = new Client({
        userName: 'vasya',
        password: '123',
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        phone: Number,
        age: Number,
        height: Number,
        weight: Number
    })

    client.save();
}

mongoose.connection.close();