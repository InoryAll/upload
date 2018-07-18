var dao = require('../dao/dao');
var fs = require("fs");
var moment = require("moment");
var path = require("path");
var formidable = require('formidable');

exports.receiveUploads = function (req, res, next) {
  
  var form = new formidable.IncomingForm();
  //设置编辑
  form.encoding = 'utf-8';
  //保留后缀
  form.keepExtensions = true;
  //设置文件存储路径
  form.uploadDir = path.join(__dirname, '../uploads');
  
  form.parse(req, function (err, fields, files){
      // 获取到时间戳
      var t = moment().valueOf();
      // 拿到扩展名
      var extname = path.extname(files.file.name);
      // 拿到文件名
      var fileName = path.basename(files.file.name, extname);
      // 旧的路径
      var oldpath = files.file.path;
      // 新的路径
      var newpath = path.join(__dirname, '../uploads/'+ fileName + '__' + t + extname);
      // 获取服务器路径
      var url = 'http://localhost:3000/' + fileName + '__' + t + extname;
      //改名
      fs.rename(oldpath, newpath, function (err) {
        if (!err) {
          res.status(200).json({ fields: fields, files: { file: { ...files.file, path: url } } });
        } else {
          console.log(err);
        }
      });
  })
};

exports.sendUploads = function (req, res, next) {
  var base = path.join(__dirname, '../uploads');
  // 现在只需要一层目录结构（读取目录下的所有文件）即可
  fs.readdir(base, function (err, files) {
    files.map((file) => {
      var extName = path.extname(file);
      return { fileName: file.split('__')[0].concat(extName), timestamp: file.split('__')[1] };
    });
    files.sort(function (pre, next) {
      return pre.timestamp > next.timestamp;
    });
    res.status(200).json({ code: 0, data: files });
  })
};
