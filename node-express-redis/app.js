const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
//解决每次重启session丢失的问题
/* const FileStore = require('session-file-store')(session)
const fileStoreOptions = {
    ttl:60 * 60 * 24,
    secret:'se_id'
} */




app.use(logger('dev')); // 开发环境日志
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// redis来存储 session ID
var RedisStrore = require('connect-redis')(session)
var config={
"cookie" : {
   "maxAge" : 1800000
},
    "sessionStore" : {
    "host" : "localhost",
    "port" : "6379",
    "pass" : "123456",
    "db" : 1,
    "ttl" : 1800,
    "logErrors" : true
    }
}
app.use(session({
    store: new RedisStrore(config.sessionStore),
    secret: 'se_id',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60   //有效期一天
    }
}))
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));


// reg  plugins
app.engine('html', require('express-art-template'))


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
