/**
 * Created by scott on 12/1/16.
 */
angular.module('housingApp').controller('mainCtrl', function($scope, NgMap ) {

    if(!localStorage.housing){
        localStorage.setItem('housing', JSON.stringify( [] ) );
    }

    if(localStorage.housing){
        $scope.housing = JSON.parse( localStorage.getItem( 'housing' ) );

        $scope.addNewApartment = function(apartmentNames, aptAddress){
            $scope.housing.push( { apt: apartmentNames , aptAddress: aptAddress, rooms:  [] } );
            localStorage.setItem('housing', JSON.stringify( $scope.housing ) );

            $scope.addApartment = '';
            $scope.addAddress = '';

        };

    }

    $scope.googleMapsKey = 'AIzaSyDMZFS_FCkoefKIoivZpwjjRdW2yvHxdW4';

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log(map)
    })


    });