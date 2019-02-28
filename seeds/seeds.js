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

(async () => {
    for (let i = 0; i < 10; i++) {
        // const client = await new Client({
        //     userName: faker.name.title(),
        //     password: faker.internet.password(),
        //     firstName: faker.name.firstName(),
        //     lastName: faker.name.lastName(),
        //     email: faker.internet.email(),
        //     address: faker.address.streetAddress(),
        //     phone: faker.phone.phoneNumber(),
        //     age: faker.random.number(),
        //     height: faker.random.number(),
        //     weight: faker.random.number()
        // })

        // await client.save();

        const test = await new Test({
            userName: faker.name.title,
            createdAt: faker.date.past(),
            updatedAt: faker.date.between(),
            status: 'client',
            оrderNumber: faker.random.number(),
            deliveryDate: faker.date.past(),
            totalProtein: faker.random.number(),
            creatinine: faker.random.number(),
            urea: faker.random.number(),
            totalCholesterol: faker.random.number(),
            totalBilirubin: faker.random.number()
        })

        await test.save();
        
        const order = await new Order({
            userName: faker.name.title,
            createdAt: faker.date.past(),
            updatedAt: faker.date.between(),
            status: 'client',
            оrderNumber: faker.random.number(),
            deliveryDate: faker.date.past(),
            deliveryTime: faker.date.soon(),
            address: faker.address.streetAddress()
        })

        await order.save();
    }
    mongoose.connection.close();
})();


