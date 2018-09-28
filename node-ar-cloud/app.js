const createError = require('http-errors');
const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

const app = express();
const session = require('express-session')
//解决每次重启session丢失的问题
const FileStore = require('session-file-store')(session)
const fileStoreOptions = {
    ttl:60 * 60 * 24,
    secret:'ar'
}

//日志记录器
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'info'
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'ar',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24   //有效期一天
    }
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// reg  plugins
app.engine('html', require('express-art-template'))


/**拦截器*/
app.use(function (req, res, next) {
    if (req.session.user) {
        next()
    } else {
        if (req.url.indexOf('login') >= 0) {
            next()
        } else {
            logger.info('没有登录跳转到登录页')
            res.render('login.html')
            res.end()
        }

    }

    /*if (req.session.user) {
        //用户登录过
        next()
    } else {
        //解析用户请求路径
        var arr = req.url.split('/');
        logger.info('请求路径拆分：' + JSON.stringify(arr));
        //去除get请求携带的参数
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split('?')[0];
        }

        if (arr.length > 1) {
            if (arr[1] === 'adminlogin' || arr[1] === 'adminlogout' || arr[1] === 'login_commit'||arr[1] === 'video') {
                next();
            } else {
                logger.error('intercept：用户未登录执行登录拦截，路径为：' + arr[1]);
                res.redirect('/');  // 将用户重定向到登录页面
                res.end();
            }
        }
    }*/


})

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const arlist = require('./routes/arList')
app.use(indexRouter);
app.use(usersRouter);
app.use(arlist);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
