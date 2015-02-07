// Ng-routing to the pages when linked to
var flightinfoApp = angular.module('flightinfoApp', [
    'ngRoute','ui.bootstrap', 'ngTouch', 'ngAnimate']);


flightinfoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/page2',{
                // flight form page
                templateUrl:'flightinfo.html'
            }).
            when('/page3',{
                // each flight detailed display
                templateUrl:'flightinfodetails.html',
                controller: 'FlightDetailedCtrl'
            }).
            when('/page4',{
                // each favourite flight detailed display
                templateUrl:'favourites.html',
                controller: 'FavouriteCtrl'
            }).
            otherwise({
                redirectTo: '/page2'
            });
    }
]);