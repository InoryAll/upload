// mongodb数据对象
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserShareSchema = new Schema({
  openId: String,
  prevId: String,
});

mongoose.model('UserShare', UserShareSchema);
