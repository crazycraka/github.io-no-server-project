/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('houseListDir', function(){

    return {
        templateUrl: './html/houseList.html',
        scope: {
            apartments: '='
        }
    }
});