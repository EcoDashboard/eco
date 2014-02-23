
var app = angular.module('eco', [ 'ngRoute' ,'tc.chartjs' ]);
 
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
        templateUrl: 'aboutus.html',
        controller: 'aboutUsCtrl'
      }).
      when('/how-it-works', {
      	templateUrl: 'howitworks.html',
      	controller: 'worksCtrl'
      }).
      when('/login', {
      	templateUrl: 'login.html',
      	controller: 'loginCtrl'
      }).
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
					"final_index": 66,
					"air_index": 65,
					"water_index": 88,
					"land_index": 45,
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

	// colors = {
	// 	'final' : 'transparent',
	// 	'air'   : '#BEE7F2',
	// 	'water' : "#00A1EF",
	// 	'land' : "#63CE0A",
	// 	'waste' : "#a1a1a1",
	// 	'energy': "#FAEE40"
	// };


	if (city != null){

		$scope.city = city;
		
		//ELEMENT DATA SETUP 
		for( var d in city.index_data) {

			console.log(city.index_data[d]);
			o = [
				{value : city.index_data[d], color : '#fff'},
				{value : 100 - city.index_data[d], color : 'transparent'}
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

		console.log($('.collapse').collapse)
   		$('.indicators').hover(
		  function(d){
		  	console.log(d.target);
			$(d.target).closest('.indicators').find('.collapse').collapse('show');
		},function(d){
			$(d.target).closest('.indicators').find('.in').collapse('hide');
		}); 



	} else {

		$location.path('/');

	}

	//jQuery page control block (animations)
	$(document).ready(function(){
		//scrolling to a sub-index block
		$("#affix_menu li").click(function(){
			$.easing.power = function(t, millisecondsSince, startValue, endValue, totalDuration) {
    			return Math.pow(t,3);
			};

			event.preventDefault();
			$('html, body').animate({
    				scrollTop: $($(this).find("a").attr("href")).offset().top-100
 				}, 
 				1500,
 				'power'
 			);
		});

		//Showing only out of screen objects in navigation menu
		$(window).scroll(function(){
			$(".subindices").each(function(){
				var blockTop = $(this).offset().top + $(this).height()*0.25;
				var blockBottom = blockTop+$(this).height()*0.6;
				var windowTop = $(document).scrollTop();
				var windowBottom = windowTop+$(window).height();
				var $menuObject = $("#affix_menu ."+$(this).attr("id"));		//menu object related to the current block
				if(blockTop >= windowTop & blockBottom <= windowBottom){		//if block on screen
					$menuObject.fadeOut();
				} else {														//if block off screen
					$menuObject.fadeIn();
				}
			});
		});		
	});
	// .jQuery control block
}]);

app.controller('aboutUsCtrl', ['$scope', function($scope){

}]);
app.controller('loginCtrl', ['$scope', function($scope){

}]);

// app.controller('dashboardCtrl', ['$scope', function($scope){

// 	console.log("Wat wat");

// }]);
