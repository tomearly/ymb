var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = function() {

  var schema = new Schema({
     name: String,
     id: Number,
     price: String,
     inactive: String
  });

mongoose.model('Treatment',schema);
