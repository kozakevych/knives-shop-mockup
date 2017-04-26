'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('kniveDetail').
filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
}).
component('kniveDetail', {
    templateUrl: 'js/knive-detail/knive-detail.template.html',
    controller: ['$http', '$routeParams',
        function PhoneDetailController($http, $routeParams) {
            var self = this;
            this.knifeId = $routeParams.knifeId;

            switch ($routeParams.knifeId[0]) {
                case 'b':
                    this.companyName = "benchmade";
                    break;
                case 's':
                    this.companyName = "spyderco";
                    break;
                case 'o':
                    this.companyName = "ontario";
                    break;
                default:
                    // statements_def
                    break;
            }


            $http.get('db/company-descr.json').then(function(response) {
                self.companies = response.data;
            });

            $http.get('db/knifedb.json').then(function(response){
            		self.knives = response.data;
        				self.l = self.knives.length;

								for (var j = 0; j < self.l; j++) {
								  if (self.knives[j].id === self.knifeId) {
								    self.i = self.knives[j];
								    break;
								  }
								}
        		});


        }
    ]
});