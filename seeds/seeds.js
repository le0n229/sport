const mongoose = require('mongoose');
const Client = require('../models/clients');
const Test = require('../models/tests');
const Order = require('../models/order');

const faker = require('faker');

mongoose.connect(
    'mongodb://localhost:27017/supersport',
    {
        useNewUrlParser: true
    });

let names = ['qwery1', 'qwery2', 'qwery3', 'qwery4','qwery5','qwery6','qwery7','qwery8','qwery9', 'qwery10'];
let lastNames = ['lastName1', 'lastName2', 'lastName3', 'lastName4','lastName5','lastName6','lastName7','lastName8','lastName9', 'lastName10'];
let firstNames = ['firstName1', 'firstName2', 'firstName3', 'firstName4','firstName5','firstName6','firstName7','firstName8','firstName9', 'firstName10'];


(async function seed () {
    for (let i = 0; i < names.length; i++) {
        const client = await new Client({
            userName: names[i],
            password: faker.internet.password(),
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

        // const test = await new Test({
        //     totalProtein: faker.random.number(),
        //     creatinine: faker.random.number(),
        //     urea: faker.random.number(),
        //     totalCholesterol: faker.random.number(),
        //     totalBilirubin: faker.random.number()
        // })

        // await test.save();
        
        const order = await new Order({
            userName: 'qwery1',
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
            status: 'Передан курьеру',
            orderNumber: faker.random.number(),
            deliveryDate: faker.date.past(),
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
    mongoose.connection.close();
})();


