const express = require('express');
const router = express.Router();
const Users = require('../models/clients');
const Order = require('../models/order');

router.get('/', async (req, res) => {
    const userInfo = await Users.find({});
    console.log(userInfo)

    const orderInfo = await Order.find();
    console.log(orderInfo)
    
    res.render('admin', {orderInfo, userInfo})
})

module.exports = router;