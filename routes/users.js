var express = require('express');
var router = express.Router();
const Users = require('../models/clients');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('client', req.session.user );
});

router.get('/neworder', function (req, res, next) {
  res.render('neworder');
});

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
  res.redirect('/profile');
});


module.exports = router;
