const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = '/api/posts';

//Lets load the mongoose module in our program
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
var mongodbURL = 'mongodb://localhost:27017/ymb';

//Lets connect to our database using the DB server URL.
mongoose.connect(mongodbURL);

var db;

var Treatment = mongoose.model('Treatment', {name: String, id: Number });

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  Treatment.find({}, function(err, docs) {
    if (!err){
        res.send(docs);
      //  process.exit();
    } else {throw err;}
  });
});

router.post('/posts', (req, res) => {
  req.body.id = parseInt(req.body.id);
  var content = new Treatment(req.body);
  content.save(function(err){
    if(err){
      return handleError(err);
    } else {
      res.redirect('/');
    }
  })
});

module.exports = router;
