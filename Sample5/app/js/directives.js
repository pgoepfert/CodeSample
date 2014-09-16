'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('headerTemplate', function(){
        return {
            restrict: 'E',
            templateUrl: "partials/header.html",
            replace: true
        }
    })
    .directive('navTemplate', function(){
        return {
            restrict: 'E',
            templateUrl: "partials/nav.html",
            replace: true
        }
    })
    .directive('slidersTemplate', function() {
        return {
            restrict: "E",
            templateUrl: "partials/carousel.html",
            replace: true
        }
    })
    .directive('manufacturerTemplate', function(){
        return {
            restrict: 'E',
            templateUrl: "partials/manufacturers.html",
            replace: true
        }
    })
    .directive('footerTemplate', function(){
        return {
            restrict: 'E',
            templateUrl: "partials/footer.html",
            replace: true
        };
    });
