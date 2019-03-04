const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Client = require('../models/clients');
const Test = require('../models/tests');
const Order = require('../models/order');
const faker = require('faker');

let names = ['user1', 'user2', 'user3', 'user4', 'user5', 'petr', 'vasiliy', 'polina', 'fedor', 'maria'];
let lastNames = ['Петров', 'Иванов', 'Левин', 'Мышкин', 'Сидоров', 'Петров', 'Иванов', 'Левина', 'Пупков', 'Сидорова'];
let firstNames = ['Вадим', 'Михаил', 'Рауф', 'Владимир', 'Александр', 'Петр', 'Василий', 'Полина', 'Федор', 'Мария'];


async function seed() {
    let role;
    for (let i = 0; i < names.length; i++) {
        if (i === 1) {
            role = 'admin';
        } else if (i === 2) {
            role = 'courier';
        } else {
            role = '';
        }
        const client = await new Client({
            role: role,
            userName: names[i],
            password: '123',
            firstName: firstNames[i],
            lastName: lastNames[i],
            email: faker.internet.email(),
            address: faker.address.streetAddress(),

            phone: "7(909)875-43-24",

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