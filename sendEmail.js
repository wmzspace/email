"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
        user:"517941374@qq.com",
        pass:"jaqpitesnpqdcaec",
    },
  });
  console.log("ok");
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <517941374@qq.com>', // sender address
    to: "517941374@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


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

