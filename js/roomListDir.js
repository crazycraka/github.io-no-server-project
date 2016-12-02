/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('roomListDir', function(){

    return {
        templateUrl: './html/roomList.html',
        scope: {
            rooms: '='
        }
    };

});