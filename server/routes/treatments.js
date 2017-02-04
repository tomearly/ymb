'use strict';

// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var treatmentSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: String,
    inactive: String,
    gender: String
});

// Return model
module.exports = restful.model('Treatments', treatmentSchema);
