//基础使用 https://blog.csdn.net/xhcljjjk/article/details/78489314
var log4js=require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

//log输出到文件中
var log4js=require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' },//设置是否在控制台打印日志
        info: { type: 'file', filename: './logs/info.log' }
    },
    categories: {
        default: { appenders: [ 'out', 'info' ], level: 'info' }//去掉'out'。控制台不打印日志
    }
});

var logger = log4js.getLogger('info');
logger.info("~~~info~~~~");

//log输出到文件中：多个文件，同一level

var log4js=require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' },//设置是否在控制台打印日志
        info: { type: 'file', filename: './logs/info.log' },
        info_2: { type: 'file', filename: './logs/info_2.log' }

    },
    categories: {
        default: { appenders: [ 'out', 'info', 'info_2' ], level: 'info' }//去掉'out'。控制台不打印日志
    }
});

var logger = log4js.getLogger('info');
logger.info("~~~info~~~~");

var logger_2 = log4js.getLogger('info_2');
logger_2.info("~~~info~~~~");

//log输出到文件中：多个文件，不同level

log4js.configure({
    appenders: {
        out: { type: 'stdout' },//设置是否在控制台打印日志
        info: { type: 'file', filename: './logs/info.log' },
        just: { type: 'file', filename: './logs/error.log' },
'error': { type: 'logLevelFilter', appender: 'just-errors', level: 'error' }
},
categories: {
default: { appenders: [ 'out', 'info','error' ], level: 'info' }//去掉'out'。控制台不打印日志
}
});

var LogFile = log4js.getLogger();
LogFile.info('You can find logs-files in the log-dir');


var LogFile_info = log4js.getLogger('info');
LogFile_info.info('~~~~~~~info log~~~~~~~~~');

var LogFile_just = log4js.getLogger('error');
LogFile_just.error('~~~~~~~error log~~~~~~~~~');

console.log("log_start end!");



