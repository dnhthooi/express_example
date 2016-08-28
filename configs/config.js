var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-example'
    },
    port: process.env.PORT || 4000
  }
};

module.exports = config[env];
