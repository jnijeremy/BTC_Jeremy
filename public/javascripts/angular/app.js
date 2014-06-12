var myApp = angular.module('myApp',[]);
var interval = 15;

// execute 
myApp.controller('BTC_ctrl',['$scope', '$http', '$interval', function($scope, $http, $interval)
{
  //$scope.CAD=0;
  //$scope.BRL=0;
  //$scope.time = '00:00:00:00'
  $scope.spinning = false; // flag variable for spinner
  $scope.count = 15;  // countdown

  $scope.fetch = function(){
  $scope.spinning = true;
  $http({method: 'GET', url: '/data'}).
    success(function(data)
    {
      $scope.CAD = data.CAD;
      $scope.BRL = data.BRL;
      $scope.spinning = false;
      $scope.time = data.time;
    }).
    error(function(data){});
  };

  //code start, initialize
  $scope.fetch();

  //refresh every 15 secs
  $interval(function() 
  {
    if ($scope.spinning == false)
      $scope.refresh();
  }, interval*1000);

  //countdown
  $interval(function() 
  {
    if($scope.count == 0){
      $scope.count = 15;
    }
    // if fetch is going on, countdown should stop
    else if($scope.spinning == false)
      $scope.count--;
  }, 1000);

}]);



