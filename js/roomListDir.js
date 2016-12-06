/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('roomListDir', function () {

    return {
        templateUrl: './html/roomList.html',
        scope: {
            rooms: '='
        },
        link: function (scope, element, attributes) {

            scope.addRoom = function (rooms, roomId, roomCount, bathCount, kitchenApp) {

                var newRoom = rooms.rooms.push({});
                scope.housing = JSON.parse(localStorage.getItem('housing'))

                var trackAptIndex;
                for (var i = 0; i < scope.housing.length; i++) {
                    if (scope.housing[i].apt === rooms.apt) {
                        trackAptIndex = i;
                    }
                }

                scope.housing[trackAptIndex].rooms.push({
                    roomId: roomId,
                    roomInfo: {
                        roomCount: roomCount,
                        bathCount: bathCount,
                        kitchenApp: kitchenApp
                } } );

                console.log(scope.housing);
                localStorage.setItem('housing', JSON.stringify(scope.housing));



                // reset the input text
                scope.roomId = '';
                scope.roomCount = '';
                scope.bathCount = '';
                scope.kitchenApp = '';
                console.log(rooms);
            };
            // END OF ADDROOM

            scope.roomSlider = function () {
                element.children.toggleClass('room-slide');
            };
            // END OF ROOMSLIDER


        }
    };

});