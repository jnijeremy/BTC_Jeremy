<<<<<<< HEAD
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

=======

var express = require('express');
var path = require('path');
>>>>>>> b6159e99fc20829d742a497646a0571b2bd99a9c
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
<<<<<<< HEAD

//It instantiates Express and assigns our app variable to it
var app = express(); 

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
=======
//creates a bunch of basic JavaScript variables and ties them to certain packages, dependencies, node functionality, and routes. 

var routes = require('./routes/index');  
//Routes are kind of like a combination of models and controllers in this setup – they direct traffic and also contain some programming logic

var app = express(); 
//It instantiates Express and assigns our app variable to it

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

>>>>>>> b6159e99fc20829d742a497646a0571b2bd99a9c
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
<<<<<<< HEAD
app.get('/', routes);
app.get('/data', routes);

//start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

=======
app.use('/', routes);


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
// the object that's actually returned as the result of a require call
>>>>>>> b6159e99fc20829d742a497646a0571b2bd99a9c
