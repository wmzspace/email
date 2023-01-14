// ALTER TABLE users AUTO_INCREMENT = 2
// ALTER TABLE messages AUTO_INCREMENT = 1

var express = require("express");
//Post方式请求参数放在请求体里面，需引用body-parser解析body
var bodyParser = require("body-parser");
// var multer = require('multer'); //用于接收文件
// var upload = multer({dest: 'uploads/'});

var app = express();
// 引用
app.use(bodyParser.urlencoded({ extended: false }));
//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

("use strict");
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(receiver) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  console.log("start");
  //   let testAccount = await nodemailer.createTestAccount();
  console.log("ok");
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      //   user: testAccount.user, // generated ethereal user
      //   pass: testAccount.pass, // generated ethereal password
      user: "517941374@qq.com",
      pass: "jaqpitesnpqdcaec",
    },
  });
  console.log("ok");
  // send mail with defined transport object
  let mailOptions = {
    from: `"AlienIT" <517941374@qq.com>`, //邮件来源
    to: receiver, //邮件发送到哪里，多个邮箱使用逗号隔开
    subject: "Test Feedback ✔", // 邮件主题
    html: `
    <p>Test Successfully!</p>
    <img src='img/a.jpg'></img>
    <a href='https://wmzspace.space/email/build'>Click here to visit the website</a>
    `, // html类型的邮件正文
  };
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// {
//   from: '"AlienIT ✔" <517941374@qq.com>', // sender address
//   to: receiver, // list of receivers
//   subject: "Hello", // Subject line
//   text: "Hello world", // plain text body
//   html: "<b>Hello world</b>", // html body
// }

// 发送带有附件的邮件
// let mailOptions = {
//     from: '"Fred Foo 👻" <username@163.com>', //邮件来源
//     to: 'username@qq.com', //邮件发送到哪里，多个邮箱使用逗号隔开
//     subject: 'Hello ✔', // 邮件主题
//     html: '<b>Hello world ?</b>', // html类型的邮件正文
//     attachments: [
//     {
//         filename: 'text.txt',//附件名称
//         path: './text.txt'//附件的位置
//     }
//     ]
// };

// 发送正文中带有图片的邮件
// 正文中带有图片，正文的类型必须是html类型,图片的src值指向attachments对象中的cid的值就可以了。
// let mailOptions = {
//     from: '"Fred Foo 👻" <username@163.com>', //邮件来源
//     to: 'username@qq.com', //邮件发送到哪里，多个邮箱使用逗号隔开
//     subject: 'Hello ✔', // 邮件主题
//     html: '<b>Hello world ?![](cid:123456789)</b>', // html类型的邮件正文
//     attachments: [
//     {
//         filename: 'a.jpg',//附件名称
//         path: './a.jpg',//附件的位置
//         cid: '123456789' //为附件添加一个引用名称
//     }
//     ]
// };

app.post("/sends", (req, res) => {
  // res.end(req.body.toString())
  res.end(JSON.stringify(req.body));
  // console.log(req.body.receiver);
  main(req.body.receiver).catch(console.error);
  return;
});

app.listen(8086, function () {
  console.log("应用实例，访问地址为 http://43.143.213.226:8086");
});
