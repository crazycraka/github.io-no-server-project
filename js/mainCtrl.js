/**
 * Created by scott on 12/1/16.
 */
angular.module('housingApp').controller('mainCtrl', function($scope) {

    if(!localStorage.housing){
        localStorage.setItem('housing', JSON.stringify( [] ) );
    }

    if(localStorage.housing){
        $scope.housing = JSON.parse( localStorage.getItem( 'housing' ) );
    }


    $scope.addNewApartment = function(apartmentNames){

        $scope.housing = JSON.parse( localStorage.getItem( 'housing' ) );

        $scope.housing.push( { apt: apartmentNames , rooms:  [ { roomId: 201, roomInfo: { } } ] } );

        localStorage.setItem('housing', JSON.stringify( $scope.housing ) );

        $scope.addApartment = '';

    };















    // $scope.housing = {
    //     apt1: {
    //         address: '123 hickory st',
    //         rooms: [
    //              {
    //                 roomId: '100',
    //                 roomCount: '1',
    //                 bathCount: '1',
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             {
    //                 roomId: 200,
    //                 roomCount: 2,
    //                 bathCount: 1.5,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             {
    //                 roomId: 300,
    //                 roomCount: 3,
    //                 bathCount: 1.5,
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             {
    //                 roomId: 400,
    //                 roomCount: 4,
    //                 bathCount: 2,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: true
    //             }
    //         ]
    //     },
    //     apt2: {
    //         address: '457 washington drive',
    //         rooms: {
    //             1: {
    //                 roomId: '100',
    //                 roomCount: '1',
    //                 bathCount: '1',
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             2: {
    //                 roomId: 200,
    //                 roomCount: 2,
    //                 bathCount: 1.5,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: false
    //             },
    //             3: {
    //                 roomId: 300,
    //                 roomCount: 3,
    //                 bathCount: 1.5,
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             4: {
    //                 roomId: 400,
    //                 roomCount: 4,
    //                 bathCount: 2,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: false
    //             }
    //         }
    //     },
    //     apt3: {
    //         address: '420 elevation st.',
    //         rooms: {
    //             1: {
    //                 roomId: '100',
    //                 roomCount: '1',
    //                 bathCount: '1',
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: false
    //             },
    //             2: {
    //                 roomId: 200,
    //                 roomCount: 2,
    //                 bathCount: 1.5,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             3: {
    //                 roomId: 300,
    //                 roomCount: 3,
    //                 bathCount: 1.5,
    //                 kitchen: true,
    //                 notes: '',
    //                 occupied: true
    //             },
    //             4: {
    //                 roomId: 400,
    //                 roomCount: 4,
    //                 bathCount: 2,
    //                 kitchen: false,
    //                 notes: '',
    //                 occupied: false
    //             }
    //         }
    //     }
    // }


})