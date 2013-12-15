
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/dashboard', { //   #/dashboard
		templateUrl:'eval.html',
		controller: 'dashboardCtrl'
	}).
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
