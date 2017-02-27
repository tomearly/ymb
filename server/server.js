'use strict';

// Get dependencies
const express = require('express'),
  path = require('path'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  restful = require('node-restful'),
  mongoose = restful.mongoose;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

mongoose.connect("mongodb://localhost/ymb");

const Resource = app.resource = restful.model('treatment', ({
  id: Number,
  name: String,
  price: String,
  gender: String,
  products: String,
  duration: Number
}))
  .methods(['get', 'put', 'post', 'delete']);

Resource.register(app, '/api/treatment');
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);
