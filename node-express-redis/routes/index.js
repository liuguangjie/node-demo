var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.loginUser) {
    res.render('login.html') //渲染login.html页面
    return
  }
  res.render('index.html', { user: req.session.loginUser });
});

module.exports = router;
