const winston = require('winston');
require('winston-daily-rotate-file');

const getTransport = function(path,logName,maxFiles){
    return new winston.transports.DailyRotateFile({
        filename: `${path}${logName}-%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        maxSize: '100m',
        maxFiles: maxFiles
    });
};

const createNewLogger = function(path,logName,maxFiles){
    return winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
            winston.format.printf((info) => {
                return JSON.stringify({
                    timestamp: info.timestamp,
                    message: info.message
                });
            })),
        transports: [getTransport(path,logName,maxFiles)]
    });
};

const loggers = {
    default: createNewLogger('./logs/','application','2d')
};


const getLogger = function(logName = 'default'){
    return loggers[logName];
};

module.exports = {getLogger};
