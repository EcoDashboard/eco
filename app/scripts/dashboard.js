<<<<<<< HEAD
$(function(){ 
	
});
=======
var app = angular.module('eco-dashboard', [ 'ngRoute' ,'tc.chartjs' ]);

app.config(['$routeProvider', function($routeProvider) {
    // $routeProvider.
    //   when('/', {
    //     templateUrl: 'home.html',
    //     controller: 'homeCtrl'
    //   }).
    //   when('/city/:cityId', {
    //     templateUrl: 'city_profile.html',
    //     controller: 'cityProfileCtrl'
    //   }).
    //   when('/about-us', {
    //     templateUrl: 'about_us.html',
    //     controller: 'aboutUsCtrl'
    //   }).
    //   when('/how-it-works', {
    //   	templateUrl: 'howitworks.html',
    //   	controller: 'worksCtrl'
    //   }).
    //   otherwise({
    //     redirectTo: '/'
    //   });

	$routeProvider.
	when('/', {
		templateUrl:'complete-eval.html',
		controller: 'dashboardCtrl'
	}).
	otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('dashboardCtrl', ['$scope', function($scope){

	console.log("Wat wat");

}]);



>>>>>>> d720861d7b6fa1d49680c7f0aebb248e1645ccda
