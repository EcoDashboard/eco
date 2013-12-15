
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/dashboard', {
		templateUrl:'complete-eval.html',
		controller: 'dashboardCtrl'
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