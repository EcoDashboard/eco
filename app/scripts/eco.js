
var app = angular.module('eco', [ 'ngRoute' ]);
 
// app.config(['$compileProvider', function ($compileProvider){
//   // Needed for routing to work
//   $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
// }]);

// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

//   $routeProvider.when('/', { 
//     templateUrl: 'index.html',
//     controller: 'homeCtrl'
//   });

//   $routeProvider.otherwise({
//     redirectTo: '/'
//   });

// }]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      }).
      when('/city/:cityId', {
        templateUrl: 'city_profile.html',
        controller: 'cityProfileCtrl'
      }).
      when('/about_us', {
        templateUrl: 'aboutus.html',
        controller: 'aboutUsCtrl'
      }).
      when('/how-it-works', {
      	templateUrl: 'howitworks.html',
      	controller: 'worksCtrl'
      }).
      when('/dashboard',{
      	templateUrl: 'dashboard.html',
      	controller: 'dashboardCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.controller('homeCtrl', ['$scope', function($scope){

	$('nav').removeClass("navbar-fixed-top").addClass("navbar-fixed-bottom");

}]);


app.controller('cityProfileCtrl', ['$scope', function($scope){

	console.log("Wat wat");

}]);

app.controller('aboutUsCtrl', ['$scope', function($scope){

	console.log("Wat wat");

}]);