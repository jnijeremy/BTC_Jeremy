var myApp = angular.module('myApp',[]);
var interval = 5;

// execute 
myApp.controller('BTC_ctrl',['$scope', '$http', '$interval', function($scope, $http, $interval)
{
  $scope.spinning = false; // flag variable for spinner
  $scope.count = interval;  // countdown

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
    error(function(data){
       $scope.spinning = false;
    });
  };

  //code start, initialize
  $scope.fetch();

  //countdown and repeat fetch() every 'interval' seconds
  $interval(function() 
  {
    if($scope.count == 0){
      $scope.count = interval;
      $scope.fetch();
    }
    // if fetch is going on, countdown should stop
    else if($scope.spinning == false)
      $scope.count--;
  }, 1000);

}]);



