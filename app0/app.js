(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('gDrive', [
    'ngRoute', 'ui.router'
  ]);

  angular.module('gDrive').config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  });
})();

