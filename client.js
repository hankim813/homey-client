  var express = require('express');
  var path = require('path');
  var morgan = require('morgan');
  var app = express();


  // all environments
  var port = process.env.PORT || 9000;

  app.use(morgan('dev'));

  app.use(function (req, res, next) {
    res.set('X-Powered-By', 'Homey');
    next();
  });

  app.use(express.static(__dirname + '/dist'));
  // app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));

  app.listen(port);
  console.log('Han and Sam met at port ' + port);