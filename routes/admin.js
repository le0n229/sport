const express = require('express');
const router = express.Router();
const Users = require('../models/clients');
const Order = require('../models/order');



router.get('/', async (req, res) => {
    const orderInfo = await Order.find();

    res.render('admin', { orderInfo })
})

router.post('/', async (req, res) => {
    const deliveryDate = Date.parse(req.body.deliveryDate);
    const orderNumber = req.body.orderNumber;
    const deliveryTime = req.body.deliveryTime;
    const status = req.body.status;

    await Order.findOneAndUpdate(
        { orderNumber },
        { deliveryDate, deliveryTime, status }
    );

    res.send(200)
})

module.exports = router;