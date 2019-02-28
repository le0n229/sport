const express = require('express');
const router = express.Router();
const Tests = require('../models/tests');
const Clients = require('../models/clients');




router.route('/')
    .get(async (req, res) => {
        const Client = await Clients.find();
        //    console.log(Client)
        res.render('crm', { Client })
    })


router.post('/:name', async function (req, res) {
    console.log('POST==========ID', req.params.name)
    const Client = await Clients.find();
    const testView = await Tests.find({ userName: req.params.name });
    console.log(testView)

    res.json({Client, testView })
})



module.exports = router;
