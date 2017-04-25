'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('kniveDetail').
  component('kniveDetail', {
    templateUrl: 'src/js/knive-detail/knive-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
      	var self = this;

        $http.get('src/db/company-descr.json').then(function(response){
        	self.phone = response.data;
        })
      }
    ]
  });
