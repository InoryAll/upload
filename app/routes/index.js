/**
 * node服务器路由
 * Created by tianrenjie on 2018/3/14
 */

var express = require('express');
var router = express.Router();
var service = require('../service/service');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 文件目录
router.get('/uploadDir', function(req, res, next) {
  var base = path.join(__dirname, '../uploads');
  // 现在只需要一层目录结构（读取目录下的所有文件）即可
  fs.readdir(base, function (err, files) {
    res.render('index', { title: 'FileDirectory', filedirs: files });
  })
});

router.get('/getFile', service.sendUploads);
router.post('/upload', service.receiveUploads);

module.exports = router;
