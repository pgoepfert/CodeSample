'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'ngTouch',
  'ngSanitize'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', { templateUrl: 'partials/index.html', controller: 'HomeCtrl' });
    $routeProvider.when('/aboutus', { templateUrl: 'partials/aboutus.html', controller: 'AboutUsCtrl' });
    $routeProvider.when('/gymmoves', { templateUrl: 'partials/gymmoves.html', controller: 'GymMovesCtrl' });
    $routeProvider.when('/servicerequest', { templateUrl: 'partials/request.html', controller: 'ServiceRequestCtrl' });
    $routeProvider.when('/services/aboutourservices', { templateUrl: 'partials/services.html', controller: 'ServicesCtrl' });
    $routeProvider.when('/services/pmcontracts', { templateUrl: 'partials/pmcontracts.html', controller: 'PmContractCtrl' });
    $routeProvider.when('/services/laborwarranty', { templateUrl: 'partials/laborwarranty.html', controller: 'LaborWarrantyCtrl' });
    $routeProvider.when('/contactus', { templateUrl: 'partials/contact.html', controller: 'ContactCtrl' });
        $routeProvider.when('/sitemap', {templateUrl: 'partials/sitemap.html', controller: 'SitemapCtrl'});
    $routeProvider.otherwise({ redirectTo: '/home' });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
}]);
