const express = require('express');
const router = express.Router();
const Users = require('../models/clients');
const Order = require('../models/order');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title:'Super Sport', user: req.session.user });
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
    if (req.session.user.role === 'courier') {
      res.redirect('/courier');
    } else if (req.session.user.role === 'admin') {
      res.redirect('/admins');
    } else {
      res.redirect('/users');
    }
  }
});



router.get('/login', function (req, res, next) {
  if (req.session.user) {
    res.redirect('/users')
  }
  res.render('login', { user: req.session.user });
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
  res.render('signup', { user: req.session.user });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


router.get('/courier', async (req, res) => {
  // const orderInfo = await Order.find();
  const orderInfo = await Order.find({ 'status': { $ne: 'ОТМЕНЁН' } });
  res.render('courier', { orderInfo: orderInfo, user: req.session.user })
})

router.post('/courier', async (req, res) => {
  const orderNumber = req.body.orderNumber;
  const status = req.body.deliveryStatus;
  console.log('>>>>>>>orderNumber>>>>>>>' + orderNumber + '>>>status>>>' + status)
  await Order.findOneAndUpdate(
    { orderNumber },
    { status }
  );
  res.send(200)  
})

module.exports = router;
