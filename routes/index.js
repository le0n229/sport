const express = require('express');
const router = express.Router();
const Users = require('../models/clients');
const Order = require('../models/order');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', req.session.user);
});

// module.exports = router;
router.post('/login', async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;

  const user = await Users.findOne({ userName });
  if (!user) {
    res.redirect('/login');
  } else if (user.password !== password) {
    res.redirect('/login');
  } else {
    req.session.user = user;
    res.redirect('/users');
  }

});



router.get('/login', function (req, res, next) {
  res.render('login', req.session.user);
});



router.post('/signup', async (req, res, next) => {
  try {
    const user = new Users({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    await user.save()
    req.session.user = user;
    res.redirect('/');
  }
  catch (error) {
    console.log(error.message);
    // res.status(500).send(error);
    // res.render('entries/signup',{message:error.message});
    next(error)
  };
});

router.get('/signup', function (req, res, next) {
  res.render('signup');
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


router.get('/courier', async (req, res) => {
  // const orderInfo = await Order.find();
  const orderInfo = await Order.find({'status': { $ne: 'ОТМЕНЁН'}});
  res.render('courier', { orderInfo }) 
})

router.post('/courier/:id', async (req, res) => {
  console.log('>>>>>>>>>>>>>>' + req.body.submit_param + '>>>>>>' + req.params.id)
  // Order.findOne({ orderNumber: req.params.id }, function (err, usr) {
  //   Order.status = req.body.submit_param;
  //   Order.save(function (err) { });
  // });
  const order = await Order.findOne({ _id: req.params.id },);
  order.status = req.body.submit_param;
  await order.save(function (err) { });
  
  // res.render('courier', { orderInfo })
  res.redirect('/courier');
})

module.exports = router;
