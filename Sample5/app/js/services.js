'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory('Page', function () {
    var title = "Farmers Fitness Repair & Services";
    return {
        title: function () { return title; },
        setTitle: function (newTitle) {
            title = newTitle;
        }
    };
});
