const express = require('express')
const dbCrud = require('./db-crud')
const router = express.Router()

router.get('/arList', function(req, res, next) {
    var pageIndex = req.query.pageIndex
    var data = {start: pageIndex?pageIndex:1, end: 5}
    dbCrud.queryAll('cloud_resoures', data)
        .then(result => {
            data.resoures = result.rows
            data.pageCount =
                result.count % data.end == 0 ?
                    Math.floor(result.count / data.end) :
                    Math.floor(result.count / data.end + 1)
            //console.log(data)
            res.render('home.html', data)
        })
})

module.exports = router