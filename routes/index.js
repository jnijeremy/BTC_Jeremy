/*
Routes are kind of like a combination of models 
and controllers in this setup – they direct traffic 
and also contain some programming logic
*/
var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

/* GET home page. */
// render index.js
router.get('/', function(req, res) {
  res.render('index', { title: 'BTC_Jeremy' });
});

/* GET data page, also be called when Angular starts $interval */
router.get('/data', function(req, res) {
  // parallel execution
  async.parallel(
  {
    CAD: function(callback) {
      request('https://api.bitcoinaverage.com/ticker/global/CAD/last', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(null, body);
        }
      });
    },
    BRL: function(callback) {
      request('https://api.bitcoinaverage.com/ticker/global/BRL/last', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(null, body);
        }
      });
    }, 
    time: function(callback) {
      callback(null, getTime());
    }
  },
  // execute after async, return data in an object
  function(err, results) {
    res.send(results);
  });
});

// get current time
function getTime(){
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = (hour < 10 ? '0' : '') + hour;
  min = (min < 10 ? '0' : '') + min;
  sec = (sec < 10 ? '0' : '') + sec;
  return hour + ':' + min + ':' + sec;
}

module.exports = router;
