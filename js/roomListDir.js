/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('roomListDir', function(){

    return {
        templateUrl: 'https://crazycraka.github.io/no-server-project/html/roomList.html',
        scope: {
            rooms: '='
        }
    };

});