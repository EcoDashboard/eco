
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/dashboard', { //   #/dashboard
		templateUrl:'eval.html',
		controller: 'dashboardCtrl'
	}).
<<<<<<< HEAD
	when('/waterreport',{
		templateUrl:'report-water.html',
		controller: 'waterCtrl'	
	}).
=======
    when('/projects', { //   #/projects
        templateUrl:'projects.html',
        controller: 'projectsCtrl'
    }).
    // when('/data', { //   #/data
    //     templateUrl:'data.html',
    //     controller: 'dataCtrl'
    // }).
    // when('/options', { //   #/options
    //     templateUrl:'complete-eval.html',
    //     controller: 'dashboardCtrl'
    // }).
>>>>>>> 4babf717c4996e98826430c7c1197c44188fd46a
	otherwise({
        redirectTo: '/dashboard'
      });
  }]);


app.controller('dashboardCtrl', ['$scope', function($scope){

    $scope.onClickFunction = function(parameter){
        //ng-click="onClickFunction()"
    }

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("Wat wat");

}]);
