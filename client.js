  var express = require('express');
  var path = require('path');
  var morgan = require("morgan");
  var app = express();


  // all environments
  app.set('port', process.env.PORT || 9000);

  app.use(morgan("dev"));

  app.use(function (req, res, next) {
    res.set('X-Powered-By', 'Homey');
    next();
  });

  // app.set('views', __dirname + '/views');
  // app.engine('html', require('ejs').renderFile);
  // app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, 'app')));
  // app.use("/app", express.static(path.join(__dirname, 'app')));
  app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));

  // app.get("/", function(req, res) {
  //   res.render("index.html");
  // });

  app.listen(app.get('port'));