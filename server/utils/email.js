//引入模块 Introduction module
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const emailBase = require('./../config/emailBase')

exports.postEmail = async opt => {
  //设置邮箱配置 Set mailbox configuration
  let transporter = nodemailer.createTransport({
    host: emailBase.host, //邮箱服务的主机，如smtp.qq.com Hosts for mailbox services, such as smtp.qq.com
    port: emailBase.port, //对应的端口号 Corresponding port number
    //开启安全连接 Open a secure connection
    // secure: false,
    secureConnection: true,
    //用户信息 User information
    auth: emailBase.auth
  })

  const template = ejs.compile(fs.readFileSync(path.resolve(__dirname, 'email.ejs'), 'utf8'))

  const html = template({
    code: 'Ejs123',
    goods: opt.goods
  })

  let mailOptions = {
    from: `${emailBase.hostTitle} <${emailBase.auth.user}>`, //谁发的 who send
    to: opt.email, //发给谁 To whom
    subject: 'LovePlay-Activation code', 
    html 
  }
  return new Promise((resolve, reject) => {
    //发送邮件 Send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error)
      }
      resolve(info)
    })
  })
}
