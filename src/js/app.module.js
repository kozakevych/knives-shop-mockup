'use strict';

/**
* knivesApp Module
*
* Description
*/

angular.module('kniveApp', [
    'ngRoute',
    'kniveDetail',
    'kniveList'
]);

angular.module('kniveApp').factory('knifeInfo', function(){
  var info = {};

  return info;
});