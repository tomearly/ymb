'use strict';

// Get dependencies
const express = require('express'),
  path = require('path'),
  session = require('express-session'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  restful = require('node-restful'),
  mongoose = restful.mongoose,
  compression = require('compression'),
  config = require('./config'),
  passwordless = require('passwordless'),
  MongoStore = require('passwordless-mongostore'),
  email   = require('emailjs');

//EMAIL
var sess = {
  secret: config.secret,
  cookie: {}
}

var smtpServer  = email.server.connect({
  user:    config.yourEmail,
  password: config.yourPwd,
  host:    config.yourSmtp,
  ssl:     true
});

// Your MongoDB TokenStore
var pathToMongoDb = 'mongodb://localhost/passwordless-simple-mail';
passwordless.init(new MongoStore(pathToMongoDb));

// Set up a delivery service
passwordless.addDelivery(
  function(tokenToSend, uidToSend, recipient, callback, req) {
    var host = config.host;
    smtpServer.send({
      text:    'Hello!\nAccess your account here: http://'
      + host + '?token=' + tokenToSend + '&uid='
      + encodeURIComponent(uidToSend),
      from:    config.yourEmail,
      to:      recipient,
      subject: 'Token for ' + host
    }, function(err, message) {
      if(err) {
        console.log(err);
      }
      callback(err);
    });
  });

//END EMAIL

const app = express();
app.set('views', path.join(__dirname, 'dist/views'));
app.set('view engine', 'pug');
//app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use(session(sess));

app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({ successRedirect: '/'}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// get an instance of router
var router = express.Router();

/* GET login screen. */
app.get('/login', function(req, res) {
  //res.render('index', { title: 'Login', message: 'Please provide your email address' });
  res.sendFile(path.join(__dirname, 'dist/login.html'));
});

app.get('/logged_in', passwordless.acceptToken(),
  function(req, res) {
    console.log(req.user);
    res.render('index', { title: 'Logged In', message: 'Welcome' });
  });

var users = [
  { id: 1, email: 'tom.early@gmail.com'  }
];

/* POST login details. */
app.post('/sendtoken',
  passwordless.requestToken(
    function(user, delivery, callback,req) {
      for (var i = users.length - 1; i >= 0; i--) {
        if(users[i].email === user.toLowerCase()) {
          return callback(null, users[i].id);
        }
      }
    }),
  function(req, res) {
    // success!
    //res.render('sent');
    res.render('index', { title: 'Sent', message: 'Please check your email for your login link.' });
  });

mongoose.connect("mongodb://localhost/ymb");

const Treatment = app.resource = restful.model('treatment', ({
  id: Number,
  name: String,
  price: String,
  gender: String,
  products: String,
  duration: Number
}))
  .methods(['get', 'put', 'post', 'delete']);

Treatment.register(app, '/api/treatment');

const AboutMe = app.resource = restful.model('aboutme', ({
  description: String
}))
  .methods(['get', 'put', 'post', 'delete']);

AboutMe.register(app, '/api/aboutme');

//Lock down?
//app.get('/admin/*', passwordless.restricted({ failureRedirect: '/login' }),
 // function(req, res, next) {
 //   next();
 // }
//);
//end of lock down

app.get('/logout', passwordless.logout(),
  function(req, res) {
    res.redirect('/');
  });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);
