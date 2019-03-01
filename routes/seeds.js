const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Test = require('../models/tests');
const Order = require('../models/order');
const faker = require('faker');

let names = ['vadim', 'qwery2', 'qwery3', 'qwery4', 'qwery5', 'qwery6', 'qwery7', 'qwery8', 'qwery9', 'qwery10'];
let lastNames = ['Петров', 'Иванов', 'Левин', 'Мышкин', 'Сидоров', 'Ленина', 'Нечаев', 'Логинов', 'Веселов', 'Березовый'];
let firstNames = ['Вадим', 'Пётр', 'Иван', 'Михаил', 'Рауф', 'Елена', 'Иосиф', 'Дмитрий', 'Александр', 'Алексей'];


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
            age: faker.random.number(),
            height: faker.random.number(),
            weight: faker.random.number()
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
            userName: 'qwery1',
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
            status: 'Передан курьеру',
            deliveryDate: new Date(),
            deliveryTime: '12:00-15:00',
            address: faker.address.streetAddress(),
            firstName: firstNames[0],
            lastName: lastNames[0],
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