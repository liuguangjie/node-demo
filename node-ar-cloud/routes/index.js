var express = require('express')
const dbCrud = require('./db-crud')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  // 判断有没有登录
    if (!req.session.user) {
        console.log('hhhhhhhhhhhhhhhhhhhhh')
        res.render('login.html', {})
    } else {
        var data = {start: 1, end: 5}
        dbCrud.queryAll('cloud_resoures', data)
            .then(result => {
                data.resoures = result.rows
                data.pageCount =
                    result.count % data.end == 0 ?
                        Math.floor(result.count/data.end) :
                        Math.floor(result.count/data.end + 1)
                //console.log(data)
                res.render('home.html', data)
            })


    }
});

module.exports = router;
