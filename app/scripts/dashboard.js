
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/dashboard', { //   #/dashboard
		templateUrl:'eval.html',
		controller: 'dashboardCtrl'
	}).

	when('/water',{
		templateUrl:'report-water.html',
		controller: 'waterCtrl'	
	}).
	when('/air',{
		templateUrl:'report-air.html',
		controller: 'airCtrl'	
	}).
	when('/land',{
		templateUrl:'report-land.html',
		controller: 'landCtrl'	
	}).
	when('/waste',{
		templateUrl:'report-waste.html',
		controller: 'wasteCtrl'	
	}).
	when('/energy',{
		templateUrl:'report-energy.html',
		controller: 'energyCtrl'	
	}).
   when('/projects', { //   #/projects
       templateUrl:'projects.html',
       controller: 'projectsCtrl'
   }).
   when('/data', { //   #/data
        templateUrl:'data.html',
        controller: 'dataCtrl'
   }).
   when('/options', { //   #/options
        templateUrl:'complete-eval.html',
        controller: 'dashboardCtrl'
   }).

	when('/water',{
		templateUrl:'report_water.html',
		controller: 'waterCtrl'	
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

app.controller('waterCtrl', ['$scope', function($scope){

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

app.controller('projectsCtrl', ['$scope', function($scope){

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
