/**
 * mysql的数据库工具类
 * Created by tianrenjie on 2018/3/14
 */
//mysql操作类
var mysql = require('mysql');
var dbConfig  = require('../config');
var DBUtil = {
  connection: undefined,
  connect: function () {
    var connection = mysql.createConnection(dbConfig);
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      this.connection = connection;
      console.log('connected to ' + dbConfig.host + ':' + dbConfig.port);
      console.log('connected as id ' + connection.threadId);
    });
  },
};
module.exports = DBUtil;
