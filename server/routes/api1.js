const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

//Lets load the mongoose module in our program
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
var mongodbURL = 'mongodb://localhost:27017/ymb';

//Lets connect to our database using the DB server URL.
mongoose.connect(mongodbURL);

var db;

var Treatment = mongoose.model('Treatment', {name: String, id: Number, price: Number });
var Aboutme = mongoose.model('aboutme', {description: String });
console.log(aboutme);
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/treatments', (req, res) => {
  Treatment.find({}, null, {sort: {_id: -1}}, function(err, docs) {
    if (!err){
        res.send(docs);
    } else {throw err;}
  });
});

router.post('/treatments', (req, res) => {
  req.body.id = parseInt(req.body.id);
  var content = new Treatment(req.body);
  content.save(function(err){
    if(err){
      console.log(err);
      res.redirect('/admin/treatments');
    } else {
      res.redirect('/admin/treatments');
    }
  })
});

router.put('/treatments', (req, res) => {
  var content = new Treatment(req.body);
  req.body.id = parseInt(req.body.id);
  content.isNew = false;
  content.save(function(err){
    if(err){
      console.log(err);
      res.redirect('/admin/treatments');
    } else {
      res.redirect('/admin/treatments');
    }
  });
});

// Get all about me
router.get('/aboutme', (req, res) => {
  Aboutme.find({}, function(err, docs) {
    if (!err){
      console.log(docs);
        res.send(docs);
    } else {throw err;}
  });
});

module.exports = router;
