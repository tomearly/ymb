'use strict'; 

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
