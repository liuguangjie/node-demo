const express = require('express');
const dbCrud = require('./db-crud')
const crypto = require('crypto')
const router = express.Router();

/* GET users listing. */
router.post('/user/login', function(req, res, next) {
    var name = req.body.login_name
    var password = req.body.password
    var md5 = crypto.createHash('md5')
    md5.update(password)
    password = md5.digest('hex')
    dbCrud.queryOne('manager_user', {where: {login_name: name, password: password}})
        .then(result => {
            if (result.one) {
                req.session.user = result.one
                //跳转首页
                res.redirect('/')
            } else {

                //console.log('账号或密码错误')
                //跳转登录页给出提示
                res.render('login.html', {errorMsg:'账号或密码错误'})
            }

        })
    //dbCrud.excuteSql(sql, )


});

module.exports = router;
