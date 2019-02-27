const express = require('express');
const router = express.Router();
const Users = require('../models/clients');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await Users.findOne({ username });
  if (!user) {
    res.redirect('/login');
  } else if (user.password !== password) {
    res.redirect('/login');
  } else {
    req.session.user = user;
    res.redirect('/');
  }

});



router.get('/login', function (req, res, next) {
  res.render('login');
});



router.post('/signup', async (req, res,next) => {
  try {
    const user = new Users({
      username: req.body.username,
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




module.exports = router;
