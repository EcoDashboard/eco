
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

app.controller('projectsCtrl', ['$scope', function($scope){

    

    $scope.project_data = {

        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    }

    $scope.project_donut = [
        {
            value: 30,
            color:"#F7464A"
        },
        {
            value : 50,
            color : "#E2EAE9"
        },
        {
            value : 100,
            color : "#D4CCC5"
        },
        {
            value : 40,
            color : "#949FB1"
        },
        {
            value : 120,
            color : "#4D5360"
        }
    ]


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

