var express = require('express');
var router = express.Router();
const mongo = require('./db/mongoose')
/* GET users listing. */
router.post('/login', function(req, res, next) {
  //把用户信息存入session中
  var user_info = req.body
  // 需要解决的问题
  /**
   * 1.回调地狱的问题
   * 2. 重定向 session 中存的值丢失
   *  需要写到回调里面才行。。。
   * 
   */
  
  mongo.findOne('user', {'user_id': user_info.loginName}, function(err, result) {
    if (result) {
      req.session['loginUser'] = req.body
      res.redirect('/')
    } else if (!err) {
      //console.log('login error')
       res.redirect('/')
    }
  })
  
});

router.get('/sigdown', function(req, res) {
  req.session['loginUser'] = null
  res.redirect('/')
})
module.exports = router;
