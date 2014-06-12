//entry of the app
/*
creates a bunch of basic JavaScript variables 
and ties them to certain packages, dependencies, 
node functionality, and routes. 
*/
var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//It instantiates Express and assigns our app variable to it
var app = express(); 

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', routes);
app.get('/data', routes);

//start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

