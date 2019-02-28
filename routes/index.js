const express = require('express');
const router = express.Router();
const Users = require('../models/clients');
const Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{user:req.session.user});
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
  res.render('login',{user:req.session.user});
});



router.post('/signup', async (req, res,next) => {
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
  res.render('signup',{user:req.session.user});
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


router.get('/courier', async (req, res) => {
  const orderInfo = await Order.find();
  res.render('courier', {orderInfo})
})


router.post('/courier', async (req, res) => { 
  console.log('>>>>>>>>>>>>>>'+req.body.delivered)
  
  res.render('courier', {orderInfo})
})


module.exports = router;
