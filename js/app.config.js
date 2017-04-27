'use strict';

angular.
	module('kniveApp').
	config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {
	        $locationProvider.hashPrefix('!');

	        $routeProvider.
	        when('/knives', {
	            template: '<knive-list></knive-list>'
	        }).
	        when('/knives/:knifeId', {
	            template: '<knive-detail></knive-detail>'
	        }).
	        otherwise('/knives');
	    }
	]);