
var app = angular.module('eco', [ 'ngRoute' ,'tc.chartjs' ]);
 
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
      when('/about-us', {
        templateUrl: 'about_us.html',
        controller: 'aboutUsCtrl'
      }).
      when('/how-it-works', {
      	templateUrl: 'howitworks.html',
      	controller: 'worksCtrl'
      }).
      // when('/dashboard',{
      // 	templateUrl: 'dashboard.html',
      // 	controller: 'dashboardCtrl'
      // }).
      otherwise({
        redirectTo: '/'
      });
  }]);


app.factory('City', ['$http', function($http){

	cities = [];

	cities.push(
			//EXAMPLE SEATTLE OBJECT
			{
				"city_id"        : "206",
				"city_name"      : "Seattle",
				"country_name"   : "United States",
				"email"		     : "daniel@seattle.org",
				"contact_number" : "12065558050",
				"council_address": "1st Ave, Seattle WA 98105",
				"index_data" : {
					"air_index": 65,
					"water_index": 88,
					"earth_index": 45,
					"waste_index": 99,
					"energy_index": 33
				}
			}
	);

	return {
		get: function(cityId){
			console.log(cities);
			for( var city in cities){
				console.log(cities[city]);
				if (cities[city].city_id == cityId){
					return cities[city];
				}
			}

			return null;

		},
		seattle: function(){
			return {

				// city_id
				// Unique identifier. Will begin with initial of city, followed by a 3 digit number. Eg: A001
				// city_name
				 
				// Name of the city
				// country_name
				 
				// Name of the country to which the city belongs
				// state_name
				 
				// Name of the state to which the city belongs
				// email
				 
				// Contact email of the city council
				// contact_number
				 
				// Contact number of the city council
				// council_address
				 
				// Contact address of the city council
				// "city_id"        : "206"
				// "city_name"      : "Seattle",
				// "country_name"   : "United States",
				// "email"		     : "daniel@seattle.org",
				// "contact_number" : "12065558050",
				// "council_address": "1st Ave, Seattle WA 98105"
			}
		}
	}

}]);


app.controller('homeCtrl', ['$scope', function($scope){

	$('nav').removeClass("navbar-fixed-top").addClass("navbar-fixed-bottom");

}]);


app.controller('cityProfileCtrl', ['City', '$scope', '$location', '$routeParams', function(City, $scope, $location, $routeParams){
	console.log("CITY PROFILE");

	city = City.get($routeParams.cityId);

	console.log("cityId "+ $routeParams.cityId);

	colors = {
		'air'   : '#BEE7F2',
		'water' : "#00A1EF",
		'earth' : "#63CE0A",
		'waste' : "#a1a1a1",
		'energy': "#FAEE40"
	};


	if (city != null){

		$scope.city = city;
		
		//ELEMENT DATA SETUP 
		for( var d in city.index_data) {

			console.log(city.index_data[d]);
			o = [
				{value : city.index_data[d], color : '#fff'},
				{value : 100 - city.index_data[d], color : colors[d.split("_")[0]]}
			]
			$scope[d] = o;
		}

		$scope.chart_options = {
			percentageInnerCutout : 70,
			animationSteps : 60,
			animationEasing : "easeOutCubic",
			// animateScale : true,
			segmentShowStroke: false
		};


   		$('.indicators').hover(
    	function(d){
    		console.log(d.target);
    		$(d.target).find('.row.collapse').collapse('show');
    	},function(d){
    		$(d.target).find('.row.in').collapse('hoveride');
    	}); 



	} else {

		$location.path('/');

	}

	
	
}]);

app.controller('aboutUsCtrl', ['$scope', function($scope){

	console.log("Wat wat");

}]);

// app.controller('dashboardCtrl', ['$scope', function($scope){

// 	console.log("Wat wat");

// }]);