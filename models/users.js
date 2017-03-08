var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name:String,
  pwd:String,
})
var user = mongoose.model('User',UserSchema);
module.exports = user
