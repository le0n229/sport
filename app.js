const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const crmRouter = require('./routes/crm');

const adminsRouter = require('./routes/admin');

const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);



hbs.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

// const app = express();

const db = mongoose.connect(
  'mongodb://localhost:27017/supersport',
  {
    useNewUrlParser: true
  });


app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'session',
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  key: 'user_sid',
  secret: 'anything here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/crm', crmRouter)

app.use('/admins', adminsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
