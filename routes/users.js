var express = require('express');
var router = express.Router();
const Users = require('../models/clients');
const Orders = require('../models/order');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/profile', function (req, res, next) {
  res.render('profile', req.session.user);
});

router.post('/profile', async function (req, res, next) {
  Users.updateOne({ id: req.session.user.id }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    phone: req.body.phone,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
  }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);
  });
  res.redirect('/users/profile');
});

router.post('/order', async function (req, res, next) {
  Orders.updateOne({ id: req.session.user.id }, {
    userName: req.session.user.userName,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'new',
    orderNumber: 0,
    deliveryDate: req.body.deliveryDate,
    deliveryTime: req.body.deliveryTime,
    address: req.body.deliveryAddress,
    firstName: String,
    lastName: String,
    phone: String,
    orderAmount: 0,
    orderTitle: req.body.serviceType
  }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);
  });
  res.redirect('/profile');
});


module.exports = router;
