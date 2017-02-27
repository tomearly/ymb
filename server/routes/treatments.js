/*'use strict';
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const treatmentSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: String,
    inactive: String,
    gender: String
});

// Return model
const Resource = restful.model('Treatments', treatmentSchema).methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resources');
*/
