'use strict';

angular.
module('kniveList').
component('kniveList', {
    templateUrl: 'js/knive-list/knive-list.template.html',

    controller: ['$http', function KniveListController($http) {
        var self = this;
        self.orderProp = 'title';

        $http.get('db/knifedb.json').then(function(response){
            self.knives = response.data;
        });
    }]

});