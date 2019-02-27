const express = require('express');
const router = express.Router();
const Clients = require('../models/clients');





router.route('/')
    .get(async (req, res) => {
        const Client = await Clients.find();
        res.render('crm', { Client })
    })


router.post('/:id', async function (req, res) {

    const clientView = await Clients.findById(req.params.id);


    res.send(200, { clientView })
})



module.exports = router;
