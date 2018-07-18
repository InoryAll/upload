/**
 * 数据库操作逻辑层
 * Created by tianrenjie on 2018/3/14
 */

var querystring = require('querystring');
var http = require('http');
var https = require('https');
// var model = require('../model/index');
// var UserShare = model.UserShare;
var DBUtil = require('../util/dbUtil');

// dao的node请求操作
// exports.doFetchOpenId = function (code, callback) {
//   var data = '';
//   const options = {
//     hostname: 'api.weixin.qq.com',
//     port: 443,
//     path: '/sns/oauth2/access_token?appid=wxf784782cf7f0ae0c&secret=096cdb1360f5d45632e32c22b0f0d4f1&code='+code+'&grant_type=authorization_code',
//     method: 'GET',
//   };
//
//   const req = https.request(options, function(res) {
//     console.log('状态码: '+res.statusCode+'');
//     console.log('响应头: '+JSON.stringify(res.headers)+'');
//     res.setEncoding('utf8');
//     res.on('data', function(chunk) {
//       console.log('响应主体: '+chunk+'');
//       data += chunk;
//     });
//     res.on('end', function() {
//       console.log('响应中已无数据。');
//       callback(data);
//     });
//   });
//
//   req.on('error', function(e) {
//     console.error('请求遇到问题: '+e.message+'');
//   });
//
//   // 写入数据到请求主体
//   req.end();
// };

// mongodb数据操作
// exports.addUserShare = function (object, callback) {
//   var userShare = new UserShare({
//     openId: object.openId,
//     prevId: object.prevId,
//   });
//   userShare.save(callback);
// };

// mysql数据操作
// exports.addUserShare = function (listener, callback) {
//   var connection = DBUtil.connection;
//   var addSql = 'insert into listeners(openId, prevId) values(?,?)';
//   var addSqlParams = [listener.openId, listener.prevId];
//   connection.query(addSql,addSqlParams,function (err, result) {
//     if(err){
//       console.log('[INSERT ERROR] - ',err.message);
//       callback(err, err.message);
//       return;
//     }
//     console.log('--------------------------INSERT----------------------------');
//     console.log('INSERT ID:',result);
//     console.log('-----------------------------------------------------------------\n\n');
//     callback(err, result);
//   });
// };