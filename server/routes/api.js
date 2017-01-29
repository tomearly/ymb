const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

let MongoClient = require('mongodb').MongoClient;
let db_connection;
// Connection URL. This is where your mongodb server is running.
const mongodbURL = 'mongodb://localhost:27017/ymb';
MongoClient.connect(mongodbURL, function (err, db) {
  if (err) throw err
  else db_connection = db;
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('GET /treatments<br>POST /treatments<br>GET /aboutme');
});

// Get all posts
router.get('/treatments', (req, res) => {
  db_connection.collection('treatments').find().toArray(function (err, result) {
    console.log(result);
    if (err) throw err
    else res.send(result);
  })
});

router.post('/treatments', (req, res) => {
  req.body.id = parseInt(req.body.id);
    db_connection.collection('treatments').insert(req.body, (err, result) => {
      if(err) throw err
      else res.send(result);
    })
});

// Get all about me
router.get('/aboutme', (req, res) => {
  db_connection.collection('aboutme').find().toArray(function (err, result) {
    console.log(result);
    if (err) throw err
    else res.send(result);
  })
});

router.post('/aboutme', (req, res) => {
  req.body.id = parseInt(req.body.id);
    db_connection.collection('treatments').insert(req.body, (err, result) => {
      if(err) throw err
      else res.send(result);
    })
});

module.exports = router;
