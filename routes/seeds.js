const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Test = require('../models/tests');
const Order = require('../models/order');
const faker = require('faker');

let names = ['vadim', 'mikhail', 'rauf', 'vladimir', 'alex', 'vadim', 'mikhail', 'rauf', 'vladimir', 'alex'];
let lastNames = ['Петров', 'Иванов', 'Левин', 'Мышкин', 'Сидоров', 'Петров', 'Иванов', 'Левин', 'Мышкин', 'Сидоров'];
let firstNames = ['Вадим', 'Михаил', 'Рауф', 'Владимир', 'Александр', 'Вадим', 'Михаил', 'Рауф', 'Владимир', 'Александр'];


async function seed() {
    for (let i = 0; i < names.length; i++) {
        const client = await new Client({
            userName: names[i],
            password: '123',
            firstName: firstNames[i],
            lastName: lastNames[i],
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            phone: faker.phone.phoneNumber(),
            age: Math.floor(Math.random() * 100),
            height: Math.floor(Math.random() * 200),
            weight: Math.floor(Math.random() * 100)
        })

        await client.save();

        const test = await new Test({
            userName: names[i],
            testDate: new Date(),
            totalProtein: faker.random.number(),
            creatinine: faker.random.number(),
            urea: faker.random.number(),
            totalCholesterol: faker.random.number(),
            totalBilirubin: faker.random.number()
        })

        await test.save();

        const order = await new Order({
            userName: names[i],
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
            status: 'Передан курьеру',
            deliveryDate: new Date(),
            deliveryTime: '12:00-15:00',
            address: faker.address.streetAddress(),
            firstName: firstNames[i],
            lastName: lastNames[i],
            phone: '8-905-567-98-75',
            orderAmount: 11200,
            orderTitle: 'Забрать кровь'
        })

        await order.save();
    }
    console.log('done!')
};

router.get('/', (req, res) => {
    res.render('superseeds')
});

router.post('/', async (req, res) => {
    await seed();
    res.redirect('/superseeds');
});

module.exports = router;