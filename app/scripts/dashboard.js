
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/dashboard', {
		templateUrl:'complete-eval.html',
		controller: 'dashboardCtrl'
	}).
	when('/waterreport',{
		templateUrl:'report-water.html',
		controller: 'waterCtrl'	
	}).
	otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('dashboardCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("Wat wat");

}]);
