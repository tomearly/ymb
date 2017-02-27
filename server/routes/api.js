/*const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ymb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection: error:'));

// declare axios for making http requests
const axios = require('axios');

//GET api listing.
router.get('/', (req, res) => {
  res.send('OK');
});

//Models
var Treatment = require('./treatments');
var AboutMe   = require('./aboutme');

//Routes
Treatment.methods(['get','put','post']);
Treatment.register(router, '/treatments');

AboutMe.methods(['get','put','post']);
AboutMe.register(router, '/aboutme');

module.exports = router;
*/
