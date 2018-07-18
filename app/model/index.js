/**
 * 数据库模型层
 * Created by tianrenjie on 2018/3/14
 */


// mongodb操作
// var mongoose = require('mongoose');
// var config = require('../config');
//
// mongoose.Promise = global.Promise;
//
// mongoose.connect(config.address);
//
// var connection = mongoose.connection;
// connection.on('open', function () {
//   // createData();
//   console.log('connected to:'+config.address);
// });
// connection.on('error', function (err) {
//   if (err) {
//     console.log('connected to %s error', config.address);
//     process.exit(1);
//   }
// });
//
// require('./userShare');
//
// exports.UserShare = mongoose.model('UserShare');
//
//   function createData() {
//      var ObjectId = mongoose.Types.ObjectId;
//      var UserShareIds = [new ObjectId, new ObjectId];
//      var UserShares = [];
//      var UserShare = mongoose.model('UserShare');
//
//      UserShares.push({ _id: UserShareIds[0], openId: 'testOpenId', prevId: 'testPrevId' });
//
//      UserShare.create(UserShares, function (err, docs) {
//      });
//   }
