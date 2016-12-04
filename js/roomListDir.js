/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('roomListDir', function(){

    return {
        templateUrl: './html/roomList.html',
        scope: {
            rooms: '='
        },
        link: function(scope, element, attributes){

            scope.addRoom = function(rooms, roomId) {

                 var newRoom = rooms.rooms.push({ roomId : roomId } );
                scope.housing = JSON.parse( localStorage.getItem( 'housing' ) )

                var trackAptIndex;
                for(var i = 0; i < scope.housing.length; i++){
                    if(scope.housing[i].apt === rooms.apt){
                        trackAptIndex = i;
                    }
                }

                scope.housing[trackAptIndex].rooms.push( { roomId : roomId } )
                localStorage.setItem( 'housing' , JSON.stringify( scope.housing ) );


                // reset the input text
                scope.roomId = '';
            }


        }
    };

});