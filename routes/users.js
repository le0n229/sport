var express = require('express');
var router = express.Router();
const Users = require('../models/clients');
const Orders = require('../models/order');
const Test = require('../models/tests');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('client', { user: req.session.user });
});



router.get('/profile', function (req, res, next) {
  res.render('profile', { user: req.session.user });
});


router.post('/profile', async function (req, res, next) {
 await Users.updateOne({ _id: req.session.user._id }, {
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
  let modifiedUser = await Users.findOne({ _id: req.session.user._id });
  req.session.user = modifiedUser;
  res.redirect('/users/profile');
});

// router.post('/profile', async function (req, res, next) {
//  await Users.updateOne({ id: req.session.user.id }, {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     address: req.body.address,
//     phone: req.body.phone,
//     age: req.body.age,
//     height: req.body.height,
//     weight: req.body.weight,
//     gender: req.body.gender,
//   }, function (err, result) {
//     if (err) return console.log(err);
//     console.log(result);
//   });

//   // let modifiedUser = await Users.findOne({ _id: req.session.user._id });
//   // req.session.user = modifiedUser;


//     res.redirect('/users/profile');
// });

router.post('/neworder', async function (req, res, next) {
  const order = new Orders({
    userName: req.session.user.userName,
    createdAt: Date.now(),
    status: 'Открыт',
    deliveryDate: req.body.deliveryDate,
    deliveryTime: req.body.deliveryTime,
    address: req.body.deliveryAddress,
    firstName: req.session.user.firstName,
    lastName: req.session.user.lastName,
    phone: req.session.user.phone,  
    orderTitle: req.body.serviceType,
  });
  await order.save();

  // function (err, result) {
  //   if (err) return console.log(err);
  //   console.log(result);
  // });

  res.redirect('/users');
});

router.get('/neworder', function (req, res, next) {
  res.render('neworder', { user: req.session.user });
});


router.get('/prevorders', async function (req, res, next) {
  const orderInfo = await Orders.find({ userName: req.session.user.userName });
  res.render('prevOrders', { user: req.session.user, order: orderInfo });
});


router.post('/addadmin', async function (req, res, next) {
  Users.updateOne({ userName: req.body.username }, {
    role: 'admin'
  }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);
  });
  res.redirect('/users');
});

router.post('/addcourier', async function (req, res, next) {
  Users.updateOne({ userName: req.body.username }, {
    role: 'courier'
  }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);
  });
  res.redirect('/users');
});

router.get('/analizes', async (req, res) => {
  let userName = req.session.user.userName;
  if (!userName) {
    res.redirect('/')
  }
  let testData = await Test.find({userName})
  res.render('analize', {testData, user: req.session.user })
})

module.exports = router;
