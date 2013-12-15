
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/dashboard', { //   #/dashboard
		templateUrl:'eval.html',
		controller: 'dashboardCtrl'
	}).

	when('/water',{
		templateUrl:'report_water.html',
		controller: 'waterCtrl'	
	}).
	when('/air',{
		templateUrl:'report_air.html',
		controller: 'airCtrl'	
	}).
	when('/land',{
		templateUrl:'report_land.html',
		controller: 'landCtrl'	
	}).
	when('/waste',{
		templateUrl:'report_waste.html',
		controller: 'wasteCtrl'	
	}).
	when('/energy',{
		templateUrl:'report_energy.html',
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

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("Main Dashboard");
}]);

app.controller('waterCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("WaterReport");

}]);
app.controller('airCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("AirReport");

}]);
app.controller('landCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("LandReport");

}]);

app.controller('wasteCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("WasteReport");

}]);

app.controller('energyCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("EnergyReport");

}]);

app.controller('projectsCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("EnergyReport");

}]);

app.controller('dataCtrl', ['$scope', function($scope){

	$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
	};	
	console.log("EnergyReport");

}]);
