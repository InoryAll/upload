/**
 * 数据库连接配置
 * Created by tianrenjie on 2018/3/14
 */

// mongodb配置
var dbConfig = {
  address: 'mongodb://localhost:27017/listener',
};

// mysql配置
// var dbConfig = {
//   host : 'localhost',
//   user : 'root',
//   password : '123456',
//   database : 'listener',
//   port: '3306',
// };

module.exports = dbConfig;