const router = require('express').Router()
const user = require('../controllers/user');
const email = require('./../utils/email')
// import { postEmail } from './../utils/email'

// 发送邮件 email
router.post('/api/user/email', email.postEmail)

//注册 signup
router.post('/api/user/signup', user.signup);

//登录 login
router.post('/api/user/login', user.login);

//获得用户基本信息 user data
router.get('/api/user/data', user.getData);

//更改用户资料 change user data
router.post('/api/user/updateUserData', user.updateUserData);

//更改用户密码 change user password
router.post('/api/user/updatePwd', user.updatePwd);

module.exports = router
