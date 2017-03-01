
/*'use strict';

// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var aboutmeSchema = mongoose.Schema({
    description: String,
    displayOrder: Number
});

// Return model
module.exports = restful.model('AboutMe', aboutmeSchema);

 var express = require('express'),
 bodyParser = require('body-parser'),
 methodOverride = require('method-override'),
 morgan = require('morgan'),
 restful = require('node-restful'),
 mongoose = restful.mongoose;
 var app = express();

 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({'extended':'true'}));
 app.use(bodyParser.json());
 app.use(bodyParser.json({type:'application/vnd.api+json'}));
 app.use(methodOverride());

 mongoose.connect("mongodb://localhost/resources");

 var Treatment = app.resource = restful.model('resource', mongoose.Schema({
 title: String,
 year: Number,
 }))
 .methods(['get', 'post', 'put', 'delete']);

 Treatment.register(app, '/resources');

 app.listen(3000);
 */
