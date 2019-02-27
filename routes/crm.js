const express = require('express');
const router = express.Router();






router.route('/')
    .get((req, res) => {
        res.render('crm')
    })
    .post((req, res) => {
        
        res.send(200, userCart)
    })


module.exports = router;
