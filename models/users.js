var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username:String,
  password:String,
})
var user = mongoose.model('User',UserSchema);
module.exports = user
