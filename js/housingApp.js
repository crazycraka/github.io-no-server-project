/**
 * Created by scott on 12/1/16.
 */
var app = angular.module('housingApp', [ 'ngAnimate', 'ngMap', 'ui.router'] );

app.config( function( $stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state( 'home', {
            url: '/home',
            templateUrl: './html/blankFile.html'
        })
        .state('googleMap', {
            url: '/googleMap',
            templateUrl: './html/googlemaps.html'
        });
});